# Phase Tracker

Status values are `Not Started`, `In Progress`, `Blocked`, and `Completed`.
Completion percentages are derived from `MASTER_CHECKLIST.md`.

| Phase | Status | Completion | Dependencies | Current Task | Next Task |
| --- | --- | ---: | --- | --- | --- |
| Foundation | In Progress | 0% | None | Establish repository tooling | Create application and package skeleton |
| Parser | Not Started | 0% | Foundation | None | Define shared contracts |
| Semantic Model | Not Started | 0% | Parser | None | Implement AST adapter |
| Analyzer Plugins | Not Started | 0% | Semantic Model | None | Implement plugin framework |
| Graph Engine | Not Started | 0% | Analyzer Plugins | None | Define Graph JSON v1 |
| Visualization | Not Started | 0% | Graph Engine | None | Implement request pipeline |
| Rule Engine | Not Started | 0% | Graph Engine | None | Implement rule registry |
| DDL and EXPLAIN | Not Started | 0% | Deterministic pipeline | None | Add DDL ingestion |
| Export and Persistence | Not Started | 0% | Visualization | None | Add Graph JSON export |
| Intelligence Layer | Not Started | 0% | DDL and EXPLAIN | None | Implement Context Builder |
| Quality and Release | Not Started | 0% | Intelligence Layer | None | Run full regression |

## Phase Detail

### Foundation

- **Start date:** 2026-11-10
- **Dependencies:** None
- **Risks:** Introducing application structure that conflicts with documented
  package boundaries.
- **Exit criteria:** Tooling, package skeleton, CI, and clean build pass.

### Parser

- **Start date:** Not started
- **Dependencies:** Foundation
- **Risks:** Dialect differences and incomplete source locations.
- **Exit criteria:** Initial dialect parser fixtures pass.

### Semantic Model

- **Start date:** Not started
- **Dependencies:** Parser
- **Risks:** Parser-specific structures leaking downstream.
- **Exit criteria:** Adapter and semantic contract tests pass.

### Analyzer Plugins

- **Start date:** Not started
- **Dependencies:** Semantic Model
- **Risks:** Monolithic analyzers and shared mutable state.
- **Exit criteria:** Core plugins pass query-suite tests.

### Graph Engine

- **Start date:** Not started
- **Dependencies:** Analyzer Plugins
- **Risks:** Unstable IDs and unversioned contracts.
- **Exit criteria:** Golden Graph JSON tests pass.

### Visualization

- **Start date:** Not started
- **Dependencies:** Graph Engine
- **Risks:** Business logic entering React components.
- **Exit criteria:** Core workflow works without Intelligence.

### Rule Engine

- **Start date:** Not started
- **Dependencies:** Graph Engine
- **Risks:** False positives and unsupported claims.
- **Exit criteria:** Rules are deterministic and evidence-aware.

### DDL and EXPLAIN

- **Start date:** Not started
- **Dependencies:** Deterministic pipeline
- **Risks:** Confusing physical plans with logical graphs.
- **Exit criteria:** Optional inputs fail safely.

### Export and Persistence

- **Start date:** Not started
- **Dependencies:** Visualization
- **Risks:** Sensitive data leakage.
- **Exit criteria:** Local, versioned import/export passes.

### Intelligence Layer

- **Start date:** Not started
- **Dependencies:** Structured deterministic context
- **Risks:** Hallucination and provider failures.
- **Exit criteria:** Safety and output-schema tests pass.

### Quality and Release

- **Start date:** Not started
- **Dependencies:** All product milestones
- **Risks:** Hidden regressions and inaccessible UI.
- **Exit criteria:** Release checklist and CI pass.

Agents must update this file after every milestone.
