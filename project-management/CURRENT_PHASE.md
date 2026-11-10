# Current Development Phase

This file is the operational status record for AI coding agents and
contributors. Update it after every completed milestone or when a blocker
changes.

## Current Phase

Foundation

## Current Milestone

Project Setup

## Current Objective

Create the application and package skeleton, document dependency direction, and
verify package boundaries before implementing SQL behavior.

## Next Tasks

1. T002 — Create application and package skeleton.
2. T003 — Define shared contracts and validation.
3. T004 — Implement parser adapter.

## Blocked Items

- T002 package skeleton is not started.
- Product implementation beyond repository tooling has not started.

## Completed Items

- Product, architecture, technical, UI/UX, testing, Intelligence, and
  Operations documentation.
- Public repository files and GitHub community configuration.
- Agent guidance and architecture rules.
- T001 — repository tooling, strict TypeScript, Vite, ESLint, Prettier,
  Vitest, editor configuration, and CI quality gates.

## How to Continue

1. Read [AGENT.md](../AGENT.md), [ARCHITECTURE_RULES.md](../ARCHITECTURE_RULES.md),
   and [TASKS.md](TASKS.md).
2. Verify the current task's dependencies are marked complete.
3. Implement only the next unblocked task.
4. Run the smallest relevant checks, then the milestone checks.
5. Update task status, this file, related documentation, and the changelog.
6. Record architectural decisions in
   [docs/07_Operations/17_Decision_Log.md](../docs/07_Operations/17_Decision_Log.md).

## Update Protocol

After each completed milestone, update:

- Current Phase and Milestone.
- Current Objective and Next Tasks.
- Completed Items.
- Blocked Items and the reason.
- Roadmap and milestone completion percentage.
- Changelog when user-visible.

Never mark a task complete when implementation, validation, documentation, or
architecture review is incomplete.
