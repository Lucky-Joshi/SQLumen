# Contributing to SQLUMEN

Thank you for your interest in contributing.

SQLUMEN aims to become a high-quality educational and developer tool. Every contribution should improve correctness, maintainability, or usability.

---

# Ways to Contribute

You can contribute by

- Fixing bugs
- Improving documentation
- Adding parser support
- Improving graph layouts
- Writing tests
- Improving accessibility
- Suggesting optimization rules
- Improving UI
- Reporting bugs

---

# Development Workflow

Fork

↓

Create Feature Branch

↓

Implement

↓

Test

↓

Document

↓

Pull Request

---

# Branch Naming

feature/...

bugfix/...

docs/...

refactor/...

test/...

---

# Commit Format

feat:

fix:

docs:

refactor:

test:

perf:

style:

chore:

---

# Coding Standards

- TypeScript Strict Mode
- No `any`
- Pure functions where possible
- ESLint required
- Prettier required
- Public APIs documented

# Quality Commands

Run the complete quality gate before opening a pull request:

```bash
npm ci
npm run check
```

The gate runs strict type checking, ESLint, Prettier verification, Vitest, and
the production build. See
[docs/07_Operations/01_Local_Development.md](docs/07_Operations/01_Local_Development.md)
for individual commands.

---

# Pull Requests

Every PR should include

- Description
- Screenshots (if UI)
- Tests
- Documentation updates

---

# Reporting Bugs

Please include

- SQL query
- Expected result
- Actual result
- Dialect
- Screenshots
- Error logs

---

# Feature Requests

Clearly describe

- Problem
- Proposed solution
- Alternatives considered

---

# Code of Conduct

Be respectful.

Constructive feedback is encouraged.

Harassment or abusive behavior will not be tolerated.

---

Thank you for helping improve SQLUMEN.

For community standards and vulnerability reporting, see
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) and [SECURITY.md](SECURITY.md).