# Feature Matrix

Status values are `Not Started`, `In Progress`, `Blocked`, and `Completed`.
The matrix is the feature database and must be updated when scope, tests, or
documentation changes.

| Feature | Category | Priority | Status | Dependencies | Tests | Documentation | Completed | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Repository tooling | Foundation | P0 | Completed | None | `tests/tooling/environment.test.ts` | [Local Development](../docs/07_Operations/01_Local_Development.md) | Yes | Unassigned |
| SQL parser | Core | P0 | Not Started | Foundation | Planned | Complete | No | Unassigned |
| PostgreSQL dialect | Parser | P0 | Not Started | SQL parser | Planned | Complete | No | Unassigned |
| MySQL dialect | Parser | P0 | Not Started | SQL parser | Planned | Complete | No | Unassigned |
| SQLite dialect | Parser | P0 | Not Started | SQL parser | Planned | Complete | No | Unassigned |
| Semantic Model | Core | P0 | Not Started | Parser | Planned | Complete | No | Unassigned |
| Analyzer plugins | Analysis | P0 | Not Started | Semantic Model | Planned | Complete | No | Unassigned |
| Graph JSON v1 | Core | P0 | Not Started | Analyzers | Planned | Complete | No | Unassigned |
| Interactive graph | UI | P0 | Not Started | Graph JSON | Planned | Complete | No | Unassigned |
| Rule Engine | Analysis | P0 | Not Started | Graph JSON | Planned | Complete | No | Unassigned |
| DDL context | Evidence | P1 | Not Started | Deterministic pipeline | Planned | Complete | No | Unassigned |
| EXPLAIN visualization | Evidence | P1 | Not Started | Graph and DDL boundaries | Planned | Complete | No | Unassigned |
| Graph export | Persistence | P1 | Not Started | Graph JSON | Planned | Complete | No | Unassigned |
| Local persistence | Privacy | P1 | Not Started | Application shell | Planned | Complete | No | Unassigned |
| Intelligence context | Intelligence | P1 | Not Started | Structured analysis | Planned | Complete | No | Unassigned |
| Explanation modes | Intelligence | P1 | Not Started | Intelligence context | Planned | Complete | No | Unassigned |
| Query rewrite | Intelligence | P1 | Not Started | Output validation | Planned | Complete | No | Unassigned |
| Interview mode | Intelligence | P1 | Not Started | Graph and warnings | Planned | Complete | No | Unassigned |
| Accessibility | Quality | P0 | Not Started | UI | Planned | Complete | No | Unassigned |
| Performance hardening | Quality | P0 | Not Started | UI and graph | Planned | Complete | No | Unassigned |
| Production release | Operations | P0 | Not Started | Quality gates | Planned | Complete | No | Unassigned |

## Update Rules

- `Tests` names the test suite or fixture when implemented.
- `Documentation` links the authoritative document.
- `Completed` is `Yes` only when the Definition of Done passes.
- Add features instead of silently changing historical rows.
