import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  businessName: z.string().trim().min(2).max(140),
  websiteUrl: z.union([z.literal(""), z.string().trim().url().max(300)]).optional(),
  serviceInterest: z.string().trim().min(2).max(160),
  message: z.string().trim().min(20).max(3000),
  _honey: z.string().max(0).optional(),
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

  return Response.json({ validated: true });
}
