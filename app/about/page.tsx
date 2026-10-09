import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, Handshake, MessageCircle, Scale } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { PageHero } from "@/components/page-hero";
import { ProfileVisual } from "@/components/profile-visual";
import { consultationHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "About", description: "Learn about my practical, business-first approach to AI-powered digital marketing for small and medium-sized businesses." };

export default function AboutPage() {
  return <>
    <PageHero eyebrow="About me" title="Practical marketing thinking, strengthened by useful AI." intro="I help small and medium-sized business owners make better marketing decisions, build more efficient systems, and create clearer paths from attention to enquiry." />
    <section className="section about-story"><div className="container about-grid"><ProfileVisual compact /><div><p className="eyebrow">Who I help</p><h2>Support that starts with your business—not a pre-selected tool.</h2><p>I’m {siteConfig.name}, an AI marketing expert working with business owners who want growth without adding more disconnected tasks to an already full week.</p><p>My focus is the useful intersection of AI and digital marketing: applying modern tools to proven marketing work such as understanding customers, creating valuable content, improving follow-up, building visibility, and learning from campaign response.</p><p>Before recommending a channel, campaign, or tool, I take time to understand your offer, audience, sales process, current resources, and constraints. That context helps us choose what is realistic and worth doing.</p><Link className="button" href={consultationHref()}>Book a Free Consultation <ArrowRight size={18} /></Link></div></div></section>
    <section className="section values-section"><div className="container"><p className="eyebrow">How I work</p><h2>Clear thinking. Useful implementation. Honest measurement.</h2><div className="values-grid">
      <article><Eye /><h3>Understand before recommending</h3><p>I look at the customer journey and business reality before suggesting tactics or technology.</p></article>
      <article><MessageCircle /><h3>Communicate clearly</h3><p>You should understand what we are doing, why it matters, and what the next decision depends on.</p></article>
      <article><Handshake /><h3>Build for real use</h3><p>Strategies and workflows are designed around the time, skills, and resources actually available.</p></article>
      <article><Scale /><h3>Measure what helps</h3><p>We use relevant signals to learn and improve, without turning reporting into an end in itself.</p></article>
    </div></div></section>
    <section className="section why-small"><div className="container why-grid"><div><p className="eyebrow">Built for growing businesses</p><h2>Small and medium-sized businesses have an advantage: proximity to the customer.</h2><p>You can often learn faster, adapt more directly, and communicate with more personality than a large organization. The challenge is turning that closeness into a consistent marketing system without stretching the team too thin.</p><p>That is where a focused outside perspective can help—bringing structure, simplifying choices, and making AI useful in the places where it supports better work.</p></div><div className="check-panel"><h3>A good fit if you want to:</h3><ul><li><CheckCircle2 /> Replace scattered activity with clear priorities</li><li><CheckCircle2 /> Use AI without losing quality or human judgment</li><li><CheckCircle2 /> Make follow-up and content work more consistent</li><li><CheckCircle2 /> Understand what is working and what to improve</li></ul></div></div></section>
    <div className="container cta-wrap"><ConsultationCta /></div>
  </>;
}
