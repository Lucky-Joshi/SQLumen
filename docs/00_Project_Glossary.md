# Project Glossary

> **Version:** 1.0
> **Project:** SQLUMEN
> **Purpose:** This document defines the terminology used throughout the SQLUMEN documentation. Contributors should refer to this glossary whenever a technical term appears in the architecture, implementation, or testing documents.

---

# A

## Aggregate Function

A function that computes a single result from multiple rows.

Examples:

- COUNT()
- SUM()
- AVG()
- MIN()
- MAX()

Example:

```sql
SELECT department, COUNT(*)
FROM employees
GROUP BY department;
```

---

## Analysis Engine

The component responsible for extracting semantic information from the Semantic Model.

It detects:

- Tables
- Joins
- Filters
- Aggregations
- Window Functions
- CTEs
- Subqueries

The Analysis Engine is deterministic and never uses AI.

---

## Analyzer Plugin

A self-contained module responsible for analyzing one SQL feature.

Examples:

- JoinAnalyzer
- AggregateAnalyzer
- FilterAnalyzer
- WindowAnalyzer
- CTEAnalyzer

Analyzer plugins produce structured metadata that is later merged into the Semantic Model.

---

## AST (Abstract Syntax Tree)

A tree representation of SQL produced by the parser.

Example:

```sql
SELECT name
FROM users
WHERE age > 18;
```

becomes a structured tree describing:

- SELECT
- FROM
- WHERE

instead of raw text.

SQLUMEN never renders the AST directly.

---

# C

## CTE (Common Table Expression)

A temporary named query defined using the WITH keyword.

Example:

```sql
WITH sales AS (
    SELECT *
    FROM orders
)
SELECT *
FROM sales;
```

SQLUMEN represents every CTE as its own graph node.

---

## Complexity Score

A heuristic score representing how difficult a query is to understand.

Factors include:

- Join count
- Nesting depth
- Window functions
- Aggregations
- UNIONs
- Recursive CTEs

This is **not** a performance score.

---

## Context Builder

The component responsible for preparing structured data before sending it to the LLM.

It converts:

Graph JSON

↓

Warnings

↓

Statistics

↓

Optional EXPLAIN

↓

Prompt Context

The Context Builder never parses SQL.

---

# D

## Dialect

A specific implementation of SQL.

Examples:

- PostgreSQL
- MySQL
- SQLite
- SQL Server
- Oracle

Different dialects support different syntax and functions.

---

## Diagram

The visual representation of a SQL query.

Diagrams are generated entirely from Graph JSON.

AI never generates diagrams.

---

# E

## Edge

A directed connection between two graph nodes.

Examples:

- Reads From
- Joins
- Filters
- Aggregates

Edges describe relationships, not execution speed.

---

## Execution Plan

A database-generated plan describing how a query is executed.

Usually produced using:

```sql
EXPLAIN
```

or

```sql
EXPLAIN ANALYZE
```

Execution plans are optional inputs.

Without one, SQLUMEN cannot determine actual runtime behavior.

---

# G

## Graph JSON

The internal representation of a SQL query used throughout SQLUMEN.

It contains:

- Nodes
- Edges
- Metadata
- Warnings
- Statistics

Graph JSON is the internal API shared between modules.

---

## Graph Builder

The module responsible for converting the Semantic Model into Graph JSON.

It never parses SQL.

---

# J

## Join

A relationship between two tables.

Supported types:

- INNER
- LEFT
- RIGHT
- FULL
- CROSS

Each join becomes a graph node and edges connecting the participating tables.

---

## Join Condition

The ON clause defining how two tables are connected.

Example:

```sql
users.id = orders.user_id
```

---

# L

## LLM (Large Language Model)

An optional AI component used for:

- Plain-English explanations
- Rewrite suggestions
- Interview questions

The LLM is **never** responsible for deterministic analysis.

---

## Local Mode

A privacy-first operating mode where:

- SQL never leaves the user's machine.
- Ollama runs locally.
- No cloud services are contacted.

This is SQLUMEN's default mode.

---

# M

## Metadata

Supplementary information attached to Graph JSON.

Examples:

- SQL dialect
- Parser version
- Graph schema version
- Query type

Metadata is not displayed directly in the diagram.

---

# N

## Node

A visual object in Graph JSON representing one SQL concept.

Examples:

- Table
- Join
- Filter
- Aggregate
- Window Function
- CTE
- LIMIT
- ORDER BY

Nodes are rendered by React Flow.

---

# O

## Optimization Rule

A deterministic rule used to detect common SQL anti-patterns.

Examples:

- SELECT *
- Cartesian Join
- Missing WHERE
- DISTINCT hiding duplicate joins
- Function on indexed column

Optimization rules do not require AI.

---

# P

## Parser

The component responsible for converting SQL text into an Abstract Syntax Tree (AST).

Responsibilities:

- Syntax validation
- AST generation
- Source mapping

The parser does not perform optimization or visualization.

---

## Plugin

A modular component responsible for one specific capability.

Examples:

- Join Analyzer
- Window Analyzer
- Aggregate Analyzer

Plugins communicate through the Semantic Model.

---

# Q

## Query Smell

A pattern that suggests a query may be difficult to understand or inefficient.

Examples:

- SELECT *
- Deep nesting
- Repeated subqueries
- Too many joins

A query smell is not always a bug.

---

# R

## React Flow

The visualization library used to render SQLUMEN's interactive graph.

Responsibilities include:

- Node rendering
- Edge rendering
- Zoom
- Pan
- Selection

---

## Rule Engine

The deterministic component that evaluates Graph JSON against optimization rules.

Outputs include:

- Warnings
- Severity
- Recommendations

The Rule Engine operates independently of the AI.

---

# S

## Semantic Model

A parser-independent representation of a SQL query.

Pipeline:

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

Graph Builder

The Semantic Model isolates downstream components from parser-specific details.

---

## Source Location

Character positions within the original SQL statement.

Example:

```json
{
  "start": 128,
  "end": 147
}
```

Used to highlight SQL when users click graph nodes.

---

# T

## Table Node

A graph node representing a table referenced by the query.

Example:

```sql
FROM users
```

creates one Table Node.

---

# W

## Warning

A message produced by the Rule Engine indicating a possible issue.

Severity levels:

- Info
- Warning
- Critical

Warnings never prevent graph generation.

---

## Window Function

A function operating across a set of rows while preserving individual row output.

Examples:

- ROW_NUMBER()
- RANK()
- DENSE_RANK()
- LAG()
- LEAD()

Window functions are represented as dedicated graph nodes.

---

# Glossary Maintenance

## Adding New Terms

When introducing a new architectural concept:

1. Add it to this glossary.
2. Update related documentation.
3. Ensure terminology remains consistent across the project.

---

## Naming Conventions

Throughout SQLUMEN documentation:

- **AST** refers only to the parser output.
- **Semantic Model** refers to the parser-independent intermediate representation.
- **Graph JSON** refers to the internal visualization model.
- **Rule Engine** refers to deterministic optimization analysis.
- **LLM** refers only to optional AI-powered explanations.

These terms should not be used interchangeably.

---

**Document Owner:** SQLUMEN Core Team

**Last Updated:** Version 1.0
