# SQLUMEN Roadmap

## Dependency Graph

```text
Foundation
  ↓
Parser
  ↓
Semantic Model
  ↓
Analyzer Plugins
  ↓
Graph Engine
  ↓
Visualization
  ↓
Rule Engine
  ├──→ DDL and EXPLAIN
  └──→ Export
          ↓
    Intelligence Layer
          ↓
    Accessibility and Performance
          ↓
        Release
```

## Phase 1 — Foundation

- **Objectives:** Establish reproducible tooling and package boundaries.
- **Features:** TypeScript strict mode, scripts, shared configuration, CI.
- **Deliverables:** T001–T002.
- **Risks:** Premature package coupling.
- **Exit criteria:** Clean install, checks run, dependency direction documented.

## Phase 2 — Parser

- **Objectives:** Parse supported dialects with useful diagnostics.
- **Features:** SQLGlot adapter, dialect selection, source mapping.
- **Deliverables:** T003–T004.
- **Risks:** Dialect ambiguity and incomplete source locations.
- **Exit criteria:** Parser fixtures pass for PostgreSQL, MySQL, and SQLite.

## Phase 3 — Semantic Model

- **Objectives:** Isolate downstream code from parser internals.
- **Features:** Normalized relational structures and diagnostics.
- **Deliverables:** T005.
- **Risks:** Loss of dialect-specific meaning.
- **Exit criteria:** Semantic fixtures are complete and parser-independent.

## Phase 4 — Analyzer Plugins

- **Objectives:** Extract deterministic SQL meaning.
- **Features:** Plugin framework and core analyzers.
- **Deliverables:** T006–T007.
- **Risks:** Monolithic analysis and unstable source mapping.
- **Exit criteria:** Query suite findings match expected outputs.

## Phase 5 — Graph Engine

- **Objectives:** Create a stable, versioned logical graph.
- **Features:** Nodes, edges, metadata, statistics, schema version.
- **Deliverables:** T008.
- **Risks:** UI-coupled graph contracts.
- **Exit criteria:** Golden Graph JSON fixtures are reproducible.

## Phase 6 — Visualization

- **Objectives:** Make deterministic analysis interactive and educational.
- **Features:** Editor, React Flow, panels, search, highlighting, themes.
- **Deliverables:** T010–T013.
- **Risks:** Business logic leaking into React.
- **Exit criteria:** Core workflow is usable without Intelligence or internet.

## Phase 7 — Rule Engine

- **Objectives:** Provide actionable, evidence-based query smells.
- **Features:** Rule registry, severity, recommendations, confidence.
- **Deliverables:** T009 and T013 integration.
- **Risks:** False positives and unsupported performance claims.
- **Exit criteria:** Every rule has fixtures and explicit evidence limits.

## Phase 8 — DDL and Execution Plans

- **Objectives:** Enrich analysis without confusing logical and physical data.
- **Features:** DDL context, EXPLAIN tree, evidence-aware display.
- **Deliverables:** T014.
- **Risks:** Dialect-specific plans and false certainty.
- **Exit criteria:** Optional inputs fail safely and remain clearly labeled.

## Phase 9 — Export and Persistence

- **Objectives:** Preserve and share local analysis safely.
- **Features:** Versioned Graph JSON export and local persistence.
- **Deliverables:** T015.
- **Risks:** Sensitive SQL leakage and incompatible schemas.
- **Exit criteria:** Imports validate versions and require no network.

## Phase 10 — Intelligence Layer

- **Objectives:** Add grounded explanation without replacing deterministic logic.
- **Features:** Context builder, providers, modes, rewrites, interview mode.
- **Deliverables:** T016–T017.
- **Risks:** Hallucination, prompt leakage, provider outages.
- **Exit criteria:** Safety, schema, privacy, and provider-unavailable tests pass.

## Phase 11 — Quality Hardening

- **Objectives:** Meet accessibility, performance, and release quality goals.
- **Features:** WCAG AA checks, reduced motion, large-query handling, profiling.
- **Deliverables:** T018.
- **Risks:** Large graph rendering and memory growth.
- **Exit criteria:** Documented budgets and accessibility checks pass.

## Phase 12 — Release

- **Objectives:** Publish a reproducible implementation release.
- **Features:** Full regression, release notes, tag, artifacts, rollback.
- **Deliverables:** T019–T020.
- **Risks:** Hidden regressions and incomplete documentation.
- **Exit criteria:** Acceptance criteria and release workflow pass.

## Scope Control

Do not begin later phases to compensate for incomplete earlier contracts.
Defer collaboration, cloud sync, live database mode, and plugin marketplaces
until the deterministic local core is stable.
