# Regression Testing

Every release executes the entire query suite and validates:

- Parser
- Semantic Model
- Analyzer plugins
- Graph Builder
- Renderer
- Rule Engine

## Regression Invariants

Unless intentionally changed and documented, no existing query may produce:

- Different node count
- Different edge count
- Different join count
- Missing filters
- Changed warning rule IDs or severities
- Unstable node identifiers
- Broken graph layout

## Approved Changes

Intentional output changes require:

1. A documented reason.
2. Updated expected outputs.
3. Review of affected dialects and UI behavior.
4. A changelog entry when user-visible.

Golden Graph JSON fixtures should be schema-versioned and compared using stable fields rather than incidental formatting.