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