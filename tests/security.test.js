import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { evaluateCodeBased } from '../src/code-based/engine.js';
import { evaluateLowCode } from '../src/low-code/interpreter.js';

test('invalid nonnumeric duration receives understandable feedback', () => {
  for (const engine of [evaluateCodeBased, evaluateLowCode]) {
    const result = engine({ startTime: '12:00', duration: '<script>', blocked: false });
    assert.equal(result.code, 'INVALID_DURATION');
    assert.ok(result.message.length > 20);
  }
});

test('UI uses textContent and DOM nodes instead of innerHTML', async () => {
  const source = await readFile(new URL('../src/ui/app.js', import.meta.url), 'utf8');
  assert.equal(source.includes('innerHTML'), false);
  assert.equal(source.includes('textContent'), true);
});

test('simulated low-code export contains no secrets or connectors', async () => {
  const raw = await readFile(new URL('../src/low-code/appsmith-export.json', import.meta.url), 'utf8');
  const exported = JSON.parse(raw);
  assert.deepEqual(exported.secrets, []);
  assert.deepEqual(exported.connectors, []);
  assert.equal(raw.includes('apiKey'), false);
  assert.equal(raw.includes('password'), false);
});

test('package has no runtime dependencies', async () => {
  const raw = await readFile(new URL('../package.json', import.meta.url), 'utf8');
  const pkg = JSON.parse(raw);
  assert.equal(pkg.dependencies, undefined);
  assert.equal(pkg.devDependencies, undefined);
});
