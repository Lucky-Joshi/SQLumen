# Privacy Model

## Default Mode

SQLUMEN is offline-first. In the default mode, SQL and local analysis results do not leave the user's machine.

## Local AI

Ollama may run locally and receive only the structured context selected by the Context Builder. Local AI remains optional and can be disabled.

## Cloud AI

Cloud AI is optional, requires explicit user consent, and must clearly identify what data will be transmitted before sending it. No cloud provider is contacted automatically.

## Telemetry

Telemetry is disabled by default. If introduced later, it must be opt-in, documented, minimized, and scrubbed of SQL, identifiers, credentials, and sensitive metadata.

## Query Storage

Queries and generated analysis are stored locally only by default. Persistence should be user-controllable, and stored data should not be uploaded automatically.

## Security Principles

- Never execute SQL.
- Never connect to user databases.
- Never upload SQL automatically.
- Never include secrets or credentials in AI context.
- Treat pasted SQL as sensitive user content.
- Make network activity visible and consent-based.