# SQLUMEN Development Workflow

Every feature follows this sequence. A phase may be combined with another only
when the task record explicitly explains why the quality gate remains covered.

```text
Research
  ↓
Design
  ↓
Implementation
  ↓
Unit Tests
  ↓
Integration Tests
  ↓
Documentation
  ↓
Manual Testing
  ↓
Review
  ↓
Merge
  ↓
Release
```

## Research

Read the relevant architecture, technical, UI, testing, and Operations
documents. Search for existing helpers and prior art. Confirm dependencies,
dialect scope, privacy impact, and acceptance criteria.

## Design

Write the contract and layer boundary before implementation. Identify changed
schemas, modules, tests, documentation, risks, and rollback behavior. Record a
decision in the decision log when the architecture changes.

## Implementation

Work in dependency order. Keep changes small, typed, deterministic, and
focused. Do not implement UI behavior against parser internals or add model
calls to deterministic modules.

## Unit Tests

Test pure transformations, parser diagnostics, analyzers, graph helpers, rules,
schema validation, and provider safety boundaries in isolation.

## Integration Tests

Test the complete relevant pipeline and assert required outputs, not merely
that a function returned. Include supported dialects, invalid input, partial
support, and provider-unavailable states.

## Documentation

Update the directly affected documents, glossary terms, examples, changelog,
and public contracts. Documentation is part of the feature, not a follow-up.

## Manual Testing

Check visual layout, source highlighting, keyboard interaction, themes,
accessibility, loading, error, empty, offline, and large-input states.

## Review

Reviewers verify architecture boundaries, type safety, tests, privacy,
accessibility, performance, documentation, and scope. The author supplies
exact validation commands and results.

## Merge

Merge only after required checks pass, review comments are resolved, and the
branch is up to date. Use squash merge for focused feature work unless the
repository policy requires another strategy.

## Release

Run the release checklist, update the changelog and version, create the tag,
and verify the release workflow and documentation links.

## Quality Gates

- No layer bypasses.
- No secrets or real sensitive SQL.
- Type check passes.
- Lint and formatting pass.
- Relevant unit and integration tests pass.
- UI and accessibility checks pass when applicable.
- Documentation and changelog are current.
- No fake implementations, silent fallbacks, or unresolved scope-critical
  TODOs remain.

## Working Agreements

- Recommended PR size: one coherent change, normally under 400 changed lines
  excluding generated fixtures and documentation.
- Recommended commit frequency: one logical commit per coherent implementation
  slice, usually daily or at a reviewable checkpoint.
- Branch from `develop` for features and bugfixes; use `hotfix/*` from `main`
  only for urgent release issues.
- Labels: `phase:foundation`, `phase:parser`, `phase:semantic-model`,
  `phase:analysis`, `phase:graph`, `phase:ui`, `phase:intelligence`,
  `type:bug`, `type:feature`, `type:docs`, `type:test`, `priority:p0`,
  `priority:p1`, `good first issue`, and `blocked`.
- Project board columns: Backlog, Ready, In Progress, Review, Validation,
  Blocked, Done.
