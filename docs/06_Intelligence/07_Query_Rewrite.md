# Query Rewrite

## Purpose

Suggest cleaner SQL while preserving the original query's meaning.

## Rules

- Never change query meaning silently.
- Never invent columns.
- Never invent tables.
- Never invent constraints or indexes.
- Preserve dialect unless the user requests a conversion.
- Clearly identify assumptions and uncertain equivalence.

## Presentation

```text
Original
    ↓
Rule-Based Rewrite
    ↓
Intelligence Rewrite
```

Display a diff highlighting changes. Deterministic rule-based rewrites must remain distinguishable from optional model suggestions.