# Security checklist

This review follows the Lecture 12 distinction among SAST, DAST and SCA. It uses only the local project and does not scan a third-party service.

## SAST perspective

- [x] UI writes dynamic results with `textContent` and created DOM nodes, not `innerHTML`.
- [x] Start time and duration are validated before availability calculation.
- [x] The low-code interpreter exposes only five named operators.
- [x] Search found no credentials, API keys, passwords or environment secrets.
- [x] No SQL or command execution exists.
- [x] Local server resolves requested paths inside `dist`.

## DAST perspective

- [x] Valid future interval returns Available.
- [x] Overlap and blocked scenarios return Unavailable with a reason.
- [x] Zero, 121-minute, past and nonnumeric values return validation errors.
- [x] Adjacent interval is accepted without a false overlap.
- [x] Encoded traversal request receives 404 and does not expose files above `dist`.
- [x] Browser console errors and warnings: 0.

## SCA perspective

- [x] `package.json` has no runtime or development dependencies.
- [x] GitHub Actions uses pinned major action versions from GitHub-maintained actions.
- [x] Node runtime is pinned to 24.22.3.
- [ ] A real Appsmith/Budibase/Power Apps dependency review was not possible because the low-code version is a local simulation.

## Permissions and data exposure

- [x] No login, database, payment, analytics or production connector.
- [x] No real personal or booking data.
- [x] Public repository contains only assignment source and evidence.
- [x] GitHub Pages workflow has read-only contents plus Pages deployment permissions.

## Residual limitations

The browser checks are safe functional probes, not penetration testing. The simulated low-code export cannot prove the permission model, connector security, update process or portability of a real vendor platform.
