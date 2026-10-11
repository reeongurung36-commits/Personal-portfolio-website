"use client";

import { AlertCircle, LoaderCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { services } from "@/lib/content";
import { isConfigured, siteConfig } from "@/lib/site-config";

type Status = { type: "idle" | "sending" | "error"; message?: string };

export function ContactForm() {
  const [startedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "sending" });
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, startedAt }) });
      const result = await response.json() as { validated?: boolean; message?: string };
      if (!response.ok) throw new Error(result.message || "Your message could not be sent. Please try again.");
      if (!result.validated) throw new Error("Your message could not be validated. Please try again.");
      form.submit();
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Your message could not be sent. Please try again." });
    }
  }

  return <form className="contact-form" action={`https://formsubmit.co/${siteConfig.formSubmitEmail}`} method="POST" onSubmit={handleSubmit} noValidate={false}>
    <input type="hidden" name="_next" value={`${siteConfig.siteUrl}/thank-you`} />
    <input type="hidden" name="_subject" value="New free consultation request" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_url" value={`${siteConfig.siteUrl}/contact`} />
    <input type="hidden" name="_captcha" value="false" />
    <div className="honeypot" aria-hidden="true"><label htmlFor="formHoney">Leave this field empty</label><input id="formHoney" name="_honey" tabIndex={-1} autoComplete="off" /></div>
    <div className="form-grid">
      <div className="field"><label htmlFor="name">Name <span aria-hidden="true">*</span></label><input id="name" name="name" required autoComplete="name" maxLength={100} /></div>
      <div className="field"><label htmlFor="email">Email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" required autoComplete="email" maxLength={200} /></div>
      <div className="field"><label htmlFor="businessName">Business name <span aria-hidden="true">*</span></label><input id="businessName" name="businessName" required autoComplete="organization" maxLength={140} /></div>
      <div className="field"><label htmlFor="whatsappNumber">WhatsApp number <span className="optional">Optional</span></label><input id="whatsappNumber" name="whatsappNumber" type="tel" inputMode="tel" placeholder="Include country code" autoComplete="tel" maxLength={30} aria-describedby="whatsappHint" /><small id="whatsappHint" className="field-hint">Example: +977 98XXXXXXXX</small></div>
      <div className="field field-wide"><label htmlFor="serviceInterest">What would you like to discuss? <span aria-hidden="true">*</span></label><select id="serviceInterest" name="serviceInterest" required defaultValue="Free consultation"><option>Free consultation</option>{services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}</select></div>
      <div className="field field-wide"><label htmlFor="message">Tell me about your goals or current challenge <span aria-hidden="true">*</span></label><textarea id="message" name="message" required minLength={20} maxLength={3000} rows={6} placeholder="A little context helps me prepare a useful response…" /></div>
    </div>
    <p className="privacy-note">Your information will only be used to respond to your enquiry and discuss the services you requested. It will not be added to a marketing list without your consent.</p>
    <button className="button submit-button" type="submit" disabled={status.type === "sending"}>{status.type === "sending" ? <><LoaderCircle className="spin" /> Sending securely…</> : <>Send My Enquiry <Send size={18} /></>}</button>
    <div className={`form-status ${status.type}`} role="status" aria-live="polite">
      {status.type === "error" && <><AlertCircle /> <span>{status.message}{isConfigured(siteConfig.email) && <> You can also email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</>}</span></>}
    </div>
  </form>;
}
