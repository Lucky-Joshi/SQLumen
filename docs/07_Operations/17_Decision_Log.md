# Decision Log

Major architectural and product decisions are recorded here with their date, reason, alternatives, and status.

## 2026-11-10 — Semantic Model Introduced

**Decision:** Add a parser-independent Semantic Model between AST parsing and analysis.

**Reason:** Preserve parser independence and prevent downstream modules from coupling to parser-specific AST structures.

**Alternatives:** Direct AST to Graph conversion.

**Status:** Accepted.

## 2026-11-10 — Intelligence Layer Naming

**Decision:** Refer to optional AI-assisted features as the Intelligence Layer.

**Reason:** The core product is deterministic parsing, semantic analysis, graphing, and rules; model assistance is supplementary.

**Alternatives:** AI Layer.

**Status:** Accepted.

## 2026-11-10 — Repository Tooling Baseline

**Decision:** Use npm with a committed lockfile, Node.js 22 LTS as the minimum runtime, Vite, strict TypeScript, ESLint flat configuration, Prettier, and Vitest. CI runs install, type checking, linting, formatting verification, tests, and the production build.

**Reason:** Establish reproducible local and CI quality gates before application code is written. npm is the documented default and avoids introducing a second package manager. Vitest shares Vite's module resolution and supports the future React UI tests without a separate transform pipeline.

**Alternatives:** pnpm, Jest, per-package tooling, or deferring quality gates until the application exists.

**Status:** Accepted.
