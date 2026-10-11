import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { isConfigured, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for requesting a free consultation with Reeon Gurung.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <>
    <PageHero
      eyebrow="Message received"
      title="Thank you—your consultation request is on its way."
      intro="Your form has been accepted. I’ll review the details you shared and respond using the email address you provided."
    />
    <section className="section thank-you-section">
      <div className="container narrow thank-you-card">
        <CheckCircle2 aria-hidden="true" />
        <div>
          <p className="eyebrow">What happens next</p>
          <h2>I’ll review your goals and prepare a useful next step.</h2>
          <p>You can continue exploring the services and practical marketing guides while you wait. If your enquiry is urgent, you can also contact me directly by email.</p>
          <div className="button-row">
            <Link className="button" href="/services">Explore My Services <ArrowRight size={18} /></Link>
            <Link className="button button-secondary" href="/">Return Home</Link>
          </div>
          {isConfigured(siteConfig.email) && <p className="thank-you-email"><Mail aria-hidden="true" /> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>}
        </div>
      </div>
    </section>
  </>;
}
