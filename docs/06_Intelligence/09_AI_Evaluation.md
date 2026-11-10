# Intelligence Evaluation

## Metrics

- Accuracy
- Consistency
- Hallucination rate
- Latency
- User satisfaction
- Structured-output validity

## Evaluation Dataset

Use at least 50 SQL queries covering:

- Multiple supported dialects
- Simple to advanced queries
- Joins, filters, aggregates, windows, CTEs, and subqueries
- Warnings with both available and unavailable evidence

## Human Review

Every Intelligence feature must be manually reviewed before release. Reviewers verify factual grounding, safety behavior, usefulness, mode appropriateness, and that deterministic findings remain unchanged.

## Regression

Store representative prompts and validated outputs with model configuration metadata. Changes in model, prompt, or schema version require reevaluation.