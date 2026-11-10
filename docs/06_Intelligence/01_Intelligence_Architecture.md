# Intelligence Architecture

## Philosophy

The Intelligence Layer is an optional enhancement. SQLUMEN must remain fully functional without any AI model.

## Pipeline

```text
Graph JSON
    ↓
Warnings
    ↓
Statistics
    ↓
Context Builder
    ↓
Prompt Builder
    ↓
LLM
    ↓
Validated Response
```

The LLM never receives raw SQL analysis responsibilities. Its responsibilities are limited to:

- Explanation
- Education
- Suggestions
- Rewriting

Parsing, semantic analysis, graph generation, rule evaluation, and authoritative warnings remain deterministic.