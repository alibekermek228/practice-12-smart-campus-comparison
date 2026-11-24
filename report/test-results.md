# Identical test results

Executed on November 24, 2026 with Node.js v24.22.3.

| ID | Input summary | Expected | Code-based | Low-code simulation | Result |
|---|---|---|---|---|---|
| T1 | 12:00, 60 min, open | AVAILABLE | AVAILABLE | AVAILABLE | PASS |
| T2 | 10:30, 30 min, open | OVERLAP | OVERLAP | OVERLAP | PASS |
| T3 | 12:00, 60 min, blocked | ROOM_BLOCKED | ROOM_BLOCKED | ROOM_BLOCKED | PASS |
| T4 | 12:00, 0 min, open | INVALID_DURATION | INVALID_DURATION | INVALID_DURATION | PASS |
| T5 | 12:00, 121 min, open | INVALID_DURATION | INVALID_DURATION | INVALID_DURATION | PASS |
| T6 | 08:30, 30 min, open | START_NOT_FUTURE | START_NOT_FUTURE | START_NOT_FUTURE | PASS |
| T7 | 11:00, 30 min, open | AVAILABLE | AVAILABLE | AVAILABLE | PASS |
| T8 | Run overlap check and compare booking JSON | DATA_UNCHANGED | DATA_UNCHANGED | DATA_UNCHANGED | PASS |

## Totals

- Code-based contract tests: **8/8**.
- Low-code simulation contract tests: **8/8**.
- Additional security checks: **4/4**.
- Complete automated suite: **12 passed, 0 failed, 0 skipped**.
- Static build: **passed**.

## Exact commands

```text
node --test
node scripts/build.mjs
```

The browser verification also confirmed T1, T2, T3 and narrow-screen layout. No console error or warning was present.
