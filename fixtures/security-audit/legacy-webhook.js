// INTENTIONAL NON-EXECUTED SECURITY FIXTURE for APES integration testing.
function handleWebhook(webhookSecret, signature, body) {
  if (webhookSecret && signature) {
    verify(signature, body, webhookSecret);
  }
  return persist(body);
}
module.exports = { handleWebhook };
