'use strict';

const PRIVILEGED_ROLES = new Set(['OWNER', 'ADMIN']);

function isSameTenant(actor, project) {
  return Boolean(actor.tenantId && project.tenantId && actor.tenantId === project.tenantId);
}

function canViewProject(actor, project) {
  if (!actor || !project) return false;
  if (!isSameTenant(actor, project)) return false;

  return PRIVILEGED_ROLES.has(actor.role) || actor.userId === project.ownerId;
}

module.exports = { canViewProject };
