# Project Glossary

> **Version:** 1.0  
> **Project:** SQLUMEN  
> **Purpose:** This document defines terminology used throughout the SQLUMEN documentation. Contributors should refer to it whenever a technical term appears in architecture, implementation, or testing documents.

## Aggregate Function

A function that computes a single result from multiple rows.

Examples:

- `COUNT()`
- `SUM()`
- `AVG()`
- `MIN()`
- `MAX()`

## Analysis Engine

The deterministic component responsible for extracting semantic information from the Semantic Model. It detects tables, joins, filters, aggregations, window functions, CTEs, and subqueries.

## Analyzer Plugin

A self-contained module responsible for analyzing one SQL feature. Examples include `JoinAnalyzer`, `AggregateAnalyzer`, `FilterAnalyzer`, `WindowAnalyzer`, and `CTEAnalyzer`.

## AST (Abstract Syntax Tree)

A tree representation of SQL produced by the parser. It describes constructs such as `SELECT`, `FROM`, and `WHERE` instead of retaining only raw text. SQLUMEN does not render the AST directly.

## CTE (Common Table Expression)

A temporary named query defined using the `WITH` keyword. SQLUMEN represents each CTE as its own graph node.

## Complexity Score

A heuristic score representing how difficult a query is to understand. Factors may include join count, nesting depth, window functions, aggregations, `UNION`s, and recursive CTEs. It is not a performance score.

## Context Builder

The component that prepares structured data before sending it to an LLM:

```text
Graph JSON → Warnings → Statistics → Optional EXPLAIN → Prompt Context
```

The Context Builder never parses SQL.

## Dialect

A specific implementation or variation of SQL, such as PostgreSQL, MySQL, SQLite, SQL Server, or Oracle. Dialects support different syntax and functions.

## Diagram

The visual representation of a SQL query generated from Graph JSON. AI never generates diagrams.

## Edge

A directed connection between graph nodes. Examples include reads from, joins, filters, and aggregates. Edges describe logical relationships, not execution speed.

## Execution Plan

A database-generated description of how a query is executed, usually produced by `EXPLAIN` or `EXPLAIN ANALYZE`. Execution plans are optional inputs; without one, SQLUMEN cannot determine actual runtime behavior.

## Graph Builder

The module that converts the Semantic Model into versioned Graph JSON. It never parses SQL.

## Graph JSON

The internal representation of a SQL query shared across SQLUMEN modules. It contains nodes, edges, metadata, warnings, statistics, and a `schemaVersion`.

## Join

A relationship between tables or relational expressions. Supported logical types include `INNER`, `LEFT`, `RIGHT`, `FULL`, and `CROSS`.

## Join Condition

The predicate defining how two inputs are connected, commonly expressed in an `ON` clause, such as `users.id = orders.user_id`.

## LLM (Large Language Model)

An optional AI component used for plain-English explanations, rewrite suggestions, interview questions, and learning assistance. It is never responsible for authoritative deterministic analysis.

## Local Mode

A privacy-first operating mode in which SQL stays on the user's machine, Ollama can run locally, and cloud services are not contacted.

## Metadata

Supplementary information attached to Graph JSON, such as SQL dialect, parser version, graph schema version, and query type.

## Node

A visual object in Graph JSON representing one SQL concept, such as a table, join, filter, aggregate, window function, CTE, `LIMIT`, or `ORDER BY`.

## Optimization Rule

A deterministic rule used to detect common SQL anti-patterns, such as `SELECT *`, Cartesian joins, missing filters, or functions on indexed columns.

## Parser

The component that converts SQL text into an AST. Its responsibilities include syntax validation, AST generation, dialect handling, and source mapping. It does not perform optimization or visualization.

## Plugin

A modular component responsible for one specific capability. Analyzer plugins communicate through the Semantic Model.

## Query Smell

A pattern suggesting that a query may be difficult to understand or inefficient. A query smell is not necessarily a bug.

## React Flow

The visualization library used to render SQLUMEN's interactive graph, including nodes, edges, zoom, pan, and selection.

## Rule Engine

The deterministic component that evaluates Graph JSON against optimization rules. It outputs warnings, severity, recommendations, and source locations when available.

## Semantic Model

A parser-independent representation of a SQL query.

```text
SQL → Parser → AST → Semantic Model → Analyzer Plugins → Graph Builder
```

The Semantic Model isolates downstream components from parser-specific details.

## Source Location

Character positions, line and column information, or ranges within the original SQL statement. Source locations enable editor highlighting when users select graph nodes or warnings.

## Table Node

A graph node representing a table referenced by a query, such as `FROM users`.

## Warning

A message produced by the Rule Engine or deterministic analysis indicating a possible issue. Severity levels are `Info`, `Warning`, and `Critical`.

## Window Function

A function operating across a set of rows while preserving individual row output. Examples include `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `LAG()`, and `LEAD()`.

## Glossary Maintenance

When introducing a new architectural concept:

1. Add it to this glossary.
2. Update related documentation.
3. Ensure terminology remains consistent across the project.

Throughout SQLUMEN documentation:

- **AST** refers only to parser output.
- **Semantic Model** refers to the parser-independent intermediate representation.
- **Graph JSON** refers to the internal visualization model.
- **Rule Engine** refers to deterministic optimization analysis.
- **LLM** refers only to optional AI-powered assistance.
