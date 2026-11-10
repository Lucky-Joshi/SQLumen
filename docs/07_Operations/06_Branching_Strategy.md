# Branching Strategy

```text
main
Stable
    ↓
develop
Integration
    ↓
feature/*
Individual work
    ↓
Pull Request
    ↓
Review
    ↓
Merge
```

`main` contains releasable code. Feature and bugfix branches must be reviewed before merging. Hotfixes may branch from `main` and must be back-merged into the integration branch.