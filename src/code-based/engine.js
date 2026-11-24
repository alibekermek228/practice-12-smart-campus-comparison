import { BOOKINGS, FIXED_NOW, decision, intervalsOverlap, timeToMinutes } from '../shared/contract.js';

export function evaluateCodeBased(input, context = {}) {
  const now = context.now ?? FIXED_NOW;
  const bookings = context.bookings ?? BOOKINGS;
  const start = timeToMinutes(input.startTime);
  const duration = Number(input.duration);

  if (!Number.isFinite(duration) || duration <= 0 || duration > 120) {
    return decision(false, 'INVALID_DURATION', 'Duration must be greater than 0 and at most 120 minutes.');
  }
  if (!Number.isFinite(start)) {
    return decision(false, 'INVALID_START', 'Enter a valid start time.');
  }
  if (start <= now) {
    return decision(false, 'START_NOT_FUTURE', 'Start time must be later than the fixed current time, 09:00.');
  }
  if (input.blocked === true) {
    return decision(false, 'ROOM_BLOCKED', 'Innovation Lab is blocked and cannot be reported as available.');
  }

  const end = start + duration;
  const conflict = bookings.find((booking) => intervalsOverlap(start, end, booking));
  if (conflict) {
    return decision(false, 'OVERLAP', `Requested time overlaps ${conflict.title}.`);
  }

  return decision(true, 'AVAILABLE', 'Innovation Lab is available for the complete requested interval.');
}
