import { BOOKINGS, FIXED_NOW, decision, intervalsOverlap, timeToMinutes } from '../shared/contract.js';
import { LOW_CODE_WORKFLOW } from './workflow-config.js';

const operators = Object.freeze({
  durationOutside: ({ duration }) => !Number.isFinite(duration) || duration <= 0 || duration > 120,
  invalidStart: ({ start }) => !Number.isFinite(start),
  notFuture: ({ start, now }) => Number.isFinite(start) && start <= now,
  blocked: ({ input }) => input.blocked === true,
  overlapsAny: ({ start, end, bookings }) => Number.isFinite(start)
    ? bookings.find((booking) => intervalsOverlap(start, end, booking)) ?? false
    : false
});

export function evaluateLowCode(input, context = {}) {
  const now = context.now ?? FIXED_NOW;
  const bookings = context.bookings ?? BOOKINGS;
  const start = timeToMinutes(input.startTime);
  const duration = Number(input.duration);
  const runtime = { input, now, bookings, start, duration, end: start + duration };

  for (const rule of LOW_CODE_WORKFLOW.rules) {
    const match = operators[rule.operator](runtime);
    if (!match) continue;
    const message = rule.messageFromConflict
      ? `Requested time overlaps ${match.title}.`
      : rule.message;
    return decision(false, rule.code, message);
  }

  return decision(
    LOW_CODE_WORKFLOW.defaultDecision.available,
    LOW_CODE_WORKFLOW.defaultDecision.code,
    LOW_CODE_WORKFLOW.defaultDecision.message
  );
}
