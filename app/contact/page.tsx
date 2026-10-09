import type { Metadata } from "next";
import { ArrowRight, CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { isConfigured, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contact", description: "Book a free consultation or send an enquiry about AI-powered digital marketing support for your business." };

export default function ContactPage() {
  const hasBooking = isConfigured(siteConfig.bookingUrl);
  return <>
    <section className="contact-hero"><div className="container contact-grid">
      <div className="contact-intro"><p className="eyebrow light">Let’s talk</p><h1>Bring the business goal. We’ll find the clearest marketing path.</h1><p className="contact-lead">Tell me what you are working toward, where marketing feels stuck, or which AI opportunity you want to explore. I’ll respond with a useful next step.</p>
        <div className="contact-offer"><CalendarCheck /><div><h2>Book a free consultation</h2><p>{siteConfig.consultationOffer}</p>{hasBooking ? <a className="button button-light" href={siteConfig.bookingUrl}>Choose a time <ArrowRight /></a> : <a className="button button-light" href="#enquiry-form">Request your consultation <ArrowRight /></a>}</div></div>
        <div className="contact-details">
          <p><Mail /> {isConfigured(siteConfig.email) ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : <span>Email address added during setup</span>}</p>
          {isConfigured(siteConfig.phone) && <p><Phone /> <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></p>}
          <p><MapPin /> <span>{siteConfig.location}</span></p>
        </div>
      </div>
      <div className="form-panel" id="enquiry-form"><p className="eyebrow">Start the conversation</p><h2>What would you like to improve?</h2><p>Required fields are marked with an asterisk.</p><ContactForm /></div>
    </div></section>
  </>;
}
