import { BOOKINGS, CONTRACT_CASES } from '../shared/contract.js';
import { evaluateCodeBased } from '../code-based/engine.js';
import { evaluateLowCode } from '../low-code/interpreter.js';

const elements = {
  form: document.querySelector('#comparison-form'),
  start: document.querySelector('#start-time'),
  duration: document.querySelector('#duration'),
  blocked: document.querySelector('#blocked'),
  reset: document.querySelector('#reset'),
  scenarios: document.querySelector('.scenario-buttons'),
  codeResult: document.querySelector('#code-result'),
  lowResult: document.querySelector('#low-result'),
  testBody: document.querySelector('#test-body'),
  testSummary: document.querySelector('#test-summary')
};

function currentInput() {
  return {
    startTime: elements.start.value,
    duration: Number(elements.duration.value),
    blocked: elements.blocked.checked
  };
}

function renderDecision(target, result) {
  target.className = `result ${result.available ? 'available' : 'unavailable'}`;
  target.replaceChildren();
  const heading = document.createElement('strong');
  heading.textContent = result.available ? 'Available' : 'Unavailable';
  const message = document.createElement('span');
  message.textContent = result.message;
  const code = document.createElement('code');
  code.textContent = result.code;
  target.append(heading, message, code);
}

function runComparison(input = currentInput()) {
  renderDecision(elements.codeResult, evaluateCodeBased(input));
  renderDecision(elements.lowResult, evaluateLowCode(input));
}

function executeContract(engine, testCase) {
  if (testCase.id === 'T8') {
    const before = JSON.stringify(BOOKINGS);
    engine(testCase.input);
    return before === JSON.stringify(BOOKINGS) ? 'DATA_UNCHANGED' : 'DATA_MUTATED';
  }
  return engine(testCase.input).code;
}

function renderContractTable() {
  let codePassed = 0;
  let lowPassed = 0;
  for (const testCase of CONTRACT_CASES) {
    const codeObserved = executeContract(evaluateCodeBased, testCase);
    const lowObserved = executeContract(evaluateLowCode, testCase);
    const codeOk = codeObserved === testCase.expected;
    const lowOk = lowObserved === testCase.expected;
    if (codeOk) codePassed += 1;
    if (lowOk) lowPassed += 1;

    const row = document.createElement('tr');
    [
      `${testCase.id}: ${testCase.label}`,
      testCase.expected,
      codeObserved,
      lowObserved,
      codeOk && lowOk ? 'PASS' : 'FAIL'
    ].forEach((value, index) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      if (index === 4) cell.className = codeOk && lowOk ? 'pass' : 'fail';
      row.append(cell);
    });
    elements.testBody.append(row);
  }
  elements.testSummary.textContent = `Code ${codePassed}/8 / Low-code ${lowPassed}/8`;
  elements.testSummary.classList.add(codePassed === 8 && lowPassed === 8 ? 'all-pass' : 'has-failures');
}

elements.form.addEventListener('submit', (event) => {
  event.preventDefault();
  runComparison();
});

elements.reset.addEventListener('click', () => {
  elements.start.value = '12:00';
  elements.duration.value = '60';
  elements.blocked.checked = false;
  runComparison();
});

elements.scenarios.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-case]');
  if (!button) return;
  const testCase = CONTRACT_CASES.find((candidate) => candidate.id === button.dataset.case);
  elements.start.value = testCase.input.startTime;
  elements.duration.value = String(testCase.input.duration);
  elements.blocked.checked = testCase.input.blocked;
  runComparison(testCase.input);
});

renderContractTable();
runComparison();
