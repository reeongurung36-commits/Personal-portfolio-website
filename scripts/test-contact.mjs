import assert from "node:assert/strict";

const { POST } = await import("../app/api/contact/route.ts");

function requestFor(overrides = {}, ip = `test-${Math.random()}`) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
    body: JSON.stringify({
      name: "Website QA",
      email: "qa@example.com",
      businessName: "Test Business",
      websiteUrl: "",
      serviceInterest: "Free consultation",
      message: "This message is long enough to pass server validation.",
      _honey: "",
      startedAt: Date.now() - 2000,
      ...overrides,
    }),
  });
}

const accepted = await POST(requestFor());
assert.equal(accepted.status, 200);
assert.equal((await accepted.json()).validated, true);

const invalid = await POST(requestFor({ email: "not-an-email" }));
assert.equal(invalid.status, 422);

const tooFast = await POST(requestFor({ email: "fast@example.com", startedAt: Date.now() }));
assert.equal(tooFast.status, 400);

const spam = await POST(requestFor({ email: "spam@example.com", _honey: "filled" }));
assert.equal(spam.status, 422);

const duplicateIp = "duplicate-test";
const duplicateEmail = "duplicate@example.com";
const firstAttempt = await POST(requestFor({ email: duplicateEmail }, duplicateIp));
assert.equal(firstAttempt.status, 200);
const duplicateAttempt = await POST(requestFor({ email: duplicateEmail }, duplicateIp));
assert.equal(duplicateAttempt.status, 429);

console.log("Contact handler checks passed: valid, invalid, timing, honeypot, and throttled paths.");
