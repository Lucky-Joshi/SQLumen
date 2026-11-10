# Model Configuration

## Supported Providers

- Ollama
- OpenAI
- Anthropic
- Google
- LM Studio

## Settings

- Temperature
- Max tokens
- Top-P
- Context length
- Streaming
- Model name
- Request timeout

## Default

Ollama, offline, and privacy-first.

Cloud providers require explicit user consent and visible configuration. Secrets must be supplied through secure environment or platform configuration and must never be stored in documentation, prompts, logs, or Graph JSON.

## Availability

Provider failures are recoverable. The core parser, graph, and rule functionality continues when no model is configured or reachable.