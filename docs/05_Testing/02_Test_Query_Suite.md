# Test Query Suite

Queries progress from beginner to advanced and are executed for each applicable supported dialect.

## Level 1: Simple SELECT

Verify selected columns and one table.

## Level 2: WHERE

Verify filter detection and source location.

## Level 3: INNER JOIN

Verify two tables, one join node, and join condition.

## Level 4: LEFT JOIN

Verify join type and preserved left-side semantics.

## Level 5: Multiple JOINs

Verify stable node and edge relationships across three or more tables.

## Level 6: GROUP BY

Verify grouping expressions and aggregate nodes.

## Level 7: HAVING

Verify post-aggregation filtering.

## Level 8: Window Functions

Verify partitioning, ordering, and window function nodes.

## Level 9: CTE

Verify named CTE nodes and references.

## Level 10: Nested Subquery

Verify nested query boundaries and parent-child relationships.

## Level 11: Recursive CTE

Verify recursive metadata and safe handling of recursive references.

## Level 12: UNION

Verify set-operation node and input branches.

## Level 13: UNION ALL

Verify that duplicate-preserving semantics are retained.

## Level 14: Complex Analytics Query

Combine joins, filters, aggregates, windows, CTEs, and ordering.

## Level 15: Production-Scale Query

Use a 300+ line representative query to test parsing, diagnostics, graph layout, rendering, and performance.

## Fixture Requirements

Each query fixture records:

- Query ID
- Dialect
- Input SQL
- Intended features
- Expected warnings
- Expected node and edge counts
- Expected complexity range