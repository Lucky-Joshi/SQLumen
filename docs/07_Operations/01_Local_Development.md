# Local Development

## Requirements

- Node.js LTS
- npm or pnpm
- Git

Optional:

- Ollama
- Docker

## Setup

```bash
git clone <repository-url>
cd SQLumen
npm install
```

## Commands

```bash
npm run dev
npm run build
npm test
npm run lint
```

Use the package manager and scripts defined by the repository manifests. Keep local tooling versions aligned with the project configuration.

## Development Principles

- Work offline when possible.
- Do not connect SQLUMEN to live databases.
- Keep sample data and queries synthetic.
- Run targeted checks before opening a pull request.