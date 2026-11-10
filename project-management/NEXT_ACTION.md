# Next Action

## Current Goal

Complete T001: establish repository tooling.

## Why This Task

The repository has comprehensive design documentation but no application
manifest, source tree, or executable quality checks. Every implementation task
depends on reproducible tooling.

## Files to Modify

- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- ESLint configuration
- Prettier configuration
- Test-runner configuration
- `.gitignore`
- `.github/workflows/`

## Dependencies

None. Read `AGENT.md`, `ARCHITECTURE_RULES.md`, and
`project-management/TASKS.md` before starting.

## Expected Output

A clean checkout can install dependencies and run development, build,
type-check, lint, test, and formatting commands. CI runs the same checks
without requiring application features that do not yet exist.

## Definition of Done

- Tooling files are committed as a focused change.
- TypeScript strict mode is enabled.
- Scripts are reproducible.
- Dependencies are appropriate and documented.
- CI and local commands pass.
- No placeholder or fake implementation is introduced.
- Related operations documentation is updated.
- `TASK_PROGRESS.md`, `PHASE_TRACKER.md`, `BUILD_STATUS.md`,
  `COMPLETION_DASHBOARD.md`, `MASTER_CHECKLIST.md`, `CURRENT_PHASE.md`, and
  this file are updated with evidence.
