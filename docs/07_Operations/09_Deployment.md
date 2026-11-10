# Deployment

```text
Development
    ↓
Local
    ↓
Preview
    ↓
Production
```

## Targets

- Preview: Vercel or an equivalent static preview host
- Production: static frontend
- Optional backend: Docker, cloud, or self-hosted deployment

Deployment must preserve the local-first privacy model. Cloud Intelligence providers and telemetry remain opt-in and must be configured separately from the static frontend.