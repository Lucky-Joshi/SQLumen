# Environment Setup

## Runtime Requirements

| Requirement | Supported version | Source of truth |
| --- | --- | --- |
| Node.js | 22 LTS or newer | `.nvmrc`, `package.json` engines |
| npm | Bundled with Node.js | `package-lock.json` |

`engine-strict=true` is enabled in `.npmrc`, and the Vite configuration fails
fast when the runtime is older than the supported major version.

## Environment Variables


| Variable | Purpose | Default |
| --- | --- | --- |
| `APP_MODE` | Application mode | `local` |
| `OLLAMA_URL` | Local Ollama endpoint | `http://localhost:11434` |
| `OPENAI_API_KEY` | Optional cloud provider key | unset |
| `DEFAULT_DIALECT` | Initial SQL dialect | `postgres` |
| `GRAPH_LAYOUT` | Graph layout strategy | `dagre` |
| `AI_ENABLED` | Enable Intelligence Layer | `false` |

`.env.example` must always remain updated with variable names and safe placeholder values.

## Secret Handling

- Never commit secrets.
- Never place secrets in documentation, prompts, Graph JSON, or logs.
- Use local environment configuration or a platform secret manager.
- Keep cloud providers disabled unless the user explicitly opts in.

## Environment Parity

Document changes to required Node.js, package-manager, provider, or build versions. Local, preview, and production environments should use the same validated build commands.