# Changelog

All notable changes to SQLUMEN are documented in this file.

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added repository tooling: npm manifest and lockfile, Node.js 22 LTS runtime
  policy, strict TypeScript, Vite, ESLint, Prettier, Vitest, editor settings,
  and reproducible development, build, type-check, lint, format, and test
  commands.
- Added a fail-fast Node.js version guard and unit tests for the runtime policy.
- Added a minimal `apps/web` Vite entry point required for the build and
  development commands; product UI and package boundaries remain future work.

### Changed

- Consolidated pull-request quality checks into a single CI workflow and made
  release validation run the full quality gate.

### Fixed

### Removed

### Security

- Forced the patched `minimatch` release to remove moderate-severity audit
  findings from the development toolchain.

### Deprecated

## [0.1.0] - 2026-11-10

### Added

- Added product, architecture, technical, UI/UX, testing, Intelligence Layer, and Operations documentation.
- Added the project glossary and documentation index.
- Added local-development instructions for the canonical repository:
  `https://github.com/Lucky-Joshi/SQLumen.git`.
- Added the initial public repository files and MIT license.

### Changed

- Established the Semantic Model, versioned Graph JSON, plugin-style analyzers, and deterministic-before-Intelligence architecture.
- Renamed the AI documentation area to the Intelligence Layer to distinguish optional model assistance from SQLUMEN's deterministic core.

## Future Release Template

Use the following structure for every release:

```markdown
## [x.y.z] - YYYY-MM-DD

### Added

- New user-facing capabilities.

### Changed

- Changes to existing behavior or public contracts.

### Fixed

- Correctness, reliability, or documentation fixes.

### Removed

- Removed features or deprecated behavior.

### Security

- Security fixes or changes to the security model.

### Deprecated

- Features scheduled for removal.
```

Release notes should describe user-visible changes, migration requirements, affected dialects or contracts, known limitations, and security impact. Update the comparison links below when tags are published.

[Unreleased]: https://github.com/Lucky-Joshi/SQLumen/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/Lucky-Joshi/SQLumen/releases/tag/v0.1.0
