# Module Design

## Parser Module

**Input:** SQL text and a selected dialect.

**Output:** Parser-specific AST and syntax diagnostics.

Responsibilities:

- Parse SQL
- Validate syntax
- Report source locations
- Identify unsupported dialect features

The parser does not produce graph nodes or optimization advice.

## Semantic Model Adapter

**Input:** Parser-specific AST.

**Output:** Parser-independent semantic model.

Responsibilities:

- Normalize tables, joins, filters, aggregates, windows, and CTEs
- Preserve source locations
- Normalize dialect-specific differences where possible
- Expose unsupported constructs explicitly

## Analyzer Module

Reads the semantic model and produces semantic findings. The analyzer is composed of independent plugins, such as:

- `TableAnalyzer`
- `JoinAnalyzer`
- `FilterAnalyzer`
- `AggregateAnalyzer`
- `WindowAnalyzer`
- `CTEAnalyzer`

Each plugin has a focused responsibility and contributes to a combined analysis result.

## Graph Builder

Converts the semantic model and analysis results into versioned Graph JSON.

Responsibilities:

- Create nodes
- Create edges
- Attach source locations and properties
- Populate metadata and statistics

The graph builder does not parse SQL.

## Rule Engine

Reads Graph JSON and detects deterministic optimization opportunities and query smells.

Rules should be independently identifiable, testable, and capable of returning structured warnings. The rule engine does not execute queries.

## AI Service

Reads only:

- Graph JSON
- Warnings
- Statistics
- Optional EXPLAIN data

It never reads raw SQL directly, never replaces deterministic analysis, and must handle Ollama being unavailable without blocking the core application.

## Context Builder

Creates a bounded, privacy-aware prompt context from structured analysis. It controls what data is sent to Ollama and excludes raw SQL unless a future, explicit product decision permits it.

## Renderer

Reads Graph JSON and displays React Flow nodes, edges, warnings, and interactions. It does not perform SQL analysis.