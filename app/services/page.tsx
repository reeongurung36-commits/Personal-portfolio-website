import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, CircleDot } from "lucide-react";
import { ConsultationCta } from "@/components/consultation-cta";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/content";
import { consultationHref } from "@/lib/site-config";

export const metadata: Metadata = { title: "Services", description: "Explore AI-powered digital marketing strategy, SEO, content, advertising, automation, lead generation, and AI workflow consulting." };

export default function ServicesPage() {
  const consult = consultationHref();
  return <>
    <PageHero eyebrow="Services" title="The right marketing support for the stage your business is in." intro="Choose a focused project or combine services into a customized plan. Every engagement begins with your goals, audience, budget, and ability to implement." />
    <section className="section service-directory"><div className="container services-grid">{services.map(({ icon: Icon, title, short, includes, challenge, benefits, suitableFor, slug }, index) => <article className="service-detail" id={slug} key={slug}>
      <div className="service-detail-head"><div className="service-number">{String(index + 1).padStart(2, "0")}</div><Icon /></div>
      <h2>{title}</h2><p className="service-lead">{short}</p>
      <div className="service-info"><div><h3><CircleDot /> The challenge</h3><p>{challenge}</p></div><div><h3><CircleDot /> Intended benefit</h3><p>{benefits}</p></div><div><h3><CircleDot /> Best suited for</h3><p>{suitableFor}</p></div></div>
      <div className="included"><h3>What it can include</h3><ul>{includes.map((item) => <li key={item}><Check /> {item}</li>)}</ul></div>
      <Link className="text-link" href={`${consult}${consult.includes("?") ? "&" : "?"}service=${slug}`}>Discuss this service <ArrowRight size={18} /></Link>
    </article>)}</div></section>
    <section className="section plan-note"><div className="container plan-note-inner"><div><p className="eyebrow light">No fixed package required</p><h2>Your plan should reflect the problem—not force the problem into a package.</h2></div><p>We can begin with a focused priority, combine connected services, or build a phased roadmap. Scope and recommendations are discussed after understanding your business; no invented prices or unnecessary deliverables.</p></div></section>
    <div className="container cta-wrap"><ConsultationCta /></div>
  </>;
}
