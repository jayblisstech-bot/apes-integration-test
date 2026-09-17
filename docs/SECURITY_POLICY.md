# Security Policy

## Authorization
Authorization must fail closed. Cross-tenant access is prohibited.

## Secrets
No API keys or credentials may be committed. Provider credentials are supplied only through GitHub Actions repository secrets.

## Input handling
Missing authorization inputs must result in denial.

## Dependencies
There are no third-party runtime dependencies. APES dependency auditing remains enabled.

## Logging
Secrets and credential values must never be logged.
