# Context Builder

## Purpose

Convert deterministic analysis into structured, privacy-aware LLM context.

## Inputs

- Graph JSON
- Warnings
- Statistics
- Optional DDL
- Optional EXPLAIN
- User-selected explanation mode

## Outputs

Structured context containing, when available:

- Query type
- Tables
- Joins
- Aggregates
- Warnings
- Execution plan summary
- Complexity score

The Context Builder never includes unnecessary information and never parses raw SQL. Smaller context supports faster inference and reduces disclosure risk.

## Validation

Before prompt construction, remove credentials, unrelated local data, and unsupported claims. Mark unavailable fields explicitly rather than filling them with guesses.