# Definition of Done

This definition applies to every task, pull request, and milestone. A task
that is merely coded is not done.

## Required Checks

- Code compiles and type checking passes.
- Linting and formatting pass.
- Relevant unit tests pass.
- Relevant integration tests pass.
- Regression tests pass when existing behavior is affected.
- UI behavior is manually reviewed when applicable.
- Accessibility is checked when UI changes are made.
- Performance is acceptable against the documented budget.
- Documentation and examples are updated.
- Changelog is updated for user-visible changes.
- Architecture rules are respected.
- Layer boundaries remain intact.
- No duplicated logic or dead code was introduced.
- Type safety is maintained; no unjustified `any`, casts, or bypasses.
- Errors are explicit and recoverable.
- Privacy and security implications are reviewed.
- No secrets, real sensitive SQL, or credentials are present.
- No unresolved scope-critical TODOs remain.
- No placeholder, fake, or success-shaped implementation remains.
- Migration, compatibility, and rollback behavior are documented where needed.

## Review Evidence

The pull request must include:

- A concise summary.
- Exact validation commands and results.
- Screenshots or recordings for UI changes.
- Related issue or task ID.
- Documentation links.
- Known limitations and reviewer focus areas.

## Milestone Completion

A milestone is done only when all tasks are done, the validation checklist
passes, the roadmap percentage is updated, the current phase is updated, and
the decision log contains any architectural decisions.

## Release Completion

A release is done only when:

- Full CI passes.
- The changelog contains the release entry.
- Version and schema compatibility are documented.
- Security and privacy checks are complete.
- Release notes and known limitations are published.
- The release tag and artifacts are reproducible.
- Rollback instructions are available.
