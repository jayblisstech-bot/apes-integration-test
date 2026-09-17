'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { canViewProject } = require('../src/account-access');

test('denies cross-tenant access even for an admin', () => {
  const actor = { userId: 'u1', tenantId: 'tenant-a', role: 'ADMIN' };
  const project = { ownerId: 'u2', tenantId: 'tenant-b' };
  assert.equal(canViewProject(actor, project), false);
});

test('denies cross-tenant access even for an owner', () => {
  const actor = { userId: 'u1', tenantId: 'tenant-a', role: 'OWNER' };
  const project = { ownerId: 'u2', tenantId: 'tenant-b' };
  assert.equal(canViewProject(actor, project), false);
});

test('allows same-tenant admin access', () => {
  const actor = { userId: 'u1', tenantId: 'tenant-a', role: 'ADMIN' };
  const project = { ownerId: 'u2', tenantId: 'tenant-a' };
  assert.equal(canViewProject(actor, project), true);
});

test('allows same-tenant project owner access', () => {
  const actor = { userId: 'u1', tenantId: 'tenant-a', role: 'MEMBER' };
  const project = { ownerId: 'u1', tenantId: 'tenant-a' };
  assert.equal(canViewProject(actor, project), true);
});

test('denies missing inputs', () => {
  assert.equal(canViewProject(null, null), false);
});
