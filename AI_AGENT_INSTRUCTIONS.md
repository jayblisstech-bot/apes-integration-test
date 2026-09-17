# AI Agent Instructions

Follow APES v1.2.0 for all changes.

Before modifying code:
- inspect the architecture, business rules, and security policy;
- preserve existing behavior unless the task explicitly changes it;
- treat authorization and tenant isolation as high risk;
- never commit secrets;
- run typecheck, tests, build, and lint before proposing completion.

For this integration harness, cross-tenant project access is always forbidden.
