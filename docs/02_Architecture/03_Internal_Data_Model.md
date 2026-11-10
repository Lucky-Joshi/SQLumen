# Internal Data Model

SQLUMEN converts every SQL query into a versioned Graph JSON document. This document becomes the internal API shared by the analyzer, graph, rule, renderer, export, and AI modules.

## Processing Model

```text
SQL → AST → Semantic Model → Graph JSON
```

The semantic model decouples parser-specific output from visualization and downstream consumers.

## Graph Structure

```json
{
  "schemaVersion": "1.0.0",
  "nodes": [],
  "edges": [],
  "metadata": {},
  "warnings": [],
  "statistics": {}
}
```

`schemaVersion` follows semantic versioning so consumers can detect incompatible changes and exports can remain backward-compatible.

## Node

```json
{
  "id": "table_users",
  "type": "table",
  "label": "users",
  "sourceLocation": {
    "start": 12,
    "end": 25
  },
  "properties": {}
}
```

## Edge

```json
{
  "id": "join1",
  "source": "users",
  "target": "orders",
  "type": "LEFT_JOIN",
  "condition": "users.id = orders.user_id"
}
```

## Metadata

Contains:

- SQL dialect
- Query type
- Parser version
- Analysis version
- Generation timestamp or request identifier, when needed for tracing

## Statistics

Stores:

- Table count
- Join count
- CTE count
- Aggregate count
- Window function count
- Query complexity score

## Warnings

Warnings are structured findings produced by deterministic analysis or rules. Each warning should include a stable identifier, severity, message, and source location when available.

Examples:

- `SELECT *`
- `DISTINCT` used
- Function on indexed column
- Possible Cartesian join