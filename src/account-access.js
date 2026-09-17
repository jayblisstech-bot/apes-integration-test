'use strict';

const PRIVILEGED_ROLES = new Set(['OWNER', 'ADMIN']);

function canViewProject(actor, project) {
  if (!actor || !project) return false;

  // Tenant owners are trusted across projects.
  if (actor.role === 'OWNER') return true;

  if (!actor.tenantId || !project.tenantId) return false;
  if (actor.tenantId !== project.tenantId) return false;

  return PRIVILEGED_ROLES.has(actor.role) || actor.userId === project.ownerId;
}

module.exports = { canViewProject };
