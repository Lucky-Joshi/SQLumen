# Component Responsibilities

## SQL Parser

Responsible for:

- Parsing SQL
- AST generation
- Syntax validation
- Dialect-specific diagnostics

Not responsible for:

- Optimization
- Visualization
- AI
- Graph generation

## Semantic Model Adapter

Responsible for:

- Translating AST output into parser-independent semantic data
- Preserving source locations
- Normalizing dialect differences
- Reporting unsupported constructs

Not responsible for:

- Rendering
- Optimization
- AI responses

## Analyzer

Responsible for:

- Join analysis
- Table analysis
- Filter analysis
- Aggregate detection
- Window detection
- CTE detection

Analyzers are independent plugins and do not render UI.

Not responsible for:

- Graph layout
- AI responses
- Query execution

## Graph Builder

Responsible for:

- Versioned Graph JSON
- Node creation
- Edge creation
- Metadata and statistics

Not responsible for:

- SQL parsing
- Rule evaluation
- AI responses

## Rule Engine

Responsible for:

- Static optimization rules
- Query smells
- Complexity score
- Structured warnings

Not responsible for:

- Query execution
- Rendering
- Replacing parser diagnostics

## Renderer

Responsible for:

- Graph layout
- Node styling
- User interaction
- Source-linked visualization

Not responsible for:

- SQL analysis
- Rule evaluation
- Query execution

## AI Module

Responsible for:

- Plain-English explanation
- Rewrite suggestions
- Interview questions

Must never:

- Invent execution plans
- Guess indexes as facts
- Generate or modify Graph JSON
- Parse raw SQL directly
- Replace deterministic analysis