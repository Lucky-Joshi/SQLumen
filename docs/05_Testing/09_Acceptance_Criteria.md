# Acceptance Criteria

## Parser

- 100% of approved valid fixtures parse successfully.
- Invalid fixtures return actionable diagnostics.
- Supported dialect metadata is preserved.

## Analyzer

- Joins, filters, aggregates, windows, CTEs, subqueries, and set operations are detected correctly for approved fixtures.
- Unsupported constructs are reported explicitly.

## Graph

- No expected nodes or edges are missing.
- Graph JSON contains a supported `schemaVersion`.
- Layout is renderable without unintended overlaps.

## UI

- Responsive.
- Accessible.
- Keyboard-operable.
- Stable under loading, error, empty, and unavailable states.

## AI

- Optional.
- Never blocks deterministic analysis.
- Does not replace or silently alter rule results.

## Privacy

- No SQL leaves the machine in Local Mode.
- Cloud AI requires explicit consent.
- Telemetry is disabled by default.

## Overall

The application remains usable without internet access and produces reproducible deterministic results for supported fixtures.