# SQLUMEN Development Plan

This plan uses weekly milestones. A week may be extended when an exit criterion
is not met; do not advance by calendar date alone.

## Week 1 — Tooling and Skeleton

- **Goals:** Complete T001–T002.
- **Expected output:** Installable TypeScript/Vite workspace with package
  boundaries and CI checks.
- **Dependencies:** Existing repository documentation.
- **Acceptance criteria:** Clean checkout installs; scripts and CI run.
- **Recommended commits:** `chore: establish tooling`, `chore: create package skeleton`.
- **Expected repository state:** No application behavior yet; contracts can be
  added without reorganizing the repository.

## Week 2 — Contracts and Parser

- **Goals:** Complete T003–T004.
- **Expected output:** Graph schema v1, diagnostics, SQLGlot adapter, initial
  dialect fixtures.
- **Dependencies:** Week 1.
- **Acceptance criteria:** Valid and invalid dialect fixtures pass.
- **Recommended commits:** `feat: add shared contracts`, `feat: add parser adapter`.
- **Expected repository state:** SQL parses to validated AST results only.

## Week 3 — Semantic Model

- **Goals:** Complete T005.
- **Expected output:** Parser-independent relational model.
- **Dependencies:** Week 2.
- **Acceptance criteria:** Downstream tests import no parser AST types.
- **Recommended commits:** `feat: add semantic model`, `test: cover semantic fixtures`.
- **Expected repository state:** AST-to-semantic conversion is deterministic.

## Week 4 — Analyzer Framework

- **Goals:** Complete T006.
- **Expected output:** Plugin interfaces, registry, result merge, harness.
- **Dependencies:** Week 3.
- **Acceptance criteria:** Independent test plugin executes and merges safely.
- **Recommended commits:** `feat: add analyzer plugin framework`.
- **Expected repository state:** No monolithic analyzer is required.

## Week 5 — Core Analysis

- **Goals:** Complete T007.
- **Expected output:** Core analyzer plugins and query-suite fixtures.
- **Dependencies:** Week 4.
- **Acceptance criteria:** Tables, joins, filters, aggregates, windows, CTEs,
  subqueries, complexity, statistics, and smells are covered.
- **Recommended commits:** Separate commits for relational, analytical, and
  quality analyzers.
- **Expected repository state:** Semantic analysis is useful without a UI.

## Week 6 — Graph and Rules

- **Goals:** Complete T008–T009.
- **Expected output:** Versioned Graph JSON and deterministic Rule Engine.
- **Dependencies:** Week 5.
- **Acceptance criteria:** Golden graphs and rule findings are stable.
- **Recommended commits:** `feat: add graph builder`, `feat: add rule engine`.
- **Expected repository state:** Complete deterministic backend pipeline.

## Week 7 — Request Pipeline and Editor

- **Goals:** Complete T010–T011.
- **Expected output:** Editor accepts SQL and displays deterministic results.
- **Dependencies:** Week 6.
- **Acceptance criteria:** Success, syntax error, unsupported dialect, loading,
  and empty states work.
- **Recommended commits:** `feat: add request pipeline`, `feat: add editor shell`.
- **Expected repository state:** First end-to-end vertical slice.

## Week 8 — Graph UI

- **Goals:** Complete T012–T013.
- **Expected output:** Interactive graph, panels, search, source highlighting,
  themes, and node inspector.
- **Dependencies:** Week 7.
- **Acceptance criteria:** Keyboard and pointer interactions pass manual checks.
- **Recommended commits:** `feat: add graph canvas`, `feat: add analysis panels`.
- **Expected repository state:** MVP deterministic user experience.

## Week 9 — DDL, EXPLAIN, and Export

- **Goals:** Complete T014–T015.
- **Expected output:** Optional schema and physical-plan context plus local
  export/persistence.
- **Dependencies:** Week 7 for ingestion; Week 8 for UI integration.
- **Acceptance criteria:** Evidence boundaries and privacy behavior are clear.
- **Recommended commits:** Separate commits for EXPLAIN, DDL, and export.
- **Expected repository state:** Enriched deterministic product without AI.

## Week 10 — Intelligence Layer

- **Goals:** Complete T016–T017.
- **Expected output:** Ollama-first context, providers, templates, modes,
  rewrites, and interview mode.
- **Dependencies:** Week 9.
- **Acceptance criteria:** Structured output validates and safety tests pass.
- **Recommended commits:** `feat: add intelligence context`, `feat: add grounded explanations`.
- **Expected repository state:** Intelligence is optional and cannot block core use.

## Week 11 — Quality Hardening

- **Goals:** Complete T018.
- **Expected output:** Accessibility report, performance profile, fixes, and
  regression suite.
- **Dependencies:** Week 10.
- **Acceptance criteria:** WCAG AA target checks and documented performance
  budgets pass.
- **Recommended commits:** Separate accessibility, performance, and regression
  fixes.
- **Expected repository state:** Release candidate quality.

## Week 12 — Release

- **Goals:** Complete T019–T020.
- **Expected output:** Release candidate, changelog, tag, artifacts, and
  rollback instructions.
- **Dependencies:** Week 11.
- **Acceptance criteria:** Full CI and release workflow pass.
- **Recommended commits:** `docs: finalize release notes`, `chore: prepare v0.1.0`.
- **Expected repository state:** Published first implementation release.
