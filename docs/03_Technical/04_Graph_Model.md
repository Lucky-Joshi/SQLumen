# Graph Model

## Graph Philosophy

The graph represents logical SQL structure and data flow, not physical execution. It must not imply actual join algorithms, indexes, row counts, or runtime order unless those facts come from an optional execution plan.

## Graph Structure

```text
Graph JSON
├── schemaVersion
├── nodes
├── edges
├── metadata
├── warnings
└── statistics
```

## Node Categories

- Table
- Join
- Filter
- Aggregate
- Window
- Sort
- Limit
- CTE
- Subquery
- Union

## Edge Types

- Reads From
- Produces
- Joins
- Filters
- Aggregates
- Orders
- Limits
- Contains

Edge types describe logical relationships rather than performance characteristics.

## Graph Version

Every graph contains `schemaVersion`. Consumers must validate the version before reading the graph and must report unsupported versions explicitly rather than silently misinterpreting them.

## Deterministic Generation

Given the same SQL, dialect, parser version, and analysis version, graph generation should be deterministic. Node and edge identifiers must be stable enough to support UI selection, source highlighting, tests, and exports.

## Optional Execution Data

An EXPLAIN plan may enrich metadata or warnings, but physical execution details must remain distinguishable from the logical graph. The absence of an EXPLAIN plan must never be presented as evidence of runtime behavior.