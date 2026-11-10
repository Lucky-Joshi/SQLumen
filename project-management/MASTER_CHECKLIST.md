# SQLUMEN Master Checklist

This checklist is the source for progress calculations. Percentages must be
calculated as completed checked items divided by total applicable items; do not
manually estimate them. Completed items must never be deleted.

## Phase 1 — Foundation

- [ ] Repository tooling and package manifest
- [ ] TypeScript strict configuration
- [ ] React and Vite application
- [ ] ESLint and Prettier
- [ ] Test runner and scripts
- [ ] `apps/web` and package structure
- [ ] Shared package boundaries
- [ ] CI quality checks
- [ ] Clean install and build

## Phase 2 — Parser

- [ ] Parser interface
- [ ] SQLGlot integration
- [ ] PostgreSQL support
- [ ] MySQL support
- [ ] SQLite support
- [ ] User dialect selection
- [ ] Dialect diagnostics
- [ ] AST generation
- [ ] Syntax error handling
- [ ] Unsupported syntax warnings
- [ ] Source location mapping
- [ ] Parser unit tests

## Phase 3 — Semantic Model

- [ ] Semantic Model types
- [ ] AST adapter
- [ ] Tables and aliases
- [ ] Columns and expressions
- [ ] Joins and conditions
- [ ] Filters
- [ ] Aggregates and grouping
- [ ] Window functions
- [ ] CTEs
- [ ] Subqueries
- [ ] Set operations
- [ ] Semantic Model validation
- [ ] Semantic Model tests

## Phase 4 — Analyzer Plugins

- [ ] Plugin interface
- [ ] Plugin registry
- [ ] Result merging
- [ ] Table Analyzer
- [ ] Join Analyzer
- [ ] Filter Analyzer
- [ ] Aggregate Analyzer
- [ ] Window Analyzer
- [ ] CTE Analyzer
- [ ] Subquery Analyzer
- [ ] Set Operation Analyzer
- [ ] Complexity Analyzer
- [ ] Statistics Analyzer
- [ ] Query Smell Analyzer
- [ ] Analyzer integration tests

## Phase 5 — Graph Engine

- [ ] Graph JSON schema v1
- [ ] Stable node identifiers
- [ ] Table nodes
- [ ] Join nodes
- [ ] Filter nodes
- [ ] Aggregate nodes
- [ ] Window nodes
- [ ] Sort nodes
- [ ] Limit nodes
- [ ] CTE nodes
- [ ] Subquery nodes
- [ ] Union nodes
- [ ] Logical edges
- [ ] Metadata
- [ ] Warnings
- [ ] Statistics
- [ ] Golden Graph JSON tests

## Phase 6 — Visualization

- [ ] Request pipeline
- [ ] Monaco SQL editor
- [ ] Dialect selector
- [ ] Loading and empty states
- [ ] Diagnostic markers
- [ ] React Flow canvas
- [ ] Dagre layout
- [ ] Custom node cards
- [ ] Edges and labels
- [ ] Zoom and pan
- [ ] Mini map
- [ ] Node inspector
- [ ] Source highlighting
- [ ] Search
- [ ] Statistics panel
- [ ] Warnings panel
- [ ] Optimization panel
- [ ] Theme system
- [ ] Keyboard shortcuts

## Phase 7 — Rule Engine

- [ ] Rule registry
- [ ] Rule IDs and metadata
- [ ] Projection rules
- [ ] Filtering rules
- [ ] Join rules
- [ ] Aggregation rules
- [ ] Sorting rules
- [ ] Subquery rules
- [ ] Complexity rules
- [ ] Severity levels
- [ ] Recommendations
- [ ] Confidence and evidence limits
- [ ] Rule tests

## Phase 8 — DDL and Execution Plans

- [ ] DDL input
- [ ] DDL dialect handling
- [ ] Schema context
- [ ] EXPLAIN input
- [ ] PostgreSQL EXPLAIN support
- [ ] Execution tree
- [ ] Logical and physical evidence separation
- [ ] Unsupported plan diagnostics
- [ ] DDL and EXPLAIN tests

## Phase 9 — Export and Persistence

- [ ] Graph JSON export
- [ ] Graph JSON import validation
- [ ] Schema migration boundary
- [ ] Local query persistence
- [ ] Local analysis persistence
- [ ] Privacy-safe storage
- [ ] Export and persistence tests

## Phase 10 — Intelligence Layer

- [ ] Context Builder
- [ ] Prompt Builder
- [ ] Ollama provider
- [ ] Optional cloud provider boundary
- [ ] Output schema
- [ ] Output validation
- [ ] Beginner mode
- [ ] Intermediate mode
- [ ] Expert mode
- [ ] Explanation templates
- [ ] Query rewrite suggestions
- [ ] Interview mode
- [ ] Hallucination safeguards
- [ ] Provider-unavailable behavior
- [ ] Intelligence evaluation fixtures

## Phase 11 — Quality and Release

- [ ] Full regression suite
- [ ] WCAG AA review
- [ ] Keyboard navigation review
- [ ] Screen-reader labels
- [ ] High-contrast review
- [ ] Reduced-motion review
- [ ] Performance budgets
- [ ] Memory stability
- [ ] Security review
- [ ] Privacy review
- [ ] Release notes
- [ ] Known limitations
- [ ] Version tag
- [ ] Production build
- [ ] Deployment validation

## Calculation

```text
Overall progress =
completed checked items / total checklist items × 100
```

Agents must recalculate after changing this checklist and record the result in
`COMPLETION_DASHBOARD.md`.
