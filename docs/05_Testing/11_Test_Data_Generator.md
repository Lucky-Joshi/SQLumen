# Test Data Generator

## Purpose

Define repeatable datasets for query demonstrations, performance benchmarks, and regression testing without requiring a live database connection from SQLUMEN.

## Dataset Sizes

Generate deterministic fixtures at:

- 1K rows
- 10K rows
- 100K rows
- 1M rows

## Requirements

- Use a fixed seed for reproducibility.
- Preserve primary-key and foreign-key relationships.
- Include realistic null, duplicate, boundary, and skewed values.
- Document generated row counts and distributions.
- Keep generated data free of real personal or confidential information.

## Domains

The generator should cover users, addresses, orders, order items, products, inventory, payments, refunds, shipments, reviews, coupons, employees, and departments.

## Benchmark Profiles

Each profile records:

- Dataset size
- Generation seed
- Dialect or export format
- Query fixture IDs
- Expected row counts
- Generation timestamp

SQLUMEN analyzes SQL and plans but does not execute queries or connect to these datasets.