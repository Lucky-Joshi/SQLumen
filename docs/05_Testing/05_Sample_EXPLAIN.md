# Sample EXPLAIN Plans

Include representative examples for:

- Simple scan
- Index scan
- Bitmap scan
- Nested loop
- Merge join
- Hash join
- Sort
- Aggregate
- Limit
- Parallel scan
- Materialize
- CTE scan
- Window aggregate
- Gather
- Gather merge

Each example includes:

```text
Original SQL
    ↓
EXPLAIN output
    ↓
Expected visualization
```

## Rules

EXPLAIN fixtures must identify the source dialect and whether the output is estimated or analyzed. Physical plan nodes must remain distinguishable from the logical SQL graph.

No fixture should imply measured runtime behavior unless it contains actual execution data and documents the environment that produced it.