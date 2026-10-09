import Link from "next/link";
import { ArrowRight, Check, Clock3, Compass, Gauge, Lightbulb, MessageSquareText, Search, Sparkles, Target, TrendingUp } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { FaqList } from "@/components/faq-list";
import { ProfileVisual } from "@/components/profile-visual";
import { services } from "@/lib/content";
import { consultationHref, siteConfig } from "@/lib/site-config";

const challenges = [
  { icon: TrendingUp, text: "Inconsistent leads make growth hard to plan." },
  { icon: Search, text: "Low visibility keeps the right customers from finding you." },
  { icon: Clock3, text: "Limited time turns marketing into a stop-start effort." },
  { icon: Compass, text: "An unclear strategy creates activity without direction." },
  { icon: Lightbulb, text: "Too many AI tools make it difficult to choose wisely." },
];

const process = [
  ["01", "Understand the business", "We clarify your goals, audience, offer, current marketing, resources, and constraints."],
  ["02", "Create the strategy", "We choose priorities and build an achievable roadmap around the work most likely to matter."],
  ["03", "Implement campaigns", "We turn the plan into focused content, campaigns, systems, and customer journeys."],
  ["04", "Measure and improve", "We review useful signals, learn from real responses, and refine what happens next."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title"><span>Grow your business with</span> <em>AI-powered</em> <span>digital marketing.</span></h1>
            <p className="hero-intro">I help small and medium-sized businesses attract the right customers, generate qualified leads, and turn marketing activity into sales—with strategy and AI tools shaped around the way your business actually works.</p>
            <div className="button-row">
              <Link className="button" href={consultationHref()}>Book a Free Consultation <ArrowRight size={18} /></Link>
              <Link className="button button-secondary" href="/services">Explore My Services</Link>
            </div>
            <ul className="trust-list" aria-label="What to expect">
              <li><Check size={16} /> Personalized recommendations</li>
              <li><Check size={16} /> Practical next steps</li>
              <li><Check size={16} /> No inflated promises</li>
            </ul>
          </div>
          <ProfileVisual />
        </div>
        <div className="container hero-note"><span>Strategy before software.</span><p>AI has the most value when it supports a clear customer journey and a well-understood business goal.</p></div>
      </section>

      <section className="section challenge-section">
        <div className="container split-heading">
          <div><p className="eyebrow">The familiar situation</p><h2>Good businesses often get stuck with disconnected marketing.</h2></div>
          <p>You may be doing plenty—posting, emailing, updating a website, testing tools—without a clear view of what should work together or what deserves attention first.</p>
        </div>
        <div className="container challenge-grid">{challenges.map(({ icon: Icon, text }) => <div className="challenge-card" key={text}><Icon /><p>{text}</p></div>)}</div>
      </section>

      <section className="section services-preview">
        <div className="container section-heading-row"><div><p className="eyebrow">Ways I can help</p><h2>Focused support from strategy to implementation.</h2></div><Link className="text-link" href="/services">View all services <ArrowRight size={18} /></Link></div>
        <div className="container service-preview-grid">{services.slice(0, 4).map(({ icon: Icon, title, short, slug }, index) => <Link href={`/services#${slug}`} className="service-preview-card" key={slug}><span className="service-index">0{index + 1}</span><Icon className="service-icon" /><h3>{title}</h3><p>{short}</p><span className="card-link">See what’s included <ArrowRight size={16} /></span></Link>)}</div>
      </section>

      <section className="section intro-section">
        <div className="container intro-grid">
          <div className="statement-card"><span className="quote-mark">“</span><p>Useful marketing is not about doing everything. It is about doing the right work in the right order.</p></div>
          <div><p className="eyebrow">A practical partner</p><h2>Technology is part of the solution. Understanding your business comes first.</h2><p>I combine AI tools with sound digital marketing fundamentals. That means learning how your customers decide, identifying the real constraint, and designing a manageable path forward.</p><p>No one-size-fits-all playbooks or trend chasing—just clear thinking, useful implementation, and progress you can examine.</p><Link className="text-link" href="/about">More about my approach <ArrowRight size={18} /></Link></div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container"><p className="eyebrow">What working together adds</p><h2>A clearer marketing system, built to fit.</h2></div>
        <div className="container benefit-grid">
          <article><Target /><h3>Personalized strategy</h3><p>Priorities reflect your goals, audience, offer, budget, and capacity—not a generic checklist.</p></article>
          <article><Sparkles /><h3>Practical AI implementation</h3><p>Tools are selected for specific work and introduced with sensible human review.</p></article>
          <article><Gauge /><h3>Efficient workflows</h3><p>Repeatable processes reduce avoidable admin and help your team stay consistent.</p></article>
          <article><MessageSquareText /><h3>Measurable progress</h3><p>Simple indicators and regular review turn activity into useful decisions.</p></article>
        </div>
      </section>

      <section className="section process-section">
        <div className="container process-layout"><div className="process-heading"><p className="eyebrow light">How it works</p><h2>From scattered activity to a focused growth rhythm.</h2><p>A straightforward process keeps the strategy grounded and turns learning into the next practical action.</p></div><ol className="process-list">{process.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div>
      </section>

      <section className="section consultation-section">
        <div className="container consultation-layout"><div><p className="eyebrow">Start with clarity</p><h2>Your free consultation is a working session, not a generic sales pitch.</h2><p>{siteConfig.consultationOffer}</p><Link className="button" href={consultationHref()}>Book a Free Consultation <ArrowRight size={18} /></Link></div><div className="consultation-list"><p>You’ll leave with:</p><ul><li><Check /> A clearer view of your most useful growth opportunities</li><li><Check /> Priorities based on your current situation and resources</li><li><Check /> Practical recommendations you can act on</li><li><Check /> A sensible next step, whether or not we work together</li></ul></div></div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout"><div><p className="eyebrow">Questions, answered</p><h2>What business owners usually want to know.</h2><p>If your question is not covered, send it through the contact page. Clear questions are always welcome.</p></div><FaqList /></div>
      </section>
      <div className="container cta-wrap"><ConsultationCta /></div>
    </>
  );
}
