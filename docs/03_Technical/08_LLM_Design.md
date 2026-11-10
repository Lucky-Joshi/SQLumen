# LLM Design

## Purpose

The LLM provides explanations and learning assistance. It does not perform the authoritative SQL analysis.

## Input

The Context Builder may provide:

- Graph JSON
- Warnings
- Statistics
- Optional EXPLAIN data
- Optional DDL-derived schema context
- User-selected learning mode

Raw SQL is not sent by default.

## Output

The LLM may produce:

- Plain-English explanations
- Optimization suggestions
- Interview questions
- Learning explanations
- Clarifying descriptions of graph nodes and warnings

Responses should be labeled as suggestions and should distinguish facts from assumptions.

## Forbidden

The LLM must not:

- Generate execution plans
- Guess indexes as facts
- Invent statistics
- Invent relationships
- Modify Graph JSON
- Override deterministic warnings
- Claim query execution or measured performance

## Modes

- Beginner
- Intermediate
- Expert

Modes change explanation depth and terminology, not the underlying deterministic analysis.

## Availability and Safety

If Ollama or another configured provider is unavailable, the core application continues without AI. Prompt context must be bounded, privacy-aware, and free of credentials or unrelated local data.