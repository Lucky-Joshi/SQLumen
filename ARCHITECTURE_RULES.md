# SQLUMEN Architecture Rules

These rules are the long-term architectural governance for SQLUMEN. They apply to human contributors and AI coding agents. Any exception requires an explicit design decision and documentation update.

## 1. Preserve the Layered Pipeline

The required flow is:

```text
SQL → Parser → AST → Semantic Model → Analyzer Plugins → Graph JSON → Renderer
```

The optional Intelligence Layer consumes structured results after deterministic analysis. No feature may bypass the Semantic Model or make the renderer responsible for analysis.

## 2. Keep the Semantic Model Parser-Independent

Parser-specific AST types must not leak into analyzers, graph generation, rules, UI, exports, or Intelligence context. Parser replacement or upgrade should require changes only to the parser adapter and related fixtures.

## 3. Keep Responsibilities Separate

- The parser parses and reports syntax diagnostics.
- The Semantic Model normalizes parser output.
- Analyzer plugins extract one semantic concern each.
- The Graph Builder creates versioned Graph JSON.
- The Rule Engine evaluates deterministic rules.
- The renderer displays Graph JSON.
- The Intelligence Layer explains structured results.

No module may absorb another layer's responsibilities for convenience.

## 4. Use Plugin-Style Analysis

Every new SQL feature requires:

- A focused analyzer plugin or an explicit extension to the appropriate plugin.
- Semantic Model coverage.
- Graph representation, when visualized.
- Rule coverage, when a deterministic finding is appropriate.
- Unit and integration tests.
- Documentation updates.

Plugins must remain independently testable and must not depend on React or model providers.

## 5. Graph JSON Is a Versioned Contract

Every graph includes `schemaVersion`. Changes to nodes, edges, metadata, warnings, or statistics must preserve compatibility where possible, include migration considerations when necessary, and update fixtures and documentation.

The graph represents logical SQL structure. It must not claim physical execution behavior, indexes, row counts, or runtime performance without explicit execution-plan evidence.

## 6. Deterministic Logic Is the Source of Truth

Parsing, semantic extraction, graph generation, complexity calculation, and rule findings must be deterministic for the same SQL, dialect, parser version, and analysis version.

The Intelligence Layer may explain or suggest, but it may not:

- Override deterministic findings.
- Generate or modify Graph JSON.
- Invent execution plans, indexes, constraints, statistics, row counts, or relationships.
- Claim that a query was executed.

Unavailable evidence must remain unavailable; do not fill gaps with plausible guesses.

## 7. Keep Business Logic Out of the UI

React components render state and coordinate user interaction. SQL parsing, semantic analysis, graph construction, rule evaluation, and provider orchestration belong in domain modules or services with testable interfaces.

The UI must consume stable contracts and must not import parser internals.

## 8. Privacy Is a Default Constraint

SQLUMEN never executes SQL and never connects to databases automatically. Local mode keeps SQL and analysis on the user's machine. Cloud Intelligence is opt-in and must receive only the minimum context required for the selected feature.

Never place credentials, API keys, real sensitive SQL, or unrelated local data in prompts, logs, Graph JSON, fixtures, or telemetry.

## 9. Errors Must Be Explicit

Errors must be typed or structured, actionable, and visible at the appropriate boundary. Do not use broad catches, silent defaults, or empty success-shaped fallbacks.

Recoverable failures must preserve useful diagnostics. Internal logs may contain safe diagnostic context, but users must not receive stack traces or secrets.

## 10. Design for Accessibility

Every UI capability must support keyboard navigation, visible focus, screen-reader semantics, reduced motion, and non-color distinctions where applicable. Node identity must not depend on color alone.

## 11. Test Contracts, Not Proxies

Tests must verify required outputs and measurable behavior:

- AST and diagnostic validity.
- Semantic Model contents.
- Stable Graph JSON nodes, edges, and schema version.
- Analyzer and Rule Engine findings.
- UI source highlighting and interaction states.
- Offline and provider-unavailable behavior.
- Performance budgets where documented.

Tests should cover supported dialects and representative edge cases.

## 12. Document Architectural Changes

Any change to layers, module boundaries, public contracts, supported dialects, privacy behavior, or Intelligence behavior must update the relevant document in `docs/`, the decision log when appropriate, and the changelog when user-visible.

## 13. Avoid Unjustified Structure

Keep packages modular and introduce no new top-level directory or cross-layer dependency without a documented reason. Prefer existing helpers, contracts, and patterns over parallel implementations.

## 14. Maintainability Over Shortcuts

Prefer clarity, strong typing, small focused modules, and explicit contracts over speculative abstractions or hacks. A shortcut that weakens layer boundaries, privacy, testability, or error reporting is not acceptable.

## 15. Exceptions Require a Decision

When a rule must be violated, record:

- The rule and affected modules.
- The reason the exception is necessary.
- Alternatives considered.
- Security, privacy, performance, and maintenance impact.
- Scope and expiry conditions, if temporary.

Accepted exceptions belong in [docs/07_Operations/17_Decision_Log.md](docs/07_Operations/17_Decision_Log.md) and the relevant architecture document.
