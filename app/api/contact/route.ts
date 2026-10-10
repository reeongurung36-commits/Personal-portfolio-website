import { z } from "zod";
import { isConfigured, siteConfig } from "../../../lib/site-config.ts";

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

  const deliveryEmail = process.env.FORM_SUBMIT_EMAIL || siteConfig.email;
  if (!isConfigured(deliveryEmail)) {
    recentSubmissions.delete(rateKey);
    return Response.json({ message: "Online delivery is not configured yet. Please add a FormSubmit recipient email as described in the project README." }, { status: 503 });
  }

  const data = parsed.data;
  let response: Response;
  try {
    response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(deliveryEmail)}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: siteConfig.siteUrl,
        Referer: `${siteConfig.siteUrl}/contact`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        _replyto: data.email,
        "Business name": data.businessName,
        "Website URL": data.websiteUrl || "Not provided",
        "Service interest": data.serviceInterest,
        message: data.message,
        _subject: `New website enquiry from ${data.name}`,
        _template: "table",
        _captcha: "false",
      }),
    });
  } catch (error) {
    recentSubmissions.delete(rateKey);
    console.error("FormSubmit delivery request failed", error);
    return Response.json({ message: "The email service could not be reached. Please try again shortly." }, { status: 502 });
  }

  const result = await response.json().catch(() => null) as { success?: boolean | string; message?: string } | null;
  const accepted = result?.success === true || result?.success === "true";
  const awaitingActivation = response.ok && /activat/i.test(result?.message || "");
  if (awaitingActivation) {
    recentSubmissions.delete(rateKey);
    return Response.json({ message: "Email delivery is awaiting one-time FormSubmit activation. Please use the direct email link below until the owner confirms it." }, { status: 503 });
  }
  if (!response.ok || !accepted) {
    recentSubmissions.delete(rateKey);
    console.error("FormSubmit delivery rejected", response.status, result?.message || "Unknown response");
    return Response.json({ message: "The email service did not accept your enquiry. Please try again shortly." }, { status: 502 });
  }
  return Response.json({ accepted: true, message: result?.message || "Enquiry accepted." });
}
