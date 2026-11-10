# Node Definitions

Every node contains:

- `id`
- `label`
- `type`
- `metadata`
- `sourceLocation`, when available

Node identifiers must be stable within a graph. Node metadata may include aliases, dialect-specific details, and analyzer-produced properties.

## Table Node

Represents a table referenced by `FROM`, a join, a CTE source, or another relational expression.

Example source:

```sql
FROM users
```

## Join Node

Represents a join operation:

- `INNER`
- `LEFT`
- `RIGHT`
- `FULL`
- `CROSS`

Join metadata includes the join condition, when present, and references to its participating inputs.

## Filter Node

Represents filtering from:

- `WHERE`
- `HAVING`
- Join predicates, when modeled separately

## Aggregate Node

Represents aggregation from:

- `GROUP BY`
- `COUNT`
- `SUM`
- `AVG`
- `MIN`
- `MAX`

Metadata should distinguish grouping expressions from aggregate functions.

## Window Node

Represents window functions such as:

- `ROW_NUMBER`
- `RANK`
- `DENSE_RANK`
- `LAG`
- `LEAD`

Metadata includes partitioning, ordering, and frame details when available.

## Sort Node

Represents `ORDER BY` and its ordering expressions.

## Limit Node

Represents `LIMIT` and `OFFSET`.

## CTE Node

Represents a named query introduced by a `WITH` clause. Recursive status and the CTE body relationship should be preserved in metadata.

## Subquery Node

Represents a nested `SELECT` or relational subquery. The node connects the outer query context to the nested query graph.

## Union Node

Represents set operations such as `UNION`, `UNION ALL`, `INTERSECT`, and `EXCEPT`.