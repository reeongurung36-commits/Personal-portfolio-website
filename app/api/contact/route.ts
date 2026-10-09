import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  businessName: z.string().trim().min(2).max(140),
  websiteUrl: z.union([z.literal(""), z.string().trim().url().max(300)]).optional(),
  serviceInterest: z.string().trim().min(2).max(160),
  message: z.string().trim().min(20).max(3000),
  companyFax: z.string().max(0).optional(),
  startedAt: z.number().int().positive(),
});

const recentSubmissions = new Map<string, number>();

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" })[character] || character);
}

export async function POST(request: Request) {
  let payload: unknown;
  try { payload = await request.json(); } catch { return Response.json({ message: "Please submit the form again." }, { status: 400 }); }
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) return Response.json({ message: "Please check the required fields and try again." }, { status: 422 });

  const elapsed = Date.now() - parsed.data.startedAt;
  if (elapsed < 1500 || elapsed > 86_400_000) return Response.json({ message: "The form session expired. Refresh the page and try again." }, { status: 400 });

  const forwardedFor = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "unknown";
  const rateKey = `${forwardedFor}:${parsed.data.email.toLowerCase()}`;
  const lastAttempt = recentSubmissions.get(rateKey) || 0;
  if (Date.now() - lastAttempt < 60_000) return Response.json({ message: "Please wait a minute before sending another enquiry." }, { status: 429 });
  recentSubmissions.set(rateKey, Date.now());

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !toEmail || !fromEmail) {
    return Response.json({ message: "Online delivery is not configured yet. Please add the Resend environment variables described in the project README." }, { status: 503 });
  }

  const data = parsed.data;
  const websiteLine = data.websiteUrl ? `<p><strong>Website:</strong> ${escapeHtml(data.websiteUrl)}</p>` : "";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: data.email,
      subject: `New website enquiry from ${data.name}`,
      html: `<h1>New website enquiry</h1><p><strong>Name:</strong> ${escapeHtml(data.name)}</p><p><strong>Email:</strong> ${escapeHtml(data.email)}</p><p><strong>Business:</strong> ${escapeHtml(data.businessName)}</p>${websiteLine}<p><strong>Service:</strong> ${escapeHtml(data.serviceInterest)}</p><p><strong>Message:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!response.ok) {
    console.error("Contact delivery rejected", response.status);
    return Response.json({ message: "The email service did not accept your enquiry. Please try again shortly." }, { status: 502 });
  }
  return Response.json({ accepted: true, message: "Enquiry accepted." });
}
