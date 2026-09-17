# Business Rules

1. Tenant isolation is mandatory: `actor.tenantId` must equal `project.tenantId`.
2. Within the same tenant, access is allowed only when the actor is OWNER, ADMIN, or the explicit project owner.
3. Missing actor or project input must deny access.
4. Billing, subscriptions, and data-retention behavior are outside the scope of this integration harness.
