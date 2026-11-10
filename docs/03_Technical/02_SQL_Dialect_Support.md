# SQL Dialect Support

## Initial Support

- PostgreSQL
- MySQL
- SQLite

## Planned Support

- SQL Server
- Oracle
- MariaDB
- DuckDB

## Dialect Selection

Dialect selection follows this priority:

1. Explicit user selection
2. Reliable parser detection, when available
3. Generic SQL fallback

The product should not silently assume a dialect when ambiguity could change the meaning of the query. The selected or detected dialect is recorded in Graph JSON metadata.

## Unsupported Syntax

Unsupported syntax must produce an explicit warning with source location when available. SQL must never be silently rewritten or discarded.

When safe, analysis continues for supported portions of the query. Unsupported constructs remain visible in diagnostics and are not represented as confidently understood nodes.

## Dialect Metadata

Every Graph JSON document stores:

- Dialect
- Parser version
- Detected features
- Unsupported features or constructs

## Dialect Testing

Each supported dialect requires parser, semantic-model, graph, and rule fixtures. Shared SQL behavior should use portable fixtures; dialect-specific behavior should have dedicated fixtures.