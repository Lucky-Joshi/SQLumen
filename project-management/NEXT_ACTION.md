# Next Action

## Current Goal

Complete T002: create the application and package skeleton.

## Why This Task

T001 established reproducible tooling, strict TypeScript, Vite, ESLint,
Prettier, Vitest, and CI. The next implementation step is to create the
documented package boundaries so later contracts and SQL behavior can be added
without reorganizing the repository.

## Files to Modify

- `apps/web/` application entry and package manifest
- `packages/parser/`
- `packages/semantic-model/`
- `packages/analyzer/`
- `packages/graph/`
- `packages/rules/`
- `packages/ui/`
- `packages/shared/`
- Workspace configuration, TypeScript path configuration, and test entry points
- `tests/` package-resolution and boundary checks
- Related architecture and operations documentation

## Dependencies

T001 is complete. Read `AGENT.md`, `ARCHITECTURE_RULES.md`,
`docs/02_Architecture/05_Folder_Structure.md`,
`docs/02_Architecture/04_Module_Design.md`, and
`project-management/TASKS.md` before starting.

## Expected Output

Importable package boundaries with documented dependency direction, initial
source and test entry points, and no circular layer dependencies. The tooling
quality gates from T001 continue to pass.

## Definition of Done

- `apps/web` and every documented package exist and resolve.
- Each package has a compilation and test entry point.
- Dependency direction is documented and enforced where practical.
- No UI or rules package imports parser internals.
- No undocumented top-level directory is introduced.
- Type check, lint, formatting, tests, and build pass.
- Related architecture and operations documentation is updated.
- `TASK_PROGRESS.md`, `PHASE_TRACKER.md`, `BUILD_STATUS.md`,
  `COMPLETION_DASHBOARD.md`, `MASTER_CHECKLIST.md`, `CURRENT_PHASE.md`, and
  this file are updated with evidence.
