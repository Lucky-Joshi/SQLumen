# CI/CD

## Pipeline

```text
Install
    ↓
Lint
    ↓
Type Check
    ↓
Tests
    ↓
Build
    ↓
Deploy Preview
    ↓
Production
```

Every pull request runs the applicable automated checks. Production deployment requires a reviewed change, passing checks, and an approved release version.

CI logs must not expose secrets, API keys, or sensitive SQL fixtures.