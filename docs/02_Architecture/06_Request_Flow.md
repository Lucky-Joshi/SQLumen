# Request Flow

## Step 1: Input

The user enters or pastes SQL in the editor. Optional DDL schema and EXPLAIN plan inputs may also be supplied.

## Step 2: Parse

The parser validates SQL against the selected dialect.

## Step 3: AST Generation

The parser produces an AST and syntax diagnostics.

## Step 4: Semantic Model

The semantic model adapter converts the AST into parser-independent structures while preserving source locations and unsupported constructs.

## Step 5: Analysis

Independent analyzer plugins extract:

- Tables
- Joins
- Filters
- Aggregates
- Window functions
- CTEs

## Step 6: Graph Building

The Graph Builder creates versioned Graph JSON containing nodes, edges, metadata, warnings, and statistics.

## Step 7: Rule Evaluation

The Rule Engine analyzes Graph JSON and adds deterministic optimization findings, query smells, and a complexity score.

## Step 8: UI Rendering

The UI renders the graph, warnings, statistics, and source-linked interactions.

## Step 9: Optional AI Explanation

The Context Builder creates a bounded context from Graph JSON, warnings, statistics, and optional EXPLAIN data. Ollama returns an explanation or rewrite suggestion. AI output is displayed as supplementary information and does not alter deterministic results.

## Failure Points

### Parser Error

Show a syntax error with source location. Do not continue to graph rendering without a valid analysis result.

### Unsupported Dialect or Construct

Show a warning and preserve the unsupported construct in diagnostics. Continue with partial analysis when safe.

### Analysis Failure

Show an explicit analysis error and retain parser diagnostics. Do not return an empty success-shaped graph.

### AI Offline

Skip AI and show that Ollama is unavailable. The core deterministic application continues to work.