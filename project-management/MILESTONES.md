# SQLUMEN Milestones

Completion percentage is a planning indicator. It must be supported by the
validation checklist and should not be increased for partially implemented
features.

## M001 — Foundation

- **Description:** Tooling and package skeleton.
- **Dependencies:** None.
- **Completion:** 50% (T001 complete; T002 pending)
- **Deliverables:** T001–T002.
- **Validation:** Clean install, scripts, strict TypeScript, CI, package boundaries.

## M002 — Parser

- **Description:** Dialect-aware AST parsing and diagnostics.
- **Dependencies:** M001.
- **Completion:** 0%
- **Deliverables:** T003–T004.
- **Validation:** PostgreSQL, MySQL, SQLite valid/invalid/unsupported fixtures.

## M003 — Semantic Model

- **Description:** Parser-independent normalized SQL representation.
- **Dependencies:** M002.
- **Completion:** 0%
- **Deliverables:** T005.
- **Validation:** No parser internals leak; deterministic semantic fixtures.

## M004 — Analyzer Plugins

- **Description:** Independent analyzers for SQL concerns.
- **Dependencies:** M003.
- **Completion:** 0%
- **Deliverables:** T006–T007.
- **Validation:** Plugin isolation, query-suite findings, source locations.

## M005 — Graph Engine

- **Description:** Stable Graph JSON v1.
- **Dependencies:** M004.
- **Completion:** 0%
- **Deliverables:** T008.
- **Validation:** Golden graphs, schema validation, stable IDs.

## M006 — Rule Engine

- **Description:** Deterministic optimization and smell findings.
- **Dependencies:** M005.
- **Completion:** 0%
- **Deliverables:** T009.
- **Validation:** Rule fixtures, severity, recommendations, no AI calls.

## M007 — Visualization MVP

- **Description:** Editor, graph canvas, panels, and interactions.
- **Dependencies:** M006.
- **Completion:** 0%
- **Deliverables:** T010–T013.
- **Validation:** End-to-end workflow, keyboard support, themes, source links.

## M008 — Evidence and Export

- **Description:** DDL, EXPLAIN, persistence, and export.
- **Dependencies:** M007.
- **Completion:** 0%
- **Deliverables:** T014–T015.
- **Validation:** Evidence boundaries, versioned imports, local-only behavior.

## M009 — Intelligence Layer

- **Description:** Optional grounded explanations and learning features.
- **Dependencies:** M008.
- **Completion:** 0%
- **Deliverables:** T016–T017.
- **Validation:** Output schema, safety fixtures, offline/provider failure states.

## M010 — Release Quality

- **Description:** Accessibility, performance, regression, and release readiness.
- **Dependencies:** M009.
- **Completion:** 0%
- **Deliverables:** T018–T019.
- **Validation:** WCAG AA checks, performance budgets, full CI, acceptance criteria.

## M011 — First Implementation Release

- **Description:** Publish the first implementation release.
- **Dependencies:** M010.
- **Completion:** 0%
- **Deliverables:** T020.
- **Validation:** Tag, release notes, artifacts, rollback and documentation links.
