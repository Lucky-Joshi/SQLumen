# SQLUMEN Development Tasks

This is the ordered implementation backlog. Do not start a task until every
listed dependency is complete. A task is complete only when its deliverables,
tests, documentation, and Definition of Done are satisfied.

## Task Sequence

| ID | Title | Dependencies | Complexity | Priority |
| --- | --- | --- | --- | --- |
| T001 | Establish repository tooling | None | Medium | P0 |
| T002 | Create application and package skeleton | T001 | Medium | P0 |
| T003 | Define shared contracts and validation | T002 | High | P0 |
| T004 | Implement parser adapter | T003 | High | P0 |
| T005 | Implement Semantic Model adapter | T004 | High | P0 |
| T006 | Implement analyzer plugin framework | T005 | High | P0 |
| T007 | Implement core analyzer plugins | T006 | High | P0 |
| T008 | Implement Graph Builder | T007 | High | P0 |
| T009 | Implement Rule Engine | T008 | High | P0 |
| T010 | Implement deterministic request pipeline | T009 | High | P0 |
| T011 | Build editor and application shell | T010 | High | P0 |
| T012 | Build graph visualization | T011 | High | P0 |
| T013 | Build analysis panels and interactions | T012 | High | P0 |
| T014 | Add DDL and EXPLAIN ingestion | T010 | High | P1 |
| T015 | Add export and persistence boundaries | T013 | Medium | P1 |
| T016 | Implement Intelligence context and validation | T014 | High | P1 |
| T017 | Add Intelligence features | T016 | High | P1 |
| T018 | Complete accessibility and performance hardening | T015, T017 | High | P0 |
| T019 | Complete release validation | T018 | High | P0 |
| T020 | Publish first implementation release | T019 | Medium | P0 |

## Task Specifications

### T001 — Establish Repository Tooling

- **Description:** Add package manifest, TypeScript strict configuration, Vite,
  ESLint, Prettier, test runner, editor settings, and scripts.
- **Dependencies:** None.
- **Deliverables:** Reproducible install, `dev`, `build`, `typecheck`, `lint`,
  `test`, and formatting commands.
- **Definition of Done:** A clean checkout installs and all configured checks
  run successfully.

### T002 — Create Application and Package Skeleton

- **Description:** Create `apps/web` and modular packages for parser,
  semantic-model, analyzer, graph, rules, UI, and shared contracts.
- **Dependencies:** T001.
- **Deliverables:** Importable package boundaries and documented dependency
  direction.
- **Definition of Done:** Packages compile, have no circular layer dependency,
  and contain initial test locations.

### T003 — Define Shared Contracts and Validation

- **Description:** Define typed source locations, diagnostics, Semantic Model,
  Graph JSON v1, warnings, statistics, and Intelligence output schemas.
- **Dependencies:** T002.
- **Deliverables:** Runtime validation, schema fixtures, version constants, and
  contract tests.
- **Definition of Done:** Invalid contracts fail explicitly and valid fixtures
  round-trip deterministically.

### T004 — Implement Parser Adapter

- **Description:** Integrate SQLGlot behind a dialect-aware parser interface.
- **Dependencies:** T003.
- **Deliverables:** PostgreSQL, MySQL, and SQLite parsing; syntax diagnostics;
  source mapping; unsupported-feature reporting.
- **Definition of Done:** Parser fixtures cover valid, invalid, and unsupported
  queries for each initial dialect.

### T005 — Implement Semantic Model Adapter

- **Description:** Convert parser AST output into parser-independent semantic
  structures.
- **Dependencies:** T004.
- **Deliverables:** Tables, columns, joins, filters, aggregates, windows, CTEs,
  subqueries, set operations, and source locations.
- **Definition of Done:** No downstream package imports parser-specific AST
  types and semantic fixtures are deterministic.

### T006 — Implement Analyzer Plugin Framework

- **Description:** Define plugin interfaces, registration, execution order,
  diagnostics, and result merging.
- **Dependencies:** T005.
- **Deliverables:** Plugin lifecycle and isolated test harness.
- **Definition of Done:** A test plugin can run independently and merge results
  without shared mutable state.

### T007 — Implement Core Analyzer Plugins

- **Description:** Implement table, join, filter, aggregate, window, CTE,
  subquery, set-operation, complexity, statistics, and smell analyzers.
- **Dependencies:** T006.
- **Deliverables:** Complete deterministic semantic analysis.
- **Definition of Done:** Query-suite fixtures assert expected findings and
  source locations.

### T008 — Implement Graph Builder

- **Description:** Convert Semantic Model results into stable Graph JSON v1.
- **Dependencies:** T007.
- **Deliverables:** Stable node IDs, edges, metadata, warnings, statistics, and
  schema version.
- **Definition of Done:** Golden graph fixtures are reproducible and renderable.

### T009 — Implement Rule Engine

- **Description:** Add deterministic projection, filtering, join, aggregation,
  sorting, subquery, and complexity rules.
- **Dependencies:** T008.
- **Deliverables:** Rule registry and structured findings with severity,
  recommendation, confidence, and source location.
- **Definition of Done:** Rules never execute SQL, invent evidence, or call the
  Intelligence Layer; each rule has tests.

### T010 — Implement Deterministic Request Pipeline

- **Description:** Orchestrate parse, semantic adaptation, plugins, graph
  building, and rules with explicit loading and failure states.
- **Dependencies:** T009.
- **Deliverables:** Typed request/result API and recoverable error handling.
- **Definition of Done:** One request produces a valid graph or actionable
  diagnostics without a false success response.

### T011 — Build Editor and Application Shell

- **Description:** Add Monaco editor, dialect selection, status bar, layout,
  diagnostics, and request lifecycle state.
- **Dependencies:** T010.
- **Deliverables:** Usable shell that accepts SQL and displays deterministic
  results.
- **Definition of Done:** Invalid SQL, empty input, loading, and successful
  states are accessible and tested.

### T012 — Build Graph Visualization

- **Description:** Render Graph JSON with React Flow and Dagre using documented
  node shapes, tokens, edges, minimap, zoom, and pan.
- **Dependencies:** T011.
- **Deliverables:** Stable graph canvas and node components.
- **Definition of Done:** Graphs render without missing nodes, accidental
  overlaps, or crashes for supported fixtures.

### T013 — Build Analysis Panels and Interactions

- **Description:** Add statistics, warnings, optimization, node inspector,
  search, source highlighting, keyboard shortcuts, and theme support.
- **Dependencies:** T012.
- **Deliverables:** Complete deterministic analysis UX.
- **Definition of Done:** Every documented interaction works with pointer and
  keyboard equivalents where applicable.

### T014 — Add DDL and EXPLAIN Ingestion

- **Description:** Parse optional DDL and EXPLAIN inputs as bounded,
  dialect-aware evidence without changing the logical graph contract.
- **Dependencies:** T010.
- **Deliverables:** Schema context, physical-plan tree, and clear evidence
  boundaries.
- **Definition of Done:** Missing or unsupported inputs degrade gracefully and
  physical details never appear as logical facts.

### T015 — Add Export and Persistence Boundaries

- **Description:** Add versioned Graph JSON export, query/session persistence,
  and local-only storage boundaries.
- **Dependencies:** T013.
- **Deliverables:** Export/import validation and privacy-safe local persistence.
- **Definition of Done:** Exported contracts are versioned, invalid imports
  fail explicitly, and no network request is required.

### T016 — Implement Intelligence Context and Validation

- **Description:** Build Context Builder, prompt builder, provider interface,
  output schema, safety validation, and unavailable-provider behavior.
- **Dependencies:** T014.
- **Deliverables:** Ollama-first local provider and validated structured output.
- **Definition of Done:** Intelligence consumes structured context only, cannot
  modify deterministic results, and works offline when disabled.

### T017 — Add Intelligence Features

- **Description:** Implement explanation modes, query rewrite suggestions,
  interview mode, and explanation templates.
- **Dependencies:** T016.
- **Deliverables:** Beginner, intermediate, and expert experiences with
  grounded confidence and visible caveats.
- **Definition of Done:** Safety fixtures reject invented indexes, plans,
  statistics, relationships, and execution claims.

### T018 — Complete Accessibility and Performance Hardening

- **Description:** Validate WCAG AA behavior, reduced motion, high contrast,
  screen-reader labels, graph performance, memory stability, and large-query
  behavior.
- **Dependencies:** T015 and T017.
- **Deliverables:** Accessibility report, performance measurements, and fixes.
- **Definition of Done:** Documented budgets and accessibility checks pass.

### T019 — Complete Release Validation

- **Description:** Run full query suite, regression, contract, UI, security,
  privacy, build, and documentation checks.
- **Dependencies:** T018.
- **Deliverables:** Release candidate, changelog, known limitations, and
  migration notes.
- **Definition of Done:** Acceptance criteria are checked and all failures are
  resolved or explicitly documented.

### T020 — Publish First Implementation Release

- **Description:** Tag and publish the first implementation release.
- **Dependencies:** T019.
- **Deliverables:** Version tag, release notes, artifacts, and rollback plan.
- **Definition of Done:** CI release workflow succeeds and documentation links
  resolve.
