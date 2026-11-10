# Error Handling

## Error Principles

- Errors are explicit and structured.
- User-facing messages are actionable.
- Recoverable failures do not crash the UI.
- Internal details are logged safely but stack traces are not exposed.
- The application must not return an empty success-shaped result for a failed operation.

## Syntax Error

Display:

- Parser message
- Line number
- Column
- Source range, when available

Stop semantic analysis for invalid portions of the query. Preserve diagnostics so the editor can highlight the problem.

## Unsupported Feature

Continue analysis when safe and display a warning. The warning identifies the unsupported feature and avoids claiming that it was fully understood.

## Unknown Dialect

Use a generic SQL parsing mode when possible and mark the dialect as unknown or generic in diagnostics and Graph JSON metadata. Ask the user to select a dialect when accurate analysis requires it.

## Graph Failure

Catch the failure at the application boundary, show a recoverable error state, and preserve the original diagnostics. Do not crash the UI or display a blank graph as if generation succeeded.

## AI Failure

Disable or skip explanation for the request, show that AI is unavailable, and continue showing deterministic graph and rule results.

## Internal Errors

Generate a diagnostic log containing a correlation identifier, component, stable error code, and safe context. Never expose stack traces, secrets, or raw sensitive query content to users or telemetry by default.