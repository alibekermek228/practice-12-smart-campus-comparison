import test from 'node:test';
import assert from 'node:assert/strict';
import { BOOKINGS, CONTRACT_CASES } from '../src/shared/contract.js';
import { evaluateCodeBased } from '../src/code-based/engine.js';
import { evaluateLowCode } from '../src/low-code/interpreter.js';

const engines = [
  ['code-based', evaluateCodeBased],
  ['low-code simulation', evaluateLowCode]
];

function observed(engine, testCase) {
  if (testCase.id === 'T8') {
    const before = JSON.stringify(BOOKINGS);
    engine(testCase.input);
    return before === JSON.stringify(BOOKINGS) ? 'DATA_UNCHANGED' : 'DATA_MUTATED';
  }
  return engine(testCase.input).code;
}

for (const testCase of CONTRACT_CASES) {
  test(`${testCase.id}: ${testCase.label}`, () => {
    for (const [name, engine] of engines) {
      assert.equal(observed(engine, testCase), testCase.expected, name);
    }
  });
}
