# Test Strategy

## Purpose

Ensure SQLUMEN produces deterministic, accurate, and reproducible analysis across supported SQL dialects.

## Testing Levels

### Unit Tests

Test individual parser adapters, semantic-model transformations, analyzer plugins, graph helpers, and optimization rules in isolation.

### Integration Tests

Exercise the complete deterministic pipeline:

```text
Parser → Semantic Model → Analyzer Plugins → Graph Builder → Rule Engine
```

### UI Tests

Verify graph rendering, interactions, source highlighting, panel states, accessibility, and theme behavior.

### Regression Tests

Prevent previously supported SQL queries from breaking after parser, analyzer, schema, or UI updates.

### Manual Tests

Perform visual inspection of layout, readability, interactions, and recoverable error states.

### Performance Tests

Measure small, medium, large, and deeply nested queries, including long CTE chains and large graphs.

## Success Criteria

Every supported SQL query should produce:

- Valid AST
- Valid Semantic Model
- Valid Graph JSON
- Renderable graph
- Stable deterministic counts and identifiers

Unsupported syntax must produce explicit diagnostics rather than silent incorrect output.