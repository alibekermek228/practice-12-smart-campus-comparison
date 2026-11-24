export const FIXED_NOW = 9 * 60;

export const BOOKINGS = Object.freeze([
  Object.freeze({ title: 'Morning workshop', start: 10 * 60, end: 11 * 60 }),
  Object.freeze({ title: 'Design review', start: 14 * 60, end: 15 * 60 })
]);

export const decision = (available, code, message) => Object.freeze({ available, code, message });

export function timeToMinutes(value) {
  if (typeof value !== 'string' || !/^\d{2}:\d{2}$/.test(value)) return Number.NaN;
  const [hours, minutes] = value.split(':').map(Number);
  if (hours > 23 || minutes > 59) return Number.NaN;
  return (hours * 60) + minutes;
}

export function minutesToTime(value) {
  const hours = Math.floor(value / 60).toString().padStart(2, '0');
  const minutes = (value % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function intervalsOverlap(start, end, booking) {
  return start < booking.end && end > booking.start;
}

export const CONTRACT_CASES = Object.freeze([
  Object.freeze({ id: 'T1', label: 'valid free interval', input: { startTime: '12:00', duration: 60, blocked: false }, expected: 'AVAILABLE' }),
  Object.freeze({ id: 'T2', label: 'overlap with booking', input: { startTime: '10:30', duration: 30, blocked: false }, expected: 'OVERLAP' }),
  Object.freeze({ id: 'T3', label: 'blocked room', input: { startTime: '12:00', duration: 60, blocked: true }, expected: 'ROOM_BLOCKED' }),
  Object.freeze({ id: 'T4', label: 'duration is zero', input: { startTime: '12:00', duration: 0, blocked: false }, expected: 'INVALID_DURATION' }),
  Object.freeze({ id: 'T5', label: 'duration is 121 minutes', input: { startTime: '12:00', duration: 121, blocked: false }, expected: 'INVALID_DURATION' }),
  Object.freeze({ id: 'T6', label: 'start is in the past', input: { startTime: '08:30', duration: 30, blocked: false }, expected: 'START_NOT_FUTURE' }),
  Object.freeze({ id: 'T7', label: 'adjacent to booking', input: { startTime: '11:00', duration: 30, blocked: false }, expected: 'AVAILABLE' }),
  Object.freeze({ id: 'T8', label: 'booking data unchanged', input: { startTime: '10:30', duration: 30, blocked: false }, expected: 'DATA_UNCHANGED' })
]);
