# Folder Structure

```text
sqlumen/
├── apps/
│   └── web/
├── packages/
│   ├── parser/
│   ├── semantic-model/
│   ├── analyzer/
│   ├── graph/
│   ├── rules/
│   ├── ui/
│   └── shared/
├── docs/
├── assets/
├── examples/
├── tests/
└── scripts/
```

## `apps/web`

Contains the frontend application, editor integration, settings, and application-level composition.

## `packages/parser`

SQL parser wrapper, dialect selection, AST output, and syntax diagnostics.

## `packages/semantic-model`

Parser-independent semantic types and adapters that normalize AST output for downstream modules.

## `packages/analyzer`

Plugin-style semantic analyzers for tables, joins, filters, aggregates, windows, and CTEs.

## `packages/graph`

Versioned Graph JSON generation, node creation, edge creation, metadata, and statistics.

## `packages/rules`

Deterministic optimization rules, query-smell detection, warning generation, and complexity scoring.

## `packages/ui`

Reusable UI components, graph rendering, node styling, and interaction primitives.

## `packages/shared`

Shared types, schemas, constants, and cross-package utilities.

## `tests`

Parser tests, semantic-model tests, analyzer tests, graph tests, rule tests, and integration tests.