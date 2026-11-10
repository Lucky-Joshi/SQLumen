# Local Development

## Requirements

- Node.js 22 LTS or newer (the supported major version is declared in
  `.nvmrc` and enforced by `engine-strict`)
- npm
- Git

Optional:

- Ollama
- Docker

## Setup

```bash
git clone https://github.com/Lucky-Joshi/SQLumen.git
cd SQLumen
npm ci
```

Use `npm install <package>` when adding a dependency so that
`package-lock.json` stays current.

## Commands

```bash
npm run dev          # Start the Vite development server
npm run build        # Type-check and create the production build
npm run typecheck    # Run strict TypeScript checking
npm run lint         # Run ESLint
npm run format:check # Verify Prettier formatting
npm test             # Run the Vitest suite
npm run check        # Run every quality gate above
```

The development server listens on `http://127.0.0.1:5173` by default. The
production preview listens on `http://127.0.0.1:4173`.

Use the package manager and scripts defined by the repository manifests. Keep
local tooling versions aligned with the project configuration.

## Development Principles

- Work offline when possible.
- Do not connect SQLUMEN to live databases.
- Keep sample data and queries synthetic.
- Run targeted checks before opening a pull request.
- Run `npm run check` before requesting review.
