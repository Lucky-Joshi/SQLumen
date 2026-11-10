# Architecture Decision Records (ADR)

## ADR-001: Frontend Framework

### Decision

Use React, TypeScript, and Vite.

### Reason

- Fast development
- Excellent React Flow integration
- Strong ecosystem
- Easy deployment
- Static type safety across UI and shared contracts

---

## ADR-002: SQL Parser

### Decision

Use SQLGlot as the primary parser.

### Reason

- Multi-dialect support
- Mature AST
- Active maintenance
- Extensible

Parser-specific output must be converted into the parser-independent Semantic Model before analysis.

---

## ADR-003: Graph Rendering

### Decision

Use React Flow with Dagre for graph rendering and automatic layout.

### Reason

- Interactive graphs
- Automatic layout
- Large community
- Custom node support

---

## ADR-004: Semantic Layer

### Decision

AST output must be converted into a parser-independent Semantic Model before analysis or graph generation.

### Reason

This allows the parser to be replaced or upgraded without changing downstream analyzers, graph generation, rules, or rendering.

---

## ADR-005: Analyzer Architecture

### Decision

Implement analysis as independent, plugin-style analyzers.

### Reason

Focused analyzers are easier to test, extend, and maintain than one monolithic analyzer. Examples include `JoinAnalyzer`, `AggregateAnalyzer`, `FilterAnalyzer`, `WindowAnalyzer`, and `CTEAnalyzer`.

---

## ADR-006: AI

### Decision

AI is optional and runs only after deterministic analysis.

### Reason

Core functionality must always work offline and must not depend on model availability. AI receives structured analysis rather than parsing raw SQL.

---

## ADR-007: Graph Contract

### Decision

Every Graph JSON document includes a semantic `schemaVersion`.

### Reason

Versioning allows consumers to detect incompatible changes and supports backward-compatible exports and future UI updates.

---

## ADR-008: Privacy

### Decision

The default mode is local-only. Cloud AI is opt-in and requires explicit user consent.

### Reason

SQL can contain sensitive business logic and data names. Local-first behavior prevents accidental disclosure while preserving an optional path for cloud integrations.