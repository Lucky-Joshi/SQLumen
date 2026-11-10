# Optimization Strategy

## Evidence Sources

```text
Rule Engine
    ↓
Execution Plan
    ↓
Schema
    ↓
Intelligence Layer
```

## Priority

`Rule Engine > Execution Plan > Schema Evidence > Intelligence Suggestions`

The Intelligence Layer never contradicts deterministic analysis or presents an unverified suggestion as fact.

## Recommendation Format

Every recommendation includes:

```text
Reason
    ↓
Expected Benefit
    ↓
Confidence
```

If evidence is unavailable, the response must state that the benefit cannot be determined from the provided inputs.