# Practice 12 - Code-Based vs Low-Code Comparison

**Student:** Yermekuly Alibek  
**ID:** 24B031755  
**Class:** Tuesday, 16:00-19:00

This public repository compares two implementations of the same fictional Smart Campus Room Availability Checker contract:

1. A code-based JavaScript rule engine.
2. A clearly labeled **simulated low-code** Appsmith-style workflow with a declarative JSON export and a restricted local interpreter.

The low-code implementation is intentionally disclosed as a simulation. It was not exported from Appsmith Cloud and does not claim real platform hosting. This matches the practice instruction to label incomplete or simulated low-code behavior.

## Links

- **Live demo:** https://alibekermek228.github.io/practice-12-smart-campus-comparison/
- **Public repository:** https://github.com/alibekermek228/practice-12-smart-campus-comparison
- **PDF report:** [report/Practice_12_Report.pdf](report/Practice_12_Report.pdf)

## Shared contract

- One fictional room: Innovation Lab.
- Fixed current time: 09:00.
- Existing bookings: 10:00-11:00 and 14:00-15:00.
- Inputs: future start time, duration and blocked flag.
- Outputs: availability boolean, reason code and visible message.
- No login, payment, production database, real personal data or booking mutation.

The six acceptance criteria and full input/output definition are in [report/shared-contract.md](report/shared-contract.md).

## Run locally

Requirements: Node.js 24.22.3. No package installation is required.

```bash
node --test
node scripts/build.mjs
node scripts/serve.mjs
```

Open `http://127.0.0.1:4173`.

## Actual verification

```text
Shared contract: code-based 8/8, low-code simulation 8/8
Additional security checks: 4/4
Total automated tests: 12 passed, 0 failed
Static build: passed
Browser console errors: 0
```

See [report/test-results.md](report/test-results.md) and the evidence screenshots.

## Repository map

```text
index.html                         Responsive comparison interface
src/shared/contract.js             Shared fixtures, helpers and eight cases
src/code-based/engine.js           Code-based rule engine
src/low-code/workflow-config.js    Declarative ordered rule model
src/low-code/interpreter.js        Restricted local workflow interpreter
src/low-code/appsmith-export.json  Simulated low-code export
src/ui/app.js                      Safe DOM presentation and test table
tests/                             Contract and security checks
report/                            Contract, matrix, security, reflection and PDF
evidence/                          Browser and terminal screenshots
.github/workflows/pages.yml        Test, build and GitHub Pages deployment
```

## Recommendation

Use the code-based solution for this rule-heavy student project because it offers direct testing, reviewable diffs and strong portability. A real low-code platform becomes attractive when managed data connectors and rapid internal delivery matter more than source-level control.

## AI disclosure

OpenAI Codex (GPT-5 family) assisted with implementation, comparison and documentation. Every result in this repository comes from executed tests, inspected source or safe browser checks. See [report/ai-reflection.md](report/ai-reflection.md).
