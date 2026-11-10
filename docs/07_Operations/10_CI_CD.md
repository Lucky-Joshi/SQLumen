# CI/CD

## Pipeline

```text
Install (npm ci)
    ↓
Type Check
    ↓
Lint
    ↓
Format Check
    ↓
Tests
    ↓
Build
    ↓
Deploy Preview
    ↓
Production
```

Every pull request runs the applicable automated checks. Production deployment
requires a reviewed change, passing checks, and an approved release version.

## Current Workflows

- `.github/workflows/ci.yml` runs the install, type-check, lint, formatting,
  test, and production-build gates for pushes to `main` and `develop` and for
  every pull request.
- `.github/workflows/release.yml` validates the version tag and changelog entry,
  runs the full quality gate, and publishes the GitHub release.

Both workflows read the supported Node.js version from `.nvmrc` and install
dependencies from the committed `package-lock.json` with `npm ci`.

CI logs must not expose secrets, API keys, or sensitive SQL fixtures.
