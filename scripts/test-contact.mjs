import assert from "node:assert/strict";

process.env.FORM_SUBMIT_EMAIL = "owner@example.com";

const originalFetch = globalThis.fetch;
let deliveryRequest;
let deliveryMode = "accepted";
globalThis.fetch = async (url, init) => {
  deliveryRequest = { url: String(url), init };
  const response = deliveryMode === "accepted"
    ? { status: 200, body: { success: true, message: "Accepted" } }
    : deliveryMode === "activation"
      ? { status: 200, body: { success: "false", message: "This form needs Activation." } }
      : { status: 502, body: { success: false, message: "Rejected" } };
  return new Response(JSON.stringify(response.body), { status: response.status, headers: { "Content-Type": "application/json" } });
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
assert.equal(deliveryRequest.url, "https://formsubmit.co/ajax/owner%40example.com");
assert.equal(deliveryRequest.init.headers.Accept, "application/json");
assert.equal(deliveryRequest.init.headers.Origin, "https://ai-marketing-growth-20261009.amusedflute.chatgpt.site");
assert.equal(deliveryRequest.init.headers.Referer, "https://ai-marketing-growth-20261009.amusedflute.chatgpt.site/contact");
const deliveredBody = JSON.parse(deliveryRequest.init.body);
assert.equal(deliveredBody._replyto, "qa@example.com");
assert.equal(deliveredBody["Business name"], "Test Business");

const invalid = await POST(requestFor({ email: "not-an-email" }));
assert.equal(invalid.status, 422);

deliveryMode = "activation";
const activationPending = await POST(requestFor({ email: "activation@example.com" }));
assert.equal(activationPending.status, 503);

deliveryMode = "rejected";
const rejected = await POST(requestFor({ email: "second@example.com" }));
assert.equal(rejected.status, 502);

globalThis.fetch = originalFetch;
console.log("Contact handler checks passed: accepted, invalid, activation-pending, and rejected-delivery paths.");
