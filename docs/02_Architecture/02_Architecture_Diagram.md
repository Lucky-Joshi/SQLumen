# High-Level Architecture

```text
                 ┌──────────────────────┐
                 │     SQL Editor       │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │     SQL Parser       │
                 │     (AST Builder)    │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │ Semantic Model       │
                 │ Adapter              │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │   Analyzer Plugins   │
                 └──────────┬───────────┘
                            │
            ┌───────────────┼────────────────┐
            ▼               ▼                ▼
      Graph Builder    Rule Engine     Context Builder
            │               │                │
            ▼               ▼                ▼
      Graph JSON      Warnings         Ollama Prompt
            │                                │
            ▼                                ▼
      React Flow                     AI Explanation
            │
            ▼
      Interactive UI
```

## Optional Inputs

```text
SQL Query
DDL Schema
EXPLAIN Plan
```

Each input enriches the analysis but is not mandatory. DDL and EXPLAIN data are represented as optional context and do not replace deterministic query analysis.

## Contract Boundaries

- The parser emits an AST.
- The semantic model adapter translates parser-specific AST structures.
- Analyzer plugins consume the semantic model.
- The graph builder emits versioned Graph JSON.
- The rule engine consumes Graph JSON and produces warnings.
- The context builder prepares structured data for the optional Intelligence Layer.