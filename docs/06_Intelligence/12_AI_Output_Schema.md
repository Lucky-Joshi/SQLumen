# Intelligence Output Schema

The Intelligence Layer returns structured data for frontend rendering instead of relying on unstructured text alone.

```json
{
  "schemaVersion": "1.0.0",
  "summary": "",
  "steps": [],
  "warnings": [],
  "optimizations": [],
  "confidence": "High"
}
```

## Field Requirements

- `schemaVersion`: output contract version
- `summary`: concise explanation
- `steps`: ordered logical explanation steps
- `warnings`: grounded warnings referencing deterministic findings
- `optimizations`: suggestions with reason, expected benefit, and confidence
- `confidence`: `High`, `Medium`, or `Low`

The validator rejects malformed responses, unsupported confidence values, invented Graph JSON, and claims that cannot be grounded in the provided context. Invalid output is shown as an unavailable explanation rather than a success-shaped response.