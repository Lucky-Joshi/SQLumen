# Performance Testing

## Goals

Measure parsing, semantic analysis, graph generation, rule evaluation, and rendering separately where possible.

## Target Budgets

- Small query: `<100ms` deterministic analysis
- Medium query: `<300ms` deterministic analysis
- Large query: `<1 second` deterministic analysis
- Huge query: graceful loading with progress or an explicit busy state

Targets are measured on a documented reference machine and should not include optional LLM latency.

## Workloads

- Simple query with one table
- Multi-join analytical query
- Deeply nested subqueries
- Large CTE chain
- 300+ line production query
- Large generated graph

## Resource Checks

- No memory leaks during repeated analysis
- No unbounded growth after replacing queries
- Smooth graph zoom and pan
- 60 FPS target during normal graph interaction
- UI remains responsive while analysis is in progress

## Reporting

Record query ID, dialect, machine, software version, input size, node count, timings, peak memory, and pass/fail result.