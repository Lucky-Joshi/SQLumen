# System Architecture

## Overview

SQLUMEN follows a layered architecture where each component has a single responsibility.

```text
          User
            │
            ▼
     SQL Input Editor
            │
            ▼
      SQL Parser (AST)
            │
            ▼
      Semantic Model Adapter
            │
            ▼
        Analyzer Engine
            │
            ▼
        Graph Builder
            │
            ▼
      Graph JSON Model
            │
            ▼
      React Flow Renderer
            │
            ▼
         Interactive UI
```

The Intelligence Layer is optional and is executed after deterministic analysis.

```text
Graph JSON
      │
      ▼
 Context Builder
      │
      ▼
     Ollama
      │
      ▼
 AI Explanation
```

## Layers

### Presentation Layer

Responsible for:

- Monaco Editor
- React UI
- React Flow
- Theme
- Settings

### Parsing Layer

Responsible for:

- SQL parsing
- AST generation
- Syntax validation
- Dialect-specific parsing

### Semantic Model Layer

Converts parser-specific AST output into the parser-independent semantic model consumed by analyzers and graph generation.

### Analysis Layer

Responsible for:

- Join detection
- Table detection
- Filter detection
- Aggregate detection
- Window function detection
- CTE detection

Analysis is provided through independent, plugin-style analyzers.

### Graph Layer

Transforms the semantic model into a versioned internal graph representation.

### Rule Engine

Runs deterministic optimization rules. No AI is involved.

### Intelligence Layer

Receives structured analysis only. It never parses SQL directly.

## Design Principles

- Single Responsibility
- Deterministic before AI
- Offline-first
- Modular
- Dialect-aware
- Parser-independent semantic model
- Versioned graph contracts