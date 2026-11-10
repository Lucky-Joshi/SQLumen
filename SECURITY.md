# Security Policy

## Supported Versions

SQLUMEN is currently in its documentation and architecture phase. Security
fixes are applied to the latest published release and the default branch.

| Version | Supported |
| --- | --- |
| `main` | Yes |
| `0.1.x` | Yes |
| Older versions | No |

## Reporting a Vulnerability

Do not report suspected vulnerabilities in public issues, discussions, or pull
requests. Use GitHub's private vulnerability reporting feature for this
repository when available. If it is unavailable, contact the repository owner
through the private contact method listed in the repository's GitHub profile
and clearly mark the message as a confidential security report.

Please include:

- A concise description of the vulnerability.
- Affected version, commit, file, or workflow.
- Reproduction steps or a minimal proof of concept.
- Security impact and likely exploitability.
- Any required configuration or environment details.
- Suggested mitigation, if known.

Remove credentials, personal data, and unrelated sensitive SQL before sending
the report.

## Responsible Disclosure

Please allow maintainers reasonable time to investigate and release a fix
before public disclosure. Do not access, modify, delete, or exfiltrate data
that does not belong to you. Stop testing if you encounter real user data or
service disruption.

## Response Timeline

- Initial acknowledgement: within 3 business days.
- Initial assessment: within 7 business days.
- Status updates: at least every 14 days while the report remains open.
- Disclosure timing: agreed with the reporter after a fix or mitigation is
  available.

These targets may change during holidays, emergencies, or when a report
requires upstream coordination.

## How Reports Are Handled

Maintainers will reproduce the issue, assess severity and affected versions,
coordinate a fix, and verify the mitigation. Where appropriate, the project
will publish a security advisory, credit the reporter with permission, and
update the changelog.

## Out of Scope

The following are generally out of scope unless they demonstrate a concrete
security impact:

- Vulnerabilities in unsupported third-party services.
- Reports requiring physical access to a user's machine.
- Social engineering or spam.
- Denial of service caused solely by intentionally unbounded local input.
- Missing security headers on an unhosted or development-only page.
- Model quality issues without a security or privacy consequence.

## Security Best Practices

- Keep dependencies and runtime tools updated.
- Never commit API keys, tokens, credentials, or real sensitive SQL.
- Review workflows before adding permissions or third-party actions.
- Use least-privilege GitHub tokens and secrets.
- Validate and bound imported SQL, DDL, EXPLAIN, and model output.
- Treat cloud Intelligence providers as opt-in.

## Privacy Considerations

SQLUMEN is offline-first and never executes SQL or connects to databases.
Local analysis remains on the user's machine by default. Optional Intelligence
providers must be clearly configured and should receive only the minimum
structured context required for the selected feature.
