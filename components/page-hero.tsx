import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { consultationHref } from "@/lib/site-config";

export function PageHero({ eyebrow, title, intro, action = true }: { eyebrow: string; title: string; intro: string; action?: boolean }) {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-intro">{intro}</p>
        {action && <Link className="text-link" href={consultationHref()}>Book a Free Consultation <ArrowRight size={18} /></Link>}
      </div>
    </section>
  );
}
