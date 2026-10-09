import assert from "node:assert/strict";

process.env.RESEND_API_KEY = "re_test_key";
process.env.CONTACT_TO_EMAIL = "owner@example.com";
process.env.CONTACT_FROM_EMAIL = "Website <website@example.com>";

const originalFetch = globalThis.fetch;
let deliveryRequest;
globalThis.fetch = async (url, init) => {
  deliveryRequest = { url: String(url), init };
  return new Response(JSON.stringify({ id: "test-delivery" }), { status: 200, headers: { "Content-Type": "application/json" } });
};

const { POST } = await import("../app/api/contact/route.ts");

function requestFor(overrides = {}) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": `test-${Math.random()}` },
    body: JSON.stringify({
      name: "Website QA",
      email: "qa@example.com",
      businessName: "Test Business",
      websiteUrl: "",
      serviceInterest: "Free consultation",
      message: "This message is long enough to pass server validation.",
      companyFax: "",
      startedAt: Date.now() - 2000,
      ...overrides,
    }),
  });
}

const accepted = await POST(requestFor());
assert.equal(accepted.status, 200);
assert.equal((await accepted.json()).accepted, true);
assert.equal(deliveryRequest.url, "https://api.resend.com/emails");
assert.match(deliveryRequest.init.headers.Authorization, /^Bearer /);

const invalid = await POST(requestFor({ email: "not-an-email" }));
assert.equal(invalid.status, 422);

delete process.env.RESEND_API_KEY;
const missingConfiguration = await POST(requestFor({ email: "second@example.com" }));
assert.equal(missingConfiguration.status, 503);

globalThis.fetch = originalFetch;
console.log("Contact handler checks passed: accepted, invalid, and missing-configuration paths.");
