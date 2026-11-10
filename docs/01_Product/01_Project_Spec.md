 # SQLUMEN: Project Spec

## 1. Overview

**One-liner:** Paste a SQL query (plus optional schema and EXPLAIN output) and get a visual, plain-English breakdown of what it does and how to make it faster.

**Type:** Personal / portfolio project.

**Target users:** Students learning SQL, people prepping for interviews, and developers who inherit someone else's 200-line query.

**Core promise:** Understand any query in 30 seconds, without connecting a database.

## 2. Problem and market gap

**Problem:** Complex queries with many joins, CTEs and subqueries are hard to read. Raw EXPLAIN output is harder.

**What exists today:**

- Query flow diagram tools: many, free, browser-based.
- ER diagram and lineage tools: exist, but enterprise-leaning.
- EXPLAIN visualizers (like PEV2): good, but they only take EXPLAIN output, not SQL.

**The gap:** Nobody combines flow, ER, execution explanation and tips in one paste-and-go tool, with a privacy-first (local) option.

## 3. Features by phase

### Phase 1: Query flow (no AI, parser only)

- **Input:** SQL text.
- **Output:** Interactive node graph showing tables, joins (with type and `ON` condition), filters, `GROUP BY`, aggregates, window functions, CTEs and subqueries, in logical execution order.
- Click a node to highlight the matching part of the SQL.

### Phase 2: ER diagram

- **Input:** Optional DDL (`CREATE TABLE` statements).
- **Output:** Tables, columns, PK/FK relationships. Without DDL, show only the relationships inferred from joins and label them as inferred.

### Phase 3: Execution explanation

- **Input:** Optional `EXPLAIN (ANALYZE)` output from Postgres.
- **Output:** Plan tree, slowest nodes flagged, and a plain-English walkthrough (seq scan vs. index scan, join type, row estimate vs. actual).

### Phase 4: Optimization tips

- Rule-based checks first:
	- `SELECT *`
	- Missing `WHERE` on big tables
	- Functions on indexed columns
	- Implicit casts
	- N+1-style subqueries
	- `DISTINCT` used to hide bad joins
- LLM layer on top for explanation and rewrite suggestions, using schema and plan when provided.

### Extras (only if time allows)

- Diff mode for two queries
- Export diagram as PNG
- Query history

## 4. Architecture and tech stack

**Pipeline:** SQL text → parser (AST) → analysis → graph model → rendered diagram. The LLM only gets the structured analysis, not the job of building the diagram.

### Option A: Python (fastest)

- `sqlglot` for parsing
- Streamlit for UI
- Graphviz or `streamlit-agraph` for diagrams

### Option B: JavaScript/TypeScript (better frontend skills)

- Next.js or React
- `node-sql-parser`
- React Flow + dagre for layout
- Monaco editor for input

**LLM layer:** Ollama running a local model for privacy-first mode, with an optional hosted API as a switch.

### Design rules

- Deterministic parts (diagram and rule checks) never depend on the LLM.
- Be honest in the UI: label what is inferred and what is verified from a real plan.
- No database connection required in v1.

## 5. Roadmap and milestones

- **Week 1:** Parser plus Phase 1 flow diagram for `SELECT` with joins and filters.
- **Week 2:** CTEs, subqueries, `GROUP BY`, window functions. Polish UI. Ship a public demo.
- **Week 3:** Phase 2 ER diagram from DDL.
- **Week 4:** Phase 3 EXPLAIN ingestion and plan explanation.
- **Week 5:** Phase 4 rule-based tips, then LLM layer.
- **Week 6:** README with GIF demo, sample queries, deploy, and write a short blog or LinkedIn post.

**Definition of done for v1:** Phase 1 and Phase 3 work well on 10 real-world queries.

## 6. Risks, limits and differentiators

### Risks

- Looks like another clone if it is only parser plus React Flow plus LLM.
- Scope creep: building all four features at once and finishing none.
- Over-trusting the LLM, which gives confident but wrong performance claims without a real plan or index information.
- SQL dialect differences (Postgres vs. MySQL vs. SQL Server) break parsers.

### Hard limits to state openly

- ER diagrams from a query alone are partial.
- Real “why is it slow” analysis needs `EXPLAIN ANALYZE` from the database.
- Tips without schema, indexes, and row counts stay generic.

### What makes it stand out

- Optional inputs (DDL and EXPLAIN) that make output more accurate.
- 100% local mode; no data leaves the machine.
- Honest labeling of inferred vs. verified information.
- Polished README, live demo, and tested sample queries.
