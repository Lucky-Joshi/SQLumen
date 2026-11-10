<div align="center">

# SQLUMEN

### Understand SQL Visually.

**Parse • Visualize • Explain • Optimize**

---

SQLUMEN is an open-source SQL visualization and analysis platform that transforms SQL queries into interactive graphs, plain-English explanations, and optimization insights — without requiring a live database connection.

Designed for students, interview preparation, backend developers, and anyone working with complex SQL.

</div>

---

# Features

## Query Visualization

- Interactive SQL flow graph
- Table relationships
- Join visualization
- Filters
- Aggregations
- Window functions
- CTEs
- Subqueries

---

## Query Analysis

- Query complexity score
- Query smell detection
- Rule-based optimization
- Statistics
- SQL execution order

---

## Execution Plan Support

Supports PostgreSQL EXPLAIN and EXPLAIN ANALYZE.

Visual execution tree.

Performance explanation.

---

## ER Diagram

Generate ER diagrams from:

- CREATE TABLE statements
- Inferred query relationships

---

## Intelligence Layer

Optional AI-powered features:

- Plain-English explanations
- Interview questions
- Query rewrites
- Learning mode

Runs locally using Ollama.

---

# Philosophy

SQLUMEN follows five principles.

- Deterministic before AI
- Privacy First
- Offline First
- Explain before Optimize
- Honest Confidence Levels

---

# Architecture

```
SQL
 │
 ▼
Parser
 │
 ▼
Semantic Model
 │
 ▼
Analyzer Plugins
 │
 ▼
Graph Builder
 │
 ▼
Graph JSON
 │
 ▼
React Flow
 │
 ▼
Interactive UI

                Optional

Graph JSON
      │
      ▼
Context Builder
      │
      ▼
LLM
      │
      ▼
Explanation
```

---

# Tech Stack

Frontend

- React
- TypeScript
- Vite
- React Flow
- Monaco Editor

Analysis

- SQLGlot
- Rule Engine
- Semantic Model

AI

- Ollama
- OpenAI (Optional)

---

# Development

Requirements: Node.js 22 LTS or newer and npm.

```bash
npm ci
npm run dev
```

Quality gates:

```bash
npm run check
```

See [Local Development](docs/07_Operations/01_Local_Development.md) for the full
command reference.

---

# Project Status

Current Stage

Foundation — repository tooling established

Progress

- Product Documentation
- Architecture Documentation
- Technical Design
- UI Design
- Testing Strategy
- Intelligence Layer
- Operations
- Repository tooling and CI quality gates

Next milestone: application and package skeleton.

---

# Roadmap

Version 1

- Query Flow
- Graph Visualization
- Query Smells

Version 2

- ER Diagram
- Execution Plans

Version 3

- Intelligence Layer

Version 4

- Plugins
- VS Code Extension

---

# Documentation

Documentation is located in

```
docs/
```

Recommended reading order

1. Project Vision
2. Architecture
3. Technical Design
4. UI
5. Testing
6. Intelligence
7. Operations

---

# Contributing

Contributions are welcome.

Please read

```
CONTRIBUTING.md
```

before opening an issue or pull request.

---

# License

Released under the MIT License.

See

```
LICENSE
```

for details.

---

# Acknowledgements

Built with inspiration from:

- SQLGlot
- React Flow
- Monaco Editor
- Ollama

---