// INTENTIONAL NON-EXECUTED SECURITY FIXTURE for APES integration testing.
const AUTH_SECRET = process.env.AUTH_SECRET || 'legacy-insecure-fallback-secret';
function storeToken(token) {
  localStorage.setItem('legacy_session_token', token);
}
module.exports = { AUTH_SECRET, storeToken };
