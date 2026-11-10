# User Experience Principles

SQLUMEN is an educational developer tool. Its UX should help users understand SQL while preserving the clarity and authority of deterministic analysis.

1. Never overwhelm the user.
2. Deterministic results always appear before AI output.
3. Errors should teach, not just report.
4. Every graph interaction should have visible feedback.
5. Users should reach the graph within two clicks.
6. Important information should never be hidden behind AI.
7. Advanced features should progressively disclose themselves.
8. Explain logical SQL flow without implying unverified execution behavior.
9. Preserve context between the editor, graph, warnings, and source locations.
10. Make offline and unavailable states clear without blocking core analysis.

## Educational Behavior

Use progressive disclosure:

- Start with a concise explanation.
- Let users expand technical details.
- Link warnings to the relevant SQL and graph nodes.
- Distinguish facts, heuristics, and AI suggestions.

## Consistency

New UI features should reuse the Design System, semantic theme tokens, component library, interaction model, and accessibility rules.