'use strict';

const PRIVILEGED_ROLES = new Set(['OWNER', 'ADMIN']);

function isSameTenant(actor, project) {
  const actorTenantId = actor?.tenantId;
  const projectTenantId = project?.tenantId;

  return Boolean(
    actorTenantId &&
    projectTenantId &&
    actorTenantId === projectTenantId
  );
}

function canViewProject(actor, project) {
  if (!actor || !project) return false;

  const sameTenant = isSameTenant(actor, project);
  if (!sameTenant) return false;

  return PRIVILEGED_ROLES.has(actor.role) || actor.userId === project.ownerId;
}

module.exports = { canViewProject };
