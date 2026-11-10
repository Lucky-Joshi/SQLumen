# Expected Outputs

Every query fixture should specify:

```text
Input SQL
    ↓
Expected Tables
    ↓
Expected Joins
    ↓
Expected Filters
    ↓
Expected Aggregations
    ↓
Expected Graph Nodes
    ↓
Expected Warnings
    ↓
Expected Complexity Score
```

## Example

### Input

```sql
SELECT *
FROM users
JOIN orders ON users.id = orders.user_id;
```

### Expected

- Tables: `2`
- Joins: `1`
- Aggregates: `0`
- Warnings: `SELECT *`
- Graph nodes: `3` or the documented equivalent for the chosen graph representation

## Validation Rules

Expected outputs must distinguish exact values from ranges or conditional results. Warnings should assert rule IDs and severity, not only rendered text. Source locations and schema versions should be validated where deterministic.