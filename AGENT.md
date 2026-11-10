# AGENT.md

> Instructions for AI coding agents working on SQLUMEN.

## Project Overview

SQLUMEN is an offline-first SQL visualization and analysis platform. It helps users understand SQL through deterministic analysis, interactive graphs, rule-based optimization, execution-plan explanation, and an optional Intelligence Layer.

AI is an optional enhancement and must never replace deterministic logic.

## Project Philosophy

Follow these principles in every change:

1. Deterministic before AI.
2. Privacy first.
3. Offline first.
4. Explain before optimize.
5. Educational by design.
6. Honest confidence levels.
7. Modular architecture.
8. Accessibility by default.

When a proposed implementation conflicts with these principles, preserve the principles and document the trade-off.

## Required Pipeline

Do not bypass architecture layers:

```text
SQL
  ↓
Parser
  ↓
AST
  ↓
Semantic Model
  ↓
Analyzer Plugins
  ↓
Graph JSON
  ↓
Renderer
  ↓
Optional Intelligence Layer
```

See [docs/02_Architecture/](docs/02_Architecture/) for the authoritative architecture documentation.

## Component Responsibilities

### Parser

Responsible for SQL parsing, AST generation, dialect handling, syntax diagnostics, and source mapping.

Must not optimize SQL, render UI, execute SQL, or call an LLM.

### Semantic Model

Provides the parser-independent representation consumed by downstream modules. Parser-specific structures must not escape this boundary.

### Analyzer Plugins

Each plugin analyzes one concern, such as joins, filters, aggregates, windows, CTEs, complexity, statistics, or query smells. Plugins should remain independently testable and composed through shared contracts.

### Graph Builder

Converts the Semantic Model into versioned Graph JSON. It must not contain parser, optimization, UI, or Intelligence logic.

### Rule Engine

Runs deterministic rules only. It must never call AI, invent evidence, or claim runtime behavior that is not supported by the inputs.

### Intelligence Layer

Consumes structured Graph JSON, statistics, warnings, and optional DDL or EXPLAIN context. It must not receive raw SQL analysis responsibilities and must never become the source of truth.

## Code Quality

- Use TypeScript strict mode.
- Prefer precise types and guards; avoid `any`.
- Keep functions small and focused.
- Prefer pure functions where practical.
- Reuse existing helpers and avoid duplicated logic.
- Avoid dead code and global mutable state.
- Preserve type safety and explicit error reporting.
- Follow the repository's existing formatting and naming conventions.

See [docs/07_Operations/04_Coding_Standards.md](docs/07_Operations/04_Coding_Standards.md).

## Architecture Constraints

- Every module has a single responsibility.
- The parser must never depend on the UI.
- The UI must never depend on parser internals.
- Analyzers must never depend on React.
- The Graph Builder must never depend on AI.
- Business logic must not be hidden inside presentational React components.
- AI must never generate or modify Graph JSON.
- New SQL features require corresponding analyzer coverage and tests.

See [ARCHITECTURE_RULES.md](ARCHITECTURE_RULES.md) for non-negotiable constraints.

## UI Rules

Use React, TypeScript, React Flow, and Monaco Editor according to the documented design system. Build responsive, keyboard-operable, accessible components. Support the dark-first theme system without hardcoding colors.

See [docs/04_UI/](docs/04_UI/).

## Error Handling

- Do not crash the application for recoverable input or provider failures.
- Show meaningful, actionable messages.
- Never return an empty success-shaped fallback for a failed operation.
- Never expose stack traces, secrets, or sensitive query content to users.

## Performance

Prefer readable implementations and measure before optimizing. Avoid unnecessary renders, memoize genuinely expensive computations, and lazy-load heavy optional features without compromising correctness.

## Testing

Every feature should include unit tests and integration tests where applicable. New functionality must not break existing query analysis, Graph JSON contracts, accessibility, or offline behavior.

Run the smallest relevant checks first, then broader checks when needed. Report exact commands and results.

See [docs/05_Testing/](docs/05_Testing/).

## Documentation

Update directly related documentation whenever architecture, public contracts, behavior, workflows, or user-facing features change. Keep [docs/README.md](docs/README.md) and [CHANGELOG.md](CHANGELOG.md) accurate for material changes.

## Git and Pull Requests

- Make small, focused commits.
- Use meaningful Conventional Commit prefixes.
- Do not mix unrelated changes.
- Pull requests must compile, pass lint and tests, and include documentation updates when needed.
- Do not commit secrets, real sensitive SQL, or generated artifacts without justification.

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Intelligence Safety

The Intelligence Layer may explain, summarize, rewrite, and generate interview questions. It must never:

- Invent execution plans.
- Invent indexes or constraints.
- Fabricate statistics, row counts, or relationships.
- Override deterministic findings.
- Claim that SQL was executed.

When evidence is unavailable, state: “Cannot determine from the provided inputs.”

## Security and Privacy

- Never execute user SQL.
- Never connect to a database automatically.
- Never send SQL over the network unless the user explicitly enables a cloud provider.
- Keep local mode as the default.
- Treat pasted SQL, DDL, and EXPLAIN data as sensitive user content.

See [SECURITY.md](SECURITY.md) and [docs/03_Technical/07_Privacy_Model.md](docs/03_Technical/07_Privacy_Model.md).

## Project Structure

Follow the documented folder structure. Do not introduce new top-level directories without justification. Keep packages modular and update architecture documentation when structure changes.

## Completion Criteria

A task is complete only when:

- The implementation works as intended.
- Types pass.
- Lint passes.
- Relevant tests pass.
- Documentation is updated.
- Privacy, accessibility, and security implications are addressed.
- Architecture remains consistent.

Incomplete or unverified work must not be presented as finished.
