# Implementation Sequence

The sequence is strict. A later step must not be implemented against a
temporary shortcut for an incomplete earlier step.

```text
Repository Tooling
  ↓
Project Setup
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
  ↓
DDL Support
  ↓
Execution Plans
  ↓
Export and Persistence
  ↓
Intelligence Layer
  ↓
Accessibility and Performance
  ↓
Full Testing
  ↓
Deployment and Release
```

## Step Rules

1. **Repository Tooling:** Establish reproducible commands before code. Nothing
   depends on implementation yet.
2. **Project Setup:** Create package boundaries so all later code has a home.
   Do not add feature logic before boundaries exist.
3. **Shared Contracts:** Define schemas before producers or consumers. This
   prevents parser and UI coupling.
4. **Parser:** Produce AST and diagnostics. Do not build Graph JSON directly.
5. **Semantic Model:** Normalize AST output. Analyzers must wait for this
   boundary.
6. **Analyzer Plugins:** Extract meaning independently. Graph and UI work must
   wait for stable findings.
7. **Graph Builder:** Create versioned logical Graph JSON. Do not add physical
   execution assumptions.
8. **Rule Engine:** Evaluate deterministic Graph JSON. Do not call Intelligence.
9. **Request Pipeline:** Orchestrate failures and success states before UI.
10. **Visualization:** Render stable contracts. Do not parse SQL in React.
11. **DDL Support:** Add schema evidence without changing the core logical
    contract.
12. **Execution Plans:** Add physical evidence as a separate representation.
13. **Export and Persistence:** Persist only validated, versioned, local data.
14. **Intelligence Layer:** Consume structured context after deterministic
    features are useful. Never make it required.
15. **Accessibility and Performance:** Harden the complete user experience.
16. **Full Testing:** Run regression, security, privacy, and acceptance checks.
17. **Deployment and Release:** Publish only after all exit criteria pass.

## Prohibited Shortcuts

- UI directly importing parser internals.
- Graph Builder parsing raw SQL.
- Rule Engine calling an LLM.
- Intelligence generating Graph JSON.
- Live database connections.
- Marking a feature complete without tests and documentation.
