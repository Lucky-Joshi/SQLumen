# Parser Design

## Processing Pipeline

```text
SQL Query
    ↓
SQLGlot Parser
    ↓
AST
    ↓
Semantic Model Adapter
    ↓
Analyzer Plugins
```

## Input

- SQL query text
- Selected SQL dialect
- Optional parser configuration

## Responsibilities

- Syntax validation
- AST generation
- Dialect handling
- Source location mapping
- Parser diagnostics

The parser must preserve enough source information for graph nodes and warnings to link back to the original SQL.

## Semantic Model Boundary

The parser emits parser-specific AST data. The Semantic Model Adapter translates it into parser-independent structures before analyzer plugins run. Downstream modules must not depend directly on SQLGlot node types.

## Parser Output

The semantic representation exposes, where present:

- Tables
- Columns
- Joins
- CTEs
- Functions
- Window clauses
- Filters
- Aggregations
- Sorts
- Limits
- Subqueries
- Set operations

## Not Responsible For

- Graph generation
- Optimization recommendations
- Query execution
- AI explanation
- Visualization logic

## Diagnostics

Parser diagnostics should include:

- Stable error or warning code
- Human-readable message
- Dialect
- Line and column, when available
- Character range, when available
- Severity