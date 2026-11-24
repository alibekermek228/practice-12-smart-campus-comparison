# Shared requirement and acceptance criteria

## User story

As a campus student, I want to enter a future start time and duration for one fictional room so that I receive a clear Available or Unavailable decision without changing its existing bookings.

## Fixed context

| Field | Value |
|---|---|
| Room | Innovation Lab |
| Fixed current time | 09:00 (540 minutes) |
| Booking 1 | Morning workshop, 10:00-11:00 |
| Booking 2 | Design review, 14:00-15:00 |
| Data scope | Fictional and immutable |

## Inputs

- `startTime`: valid `HH:MM` value.
- `duration`: number of minutes.
- `blocked`: boolean room-status flag.
- `bookings`: fixed fictional array supplied as shared context.

## Outputs

- `available`: boolean.
- `code`: stable reason code.
- `message`: understandable visible explanation.

## Acceptance criteria

1. **AC1:** Start time must be in the future relative to 09:00.
2. **AC2:** Duration must be greater than zero and at most 120 minutes.
3. **AC3:** An interval that overlaps an existing booking is unavailable.
4. **AC4:** A blocked room is unavailable.
5. **AC5:** The interface displays a clear decision without changing existing bookings.
6. **AC6:** Invalid input receives understandable feedback.

Both implementations use this unchanged contract and the same eight prepared test inputs.
