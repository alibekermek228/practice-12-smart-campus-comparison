export const LOW_CODE_WORKFLOW = Object.freeze({
  platformModel: 'Appsmith-style simulated export',
  version: 1,
  rules: Object.freeze([
    Object.freeze({ operator: 'durationOutside', code: 'INVALID_DURATION', message: 'Duration must be greater than 0 and at most 120 minutes.' }),
    Object.freeze({ operator: 'invalidStart', code: 'INVALID_START', message: 'Enter a valid start time.' }),
    Object.freeze({ operator: 'notFuture', code: 'START_NOT_FUTURE', message: 'Start time must be later than the fixed current time, 09:00.' }),
    Object.freeze({ operator: 'blocked', code: 'ROOM_BLOCKED', message: 'Innovation Lab is blocked and cannot be reported as available.' }),
    Object.freeze({ operator: 'overlapsAny', code: 'OVERLAP', messageFromConflict: true })
  ]),
  defaultDecision: Object.freeze({ available: true, code: 'AVAILABLE', message: 'Innovation Lab is available for the complete requested interval.' })
});
