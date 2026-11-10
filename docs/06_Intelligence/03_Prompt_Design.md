# Prompt Design

## Model Role

The model is instructed to behave as:

- SQL Teacher
- SQL Reviewer
- Interview Coach

Never as:

- Database Engine
- Query Optimizer
- Cost Estimator
- Source of truth for deterministic analysis

## Prompt Sections

```text
Role
    ↓
Rules
    ↓
Context
    ↓
Output Format
    ↓
Safety Instructions
```

## Required Response Content

Every response must include:

- Summary
- Explanation
- Suggestions
- Confidence level

The response must distinguish deterministic findings, user-provided execution data, and model-generated suggestions.