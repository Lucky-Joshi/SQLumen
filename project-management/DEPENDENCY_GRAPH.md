# Dependency Graph

## Hard Dependencies

```text
Tooling
  ↓
Package Skeleton
  ↓
Shared Contracts
  ↓
Parser
  ↓
Semantic Model
  ↓
Analyzer Plugins
  ↓
Graph Builder
  ↓
Rule Engine
  ↓
Request Pipeline
  ↓
Visualization
```

These dependencies are mandatory. A consumer must not be built against an
unstable substitute for its upstream contract.

## Parallel Work After the Deterministic Core

```text
Graph Builder ──→ Rule Engine
      │                │
      ├──→ Visualization
      ├──→ Export
      └──→ DDL and EXPLAIN

DDL and EXPLAIN + Graph JSON
              ↓
      Intelligence Context
              ↓
      Intelligence Features
```

## Soft Dependencies

- DDL enriches rules but is not required for basic analysis.
- EXPLAIN enriches physical-plan explanation but is not required for logical
  graph generation.
- Export depends on Graph JSON but not on Intelligence.
- Accessibility and performance hardening depend on the UI but can be tested
  incrementally.

## Optional Dependencies

- Ollama and cloud providers are optional.
- Cloud Intelligence must never be required for core functionality.
- Docker and deployment providers are optional development conveniences.

## Rules

- Dependencies point from producer to consumer.
- No circular dependencies are allowed.
- UI depends on stable contracts, never parser internals.
- Intelligence depends on structured deterministic results, never the reverse.
- Package dependency changes require architecture review and tests.
