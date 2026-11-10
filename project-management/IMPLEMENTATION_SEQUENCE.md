# SQLUMEN Implementation Sequence

This is the strict engineering playbook for building SQLUMEN from an empty
repository to a production-ready application. Complete each phase in order.
The next phase may not depend on a temporary shortcut or an unstable contract
from an earlier phase.

## Global Rules

- Preserve the pipeline: SQL → Parser → AST → Semantic Model → Analyzer
  Plugins → Graph JSON → Renderer → optional Intelligence Layer.
- Keep deterministic analysis independent from React and model providers.
- Treat every exit criterion and Definition of Done as a gate.
- Run the smallest relevant tests during implementation and the full suite
  before release.
- Update `TASK_PROGRESS.md`, `PHASE_TRACKER.md`, `BUILD_STATUS.md`,
  `COMPLETION_DASHBOARD.md`, `CURRENT_PHASE.md`, and `NEXT_ACTION.md` after
  each completed phase.

## Sequence Overview

```text
Empty Repository
  ↓
1. Project Setup
  ↓
2. Repository Structure
  ↓
3. Tooling
  ↓
4. UI Shell
  ↓
5. Parser
  ↓
6. AST
  ↓
7. Semantic Model
  ↓
8. Analyzer Plugins
  ↓
9. Graph Builder
  ↓
10. Graph JSON
  ↓
11. React Flow Integration
  ↓
12. Rule Engine
  ↓
13. DDL Support
  ↓
14. ER Diagrams
  ↓
15. EXPLAIN Parser
  ↓
16. Execution Tree
  ↓
17. Intelligence Layer
  ↓
18. Export Features
  ↓
19. Performance Optimization
  ↓
20. Accessibility
  ↓
21. Testing
  ↓
22. Documentation Validation
  ↓
23. Production Release
```

## Phase 1 — Project Setup

### Objective

Define the project identity, license, package manager, supported runtime, and
initial development commands.

### Why It Comes Before the Next Phase

Every later file and command depends on a reproducible project baseline.

### Deliverables

- Package manifest and project metadata.
- MIT license and public repository files.
- Initial scripts and ignore rules.
- Node.js LTS and package-manager policy.

### Files Created

`package.json`, lockfile, `.gitignore`, `README.md`, `LICENSE`, and initial
configuration files.

### Modules Affected

Repository root only.

### Tests Required

- Clean dependency installation.
- Script discovery and smoke command.

### Exit Criteria

A clean checkout installs without undocumented manual steps.

### Definition of Done

Project metadata, license, scripts, and runtime requirements are committed and
documented; installation succeeds on the supported environment.

### Common Mistakes to Avoid

- Choosing dependencies before defining layer boundaries.
- Committing secrets or machine-specific files.
- Claiming implementation exists when the repository is only scaffolded.

## Phase 2 — Repository Structure

### Objective

Create the application and package layout that enforces the architecture.

### Why It Comes Before the Next Phase

Tooling must target stable paths, and code must have a clear ownership boundary
before implementation begins.

### Deliverables

- `apps/web`.
- `packages/parser`, `semantic-model`, `analyzer`, `graph`, `rules`, `ui`, and
  `shared`.
- Tests, scripts, examples, and documentation locations.
- Dependency direction rules.

### Files Created

Package manifests, source entry points, test directories, and package
configuration files.

### Modules Affected

All package boundaries; no feature logic yet.

### Tests Required

- Package resolution.
- Import boundary and circular-dependency checks.

### Exit Criteria

All packages resolve and dependency direction is documented.

### Definition of Done

The structure matches the architecture documents and every package has a
compilation and test entry point.

### Common Mistakes to Avoid

- Creating a monolithic `src` directory.
- Allowing UI or rules to import parser internals.
- Adding undocumented top-level directories.

## Phase 3 — Tooling

### Objective

Make formatting, type checking, linting, testing, building, and CI reproducible.

### Why It Comes Before the Next Phase

The UI shell and every domain module need automated feedback from their first
commit.

### Deliverables

- Strict TypeScript.
- Vite configuration.
- ESLint and Prettier.
- Test runner.
- CI install, typecheck, lint, test, and build jobs.

### Files Created

`tsconfig.json`, Vite, ESLint, Prettier, test-runner, editor, and workflow
configuration.

### Modules Affected

Repository-wide development infrastructure.

### Tests Required

- Type-check smoke test.
- Lint and formatting checks.
- Empty test-suite discovery.
- Production build smoke test.

### Exit Criteria

All quality commands pass on a clean checkout.

### Definition of Done

Local and CI commands are documented, deterministic, and green.

### Common Mistakes to Avoid

- Disabling strict mode to silence errors.
- Adding a linter without running it in CI.
- Making CI require features that do not exist yet.

## Phase 4 — UI Shell

### Objective

Create the application shell, layout regions, theme tokens, editor mount,
status bar, and loading/error boundaries without domain analysis logic.

### Why It Comes Before the Next Phase

The shell establishes user-facing contracts and lets later deterministic
results be integrated without embedding layout decisions in domain code.

### Deliverables

- React application entry point.
- Monaco placeholder integration.
- Main layout and status bar.
- Dark/light semantic theme tokens.
- Error, empty, and loading states.

### Files Created

`apps/web` entry points, layout components, theme configuration, and UI tests.

### Modules Affected

`apps/web`, `packages/ui`, shared UI types.

### Tests Required

- Shell renders.
- Theme switches.
- Loading, empty, and error states render.
- Keyboard focus smoke tests.

### Exit Criteria

The shell runs without parser or graph dependencies.

### Definition of Done

The UI is navigable, accessible at a basic level, and contains no SQL
analysis or provider logic.

### Common Mistakes to Avoid

- Parsing SQL inside React components.
- Hardcoding colors.
- Building panels around unversioned domain objects.

## Phase 5 — Parser

### Objective

Introduce a dialect-aware parser interface and integrate SQLGlot behind it.

### Why It Comes Before the Next Phase

AST creation is the only supported source for semantic extraction; downstream
modules must not parse raw SQL independently.

### Deliverables

- Parser interface.
- PostgreSQL, MySQL, and SQLite selection.
- Syntax diagnostics and unsupported-feature warnings.
- Source-location preservation.

### Files Created

Parser interfaces, SQLGlot adapter, dialect configuration, diagnostics, and
parser fixtures.

### Modules Affected

`packages/parser`, `packages/shared`.

### Tests Required

- Valid queries for each initial dialect.
- Invalid SQL diagnostics.
- Unsupported syntax handling.
- Source-location tests.

### Exit Criteria

Supported fixtures produce AST results and explicit diagnostics.

### Definition of Done

No downstream module imports SQLGlot directly; parser output is typed,
validated, dialect-aware, and tested.

### Common Mistakes to Avoid

- Silently falling back to the wrong dialect.
- Rewriting unsupported SQL.
- Coupling graph nodes to SQLGlot node classes.

## Phase 6 — AST

### Objective

Define the normalized AST boundary and validate parser output before semantic
conversion.

### Why It Comes Before the Next Phase

The Semantic Model adapter needs a stable, testable syntax representation rather
than provider-specific parser behavior.

### Deliverables

- AST types for statements, expressions, relations, predicates, functions,
  windows, CTEs, and set operations.
- AST validation and source ranges.
- Parser-to-AST normalization where needed.

### Files Created

AST types, validators, normalization helpers, and AST fixtures.

### Modules Affected

`packages/parser`, `packages/shared`.

### Tests Required

- AST shape tests for every supported construct.
- Invalid AST rejection.
- Source range preservation.

### Exit Criteria

Every supported parser fixture has a valid AST or explicit diagnostics.

### Definition of Done

AST contracts are documented, validated, deterministic, and independent of UI
or graph concerns.

### Common Mistakes to Avoid

- Treating raw SQL text as an AST.
- Dropping source locations.
- Adding visualization fields to syntax types.

## Phase 7 — Semantic Model

### Objective

Convert AST data into a parser-independent representation of SQL meaning.

### Why It Comes Before the Next Phase

Analyzer plugins must remain replaceable and must not depend on parser-specific
AST structures.

### Deliverables

- Tables, aliases, columns, expressions, joins, filters, aggregates, windows,
  CTEs, subqueries, and set operations.
- Source locations and unsupported-construct metadata.
- Semantic Model validation.

### Files Created

Semantic types, AST adapter, validators, fixtures, and contract documentation.

### Modules Affected

`packages/semantic-model`, `packages/parser`, `packages/shared`.

### Tests Required

- AST-to-model fixtures.
- Dialect normalization tests.
- Missing and unsupported construct tests.
- Determinism tests.

### Exit Criteria

No analyzer or downstream consumer imports parser AST types.

### Definition of Done

The Semantic Model fully represents approved query fixtures and preserves
meaning, source locations, and uncertainty.

### Common Mistakes to Avoid

- Designing the model around React nodes.
- Losing aliases or dialect semantics.
- Converting unknown constructs into confident facts.

## Phase 8 — Analyzer Plugins

### Objective

Build independently testable analyzers that extract one concern at a time.

### Why It Comes Before the Next Phase

Graph generation needs complete semantic findings and must not become the
location of business logic.

### Deliverables

- Plugin interface and registry.
- Table, join, filter, aggregate, window, CTE, subquery, set-operation,
  complexity, statistics, and smell plugins.

### Files Created

Analyzer interfaces, registry, plugin implementations, fixtures, and tests.

### Modules Affected

`packages/analyzer`, `packages/semantic-model`, `packages/shared`.

### Tests Required

- Unit tests per plugin.
- Plugin isolation tests.
- Result merge and ordering tests.
- Full query-suite integration tests.

### Exit Criteria

Expected semantic findings are produced without shared mutable state.

### Definition of Done

Every core SQL feature has analyzer coverage, tests, source locations, and
documented limitations.

### Common Mistakes to Avoid

- Creating one giant analyzer.
- Making plugins depend on React or the LLM.
- Computing visual layout in analyzers.

## Phase 9 — Graph Builder

### Objective

Transform Semantic Model results into a stable logical graph.

### Why It Comes Before the Next Phase

Graph JSON must be generated by one deterministic module before any renderer or
rule consumer is built.

### Deliverables

- Node and edge factories.
- Stable identity strategy.
- Metadata, warnings, statistics, and source locations.
- Logical flow semantics.

### Files Created

Graph builder, node/edge factories, ID utilities, and graph fixtures.

### Modules Affected

`packages/graph`, `packages/analyzer`, `packages/shared`.

### Tests Required

- Node and edge unit tests.
- Stable ID tests.
- Golden graph tests.
- Unsupported construct tests.

### Exit Criteria

Identical inputs produce identical logical graphs.

### Definition of Done

Graph generation contains no parser, UI, rule, or Intelligence logic and
passes deterministic contract tests.

### Common Mistakes to Avoid

- Parsing SQL again.
- Encoding physical execution assumptions.
- Using random IDs that break selection and regression tests.

## Phase 10 — Graph JSON

### Objective

Formalize Graph JSON v1 as a versioned internal API.

### Why It Comes Before the Next Phase

React Flow, exports, rules, and Intelligence context need a stable contract,
not internal object shapes.

### Deliverables

- `schemaVersion`.
- Nodes, edges, metadata, warnings, statistics.
- Runtime schema validation.
- Compatibility and migration policy.

### Files Created

Graph JSON schemas, validators, version constants, fixtures, and migration
documentation.

### Modules Affected

`packages/graph`, `packages/shared`, future consumers.

### Tests Required

- Valid and invalid schema fixtures.
- Version compatibility tests.
- Serialization and deserialization tests.

### Exit Criteria

Consumers reject unsupported versions explicitly.

### Definition of Done

Graph JSON is documented, validated, versioned, serializable, and consumed
through public types only.

### Common Mistakes to Avoid

- Treating incidental object formatting as the contract.
- Changing fields without a version decision.
- Allowing UI-only fields into the core schema.

## Phase 11 — React Flow Integration

### Objective

Render validated Graph JSON using React Flow and Dagre.

### Why It Comes Before the Next Phase

Users need a visual surface for the deterministic graph before optimization
findings or optional Intelligence are added.

### Deliverables

- Graph adapter from Graph JSON to React Flow.
- Custom node and edge components.
- Dagre layout, zoom, pan, minimap, selection, and source highlighting.

### Files Created

Graph canvas, node components, edge components, layout adapter, and UI tests.

### Modules Affected

`apps/web`, `packages/ui`, `packages/graph`.

### Tests Required

- Graph rendering fixtures.
- Node selection and source highlighting.
- Layout smoke tests.
- Keyboard and pointer interaction tests.

### Exit Criteria

All supported graph fixtures render without missing nodes or crashes.

### Definition of Done

The renderer consumes Graph JSON only, uses semantic theme tokens, and
supports documented interactions.

### Common Mistakes to Avoid

- Putting SQL analysis in node components.
- Rendering unvalidated graph data.
- Making color the only node distinction.

## Phase 12 — Rule Engine

### Objective

Implement deterministic optimization and query-smell rules.

### Why It Comes Before the Next Phase

DDL and EXPLAIN can enrich rule confidence, but the core rules must work
without them and without AI.

### Deliverables

- Rule registry and IDs.
- Projection, filtering, join, aggregation, sorting, subquery, and complexity
  rules.
- Severity, recommendation, confidence, and evidence fields.

### Files Created

`packages/rules` interfaces, rules, fixtures, and documentation links.

### Modules Affected

`packages/rules`, `packages/graph`, `packages/shared`, analysis panels.

### Tests Required

- Positive and negative rule fixtures.
- Severity and recommendation tests.
- False-positive boundary tests.

### Exit Criteria

Rules consume structured data, never execute SQL, and never call Intelligence.

### Definition of Done

Every implemented rule has a stable ID, tests, documentation, and explicit
evidence limitations.

### Common Mistakes to Avoid

- Claiming index or runtime benefits without evidence.
- Using `SELECT *` rules as syntax errors.
- Hiding warnings behind model output.

## Phase 13 — DDL Support

### Objective

Parse optional DDL and produce schema context for analysis.

### Why It Comes Before the Next Phase

ER diagrams, index-aware rules, and plan explanations need structured schema
metadata.

### Deliverables

- DDL input boundary.
- Tables, columns, keys, constraints, indexes, and relationships.
- Dialect-aware diagnostics and privacy limits.

### Files Created

DDL parser adapter, schema model, validators, and fixtures.

### Modules Affected

`packages/parser`, `packages/semantic-model`, `packages/shared`, `packages/rules`.

### Tests Required

- DDL fixtures for initial dialects.
- Constraint and index extraction.
- Unsupported DDL diagnostics.

### Exit Criteria

Schema evidence is optional, validated, and clearly separated from query facts.

### Definition of Done

DDL can enrich analysis without changing the core Graph JSON meaning or
requiring a database connection.

### Common Mistakes to Avoid

- Connecting to a live database.
- Inferring constraints as facts from naming conventions.
- Mixing DDL parsing into query parsing without a boundary.

## Phase 14 — ER Diagrams

### Objective

Render schema relationships as a separate ER diagram view.

### Why It Comes Before the Next Phase

EXPLAIN visualization is a different physical-plan concern; completing schema
visualization first keeps logical relationship modeling clear.

### Deliverables

- ER graph model.
- Relationship and cardinality display.
- DDL-derived and query-inferred relationship distinction.
- ER layout and navigation.

### Files Created

ER graph builder, ER nodes/edges, view components, and fixtures.

### Modules Affected

`packages/graph`, `packages/ui`, `apps/web`.

### Tests Required

- Relationship extraction.
- Explicit versus inferred relationship tests.
- ER rendering and layout tests.

### Exit Criteria

ER diagrams never claim inferred relationships are declared constraints.

### Definition of Done

Users can switch between query-flow and ER views without corrupting either
graph contract.

### Common Mistakes to Avoid

- Reusing query-flow semantics for schema cardinality.
- Treating inferred relationships as authoritative.
- Coupling ER rendering to SQL text parsing.

## Phase 15 — EXPLAIN Parser

### Objective

Parse supported EXPLAIN and EXPLAIN ANALYZE output into a physical-plan model.

### Why It Comes Before the Next Phase

The execution tree needs a validated plan model and must not parse provider
output inside UI components.

### Deliverables

- EXPLAIN input boundary.
- PostgreSQL plan support first.
- Estimated versus analyzed metadata.
- Unsupported plan diagnostics.

### Files Created

EXPLAIN parser, physical-plan types, adapters, validators, and fixtures.

### Modules Affected

`packages/parser`, `packages/shared`, future execution-plan UI.

### Tests Required

- Scan, join, sort, aggregate, limit, CTE, window, gather, and materialize
  plan fixtures.
- Malformed plan handling.
- Estimate versus actual distinction.

### Exit Criteria

Plans parse into validated physical-plan objects with source dialect metadata.

### Definition of Done

The parser never presents missing execution evidence as runtime facts.

### Common Mistakes to Avoid

- Treating EXPLAIN output as portable across dialects.
- Inventing missing row counts.
- Mixing physical plan nodes into the logical Graph JSON.

## Phase 16 — Execution Tree

### Objective

Render the physical-plan model as an execution tree next to the logical graph.

### Why It Comes Before the Next Phase

The Intelligence Layer must receive validated execution evidence rather than
raw, provider-specific EXPLAIN text.

### Deliverables

- Execution-tree components.
- Estimated and actual metrics.
- Logical-to-physical linking where confidence permits.
- Clear unavailable and malformed states.

### Files Created

Execution tree adapter, components, styles, and integration fixtures.

### Modules Affected

`packages/ui`, `apps/web`, `packages/shared`.

### Tests Required

- Tree rendering.
- Metrics labeling.
- Missing-plan and unsupported-plan states.
- Keyboard navigation.

### Exit Criteria

Users can distinguish logical query flow from physical execution.

### Definition of Done

Execution-tree rendering is stable, accessible, and evidence-labeled.

### Common Mistakes to Avoid

- Claiming actual performance from estimated plans.
- Making EXPLAIN mandatory for core analysis.
- Hiding dialect limitations.

## Phase 17 — Intelligence Layer

### Objective

Add optional, grounded explanations, rewrites, and interview assistance.

### Why It Comes Before the Next Phase

Export should include validated deterministic and optional Intelligence outputs,
so the output contract must be settled first.

### Deliverables

- Context Builder and prompt builder.
- Ollama-first provider interface.
- Structured output schema and validator.
- Explanation modes, templates, rewrite, and interview features.
- Safety and provider-unavailable states.

### Files Created

`packages/intelligence`, provider adapters, templates, validators, UI cards,
and evaluation fixtures.

### Modules Affected

`packages/intelligence`, `apps/web`, `packages/shared`.

### Tests Required

- Context minimization and redaction.
- Structured-output validation.
- Hallucination and forbidden-claim tests.
- Provider failure and offline tests.

### Exit Criteria

Core functionality works with Intelligence disabled or unavailable.

### Definition of Done

The Intelligence Layer consumes structured context only, never modifies
deterministic results, and states uncertainty explicitly.

### Common Mistakes to Avoid

- Sending raw SQL by default.
- Letting model output create Graph JSON.
- Treating suggestions as measured facts.

## Phase 18 — Export Features

### Objective

Export validated Graph JSON, ER diagrams, execution trees, and analysis
reports through versioned, privacy-safe formats.

### Why It Comes Before the Next Phase

Performance work needs representative export and large-output workloads, while
production users need reproducible artifacts.

### Deliverables

- JSON export/import.
- Image or document export where supported.
- Export metadata and schema versions.
- Local-only persistence boundaries.

### Files Created

Export services, serializers, import validators, download UI, and fixtures.

### Modules Affected

`packages/shared`, `packages/graph`, `packages/ui`, `apps/web`.

### Tests Required

- Round-trip tests.
- Invalid-version tests.
- Sensitive-data and redaction tests.
- Large-export tests.

### Exit Criteria

Exports are deterministic, validated, and do not require network access.

### Definition of Done

Every export format is documented, versioned, tested, and clearly labeled when
it contains optional model suggestions.

### Common Mistakes to Avoid

- Exporting unvalidated internal objects.
- Including credentials or hidden local data.
- Promising backward compatibility without a schema policy.

## Phase 19 — Performance Optimization

### Objective

Meet documented parsing, analysis, graph, rendering, and memory budgets.

### Why It Comes Before the Next Phase

Accessibility checks and final testing must run against the intended production
performance profile.

### Deliverables

- Benchmarks for small, medium, large, and huge queries.
- Profiling data.
- Memoization and lazy loading where measured.
- Large-graph and memory safeguards.

### Files Created

Benchmark fixtures, profiling utilities, performance reports, and optimized
modules.

### Modules Affected

Parser, analyzers, graph, UI, and optional Intelligence boundaries.

### Tests Required

- `<100ms` small-query target.
- `<300ms` medium-query target.
- `<1s` large-query target.
- Memory and repeated-analysis tests.
- Smooth graph interaction checks.

### Exit Criteria

Performance budgets are measured on a documented reference environment.

### Definition of Done

Optimizations are evidence-based, preserve correctness, and include regression
coverage.

### Common Mistakes to Avoid

- Optimizing before measuring.
- Sacrificing deterministic output for speed.
- Memoizing mutable or incorrect values.

## Phase 20 — Accessibility

### Objective

Bring the complete application to the documented WCAG AA target.

### Why It Comes Before the Next Phase

Accessibility must be included in the final test and release gates, not added
after release.

### Deliverables

- Keyboard navigation.
- Visible focus.
- Screen-reader names and graph text alternatives.
- High contrast.
- Reduced motion.
- Non-color node distinctions.

### Files Created

Accessibility helpers, audits, tests, and updated components.

### Modules Affected

All UI components and application flows.

### Tests Required

- Automated accessibility checks.
- Keyboard-only workflow.
- Screen-reader smoke tests.
- Contrast and reduced-motion checks.

### Exit Criteria

Critical accessibility findings are resolved and documented.

### Definition of Done

Core workflows are keyboard-operable, perceivable without color or motion, and
reviewed with representative assistive technology.

### Common Mistakes to Avoid

- Treating accessibility as color selection only.
- Hiding graph meaning from screen readers.
- Removing focus outlines.

## Phase 21 — Testing

### Objective

Validate the full implementation against contracts, fixtures, UX, privacy,
security, performance, and acceptance criteria.

### Why It Comes Before the Next Phase

Documentation validation and release decisions must be based on verified
behavior, not intended behavior.

### Deliverables

- Unit, integration, UI, regression, manual, performance, and security results.
- Updated expected outputs.
- Bug triage and release-candidate fixes.

### Files Created

Test suites, fixtures, reports, and corrected implementation files.

### Modules Affected

Repository-wide.

### Tests Required

- Full supported query suite.
- Contract and golden Graph JSON tests.
- UI and accessibility tests.
- Intelligence safety tests.
- Build, lint, type-check, and security checks.

### Exit Criteria

All release-blocking failures are resolved or explicitly accepted with a
documented decision.

### Definition of Done

The acceptance criteria, test strategy, regression suite, and Definition of
Done all pass with recorded command results.

### Common Mistakes to Avoid

- Testing only happy paths.
- Treating a successful render as correct analysis.
- Ignoring unsupported dialects and offline states.

## Phase 22 — Documentation Validation

### Objective

Ensure public, technical, operational, and progress documents accurately
describe the released behavior.

### Why It Comes Before the Next Phase

Users and maintainers need trustworthy setup, architecture, privacy, and
release information before production publication.

### Deliverables

- Updated README and documentation index.
- Accurate architecture and technical contracts.
- Current changelog and known limitations.
- Valid links, examples, commands, and version references.
- Updated progress trackers and session handoff.

### Files Created

Only missing documentation or generated release notes; otherwise update
existing documentation.

### Modules Affected

Repository documentation and metadata.

### Tests Required

- Markdown link validation.
- Code-block command review.
- Documentation structure check.
- Release-note and version consistency check.

### Exit Criteria

Documentation matches actual behavior and contains no stale implementation
claims.

### Definition of Done

New contributors can follow setup instructions, understand limitations, and
locate the relevant contracts without undocumented steps.

### Common Mistakes to Avoid

- Copying intended behavior as if it were implemented.
- Leaving old directory names or provider claims.
- Omitting migration and privacy notes.

## Phase 23 — Production Release

### Objective

Publish a reproducible, supportable, and documented production release.

### Why It Is Last

Release automation must be the final consumer of validated code, tests,
documentation, contracts, and security decisions.

### Deliverables

- Versioned release tag.
- Production build and deployment.
- Release notes and changelog.
- Artifacts and checksums where applicable.
- Rollback plan.
- Support and security communication.

### Files Created

Release metadata, deployment configuration, artifacts, and final release notes.

### Modules Affected

CI/CD, deployment, application configuration, documentation, and repository
metadata.

### Tests Required

- Full CI pipeline.
- Production build smoke test.
- Deployment smoke test.
- Artifact install or download test.
- Rollback verification.

### Exit Criteria

The tagged release builds, deploys, starts, passes smoke tests, and can be
rolled back.

### Definition of Done

The release is published with accurate versioning, changelog, documentation,
known limitations, security contact, and reproducible validation evidence.

### Common Mistakes to Avoid

- Releasing from a dirty or unreviewed branch.
- Skipping rollback verification.
- Publishing features not represented in the changelog.
- Making cloud services or Intelligence mandatory.

## Final Release Gate

Before production publication, verify:

- Every preceding phase has passed its exit criteria.
- No architecture rule is violated.
- No release-blocking test, security, privacy, accessibility, or performance
  issue remains.
- `DEFINITION_OF_DONE.md` is satisfied.
- Progress trackers and `SESSION_HANDOFF.md` are current.
