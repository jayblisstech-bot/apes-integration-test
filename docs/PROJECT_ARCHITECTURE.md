# Project Architecture

## Purpose
Controlled integration harness for APES v1.2.0 and Hermes.

## Runtime
Node.js 20+, CommonJS, npm, no third-party runtime dependencies.

## Application code
`src/account-access.js` contains a tenant-aware authorization helper used as the review target.

## Tests
`tests/account-access.test.js` verifies tenant isolation and role/ownership behavior.

## CI / APES
`.github/workflows/ai-review.yml` calls the reusable APES v1.2.0 workflow from `jayblisstech-bot/ai-production-engineering-standard`.

## Critical invariant
A user from one tenant must never gain access to a project owned by another tenant. Changes to `src/account-access.js` are intentionally classified HIGH risk.
