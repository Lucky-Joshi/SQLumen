# Rule-Based Optimization

## Rule Categories

### Projection

- `SELECT *`
- Unused columns

### Filtering

- Missing `WHERE` where a broad scan may be accidental
- Functions on indexed columns, when index metadata is available
- Implicit casts

### Joins

- Cartesian joins
- Missing `ON`
- Duplicate joins
- `DISTINCT` potentially hiding duplicate rows

### Aggregation

- Unnecessary `GROUP BY`
- Redundant `DISTINCT`

### Sorting

- `ORDER BY` before `LIMIT`
- Multiple or conflicting `ORDER BY` expressions

### Subqueries

- Nested `IN`
- Correlated subqueries
- Repeated subqueries

### Complexity

- Too many joins
- Too many CTEs
- Deep nesting
- Multiple set operations

## Rule Design

Rules are deterministic, independently identifiable, and evaluated against the Semantic Model or Graph JSON. A rule must not claim facts that are unavailable from the input. For example, index-specific advice requires index metadata and should otherwise be phrased conditionally.

## Severity

- `Info`: educational or low-risk observation
- `Warning`: likely maintainability or performance concern
- `Critical`: high-confidence issue requiring attention

Severity is a product signal, not a guarantee of runtime impact.

## Output

Each finding contains:

- Rule ID
- Severity
- Description
- Recommendation
- Documentation link
- Source location, when available
- Confidence or applicability notes, when needed