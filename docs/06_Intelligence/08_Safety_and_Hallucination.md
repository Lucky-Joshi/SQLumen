# Safety and Hallucination

The model must never:

- Invent indexes.
- Invent constraints.
- Invent execution plans.
- Invent statistics.
- Invent row counts.
- Invent primary-key or foreign-key relationships.
- Claim that a query was executed.
- Override deterministic findings.

If information is unavailable, the response must explicitly say:

> Cannot determine from the provided inputs.

## Confidence Levels

- High
- Medium
- Low

Confidence describes evidence available in the context, not certainty of runtime performance. The UI must label model-generated suggestions separately from deterministic warnings.