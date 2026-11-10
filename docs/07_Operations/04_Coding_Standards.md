# Coding Standards

- Use TypeScript strict mode.
- Avoid `any`; prefer precise types and guards.
- Prefer composition over inheritance.
- Use pure functions where possible.
- Avoid unnecessary global state.
- Document every public function and exported contract where behavior is not self-evident.
- Use ESLint and Prettier as mandatory quality gates.
- Preserve deterministic behavior before optional Intelligence features.
- Surface errors explicitly; do not silently return success-shaped fallbacks.

## Quality Gates

Run `npm run check` before opening a pull request. It runs strict type checking,
ESLint, Prettier verification, the Vitest suite, and the production build.

Changes should follow existing naming, formatting, localization, and testing patterns.