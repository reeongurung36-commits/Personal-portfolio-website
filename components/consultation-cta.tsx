import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { consultationHref, siteConfig } from "@/lib/site-config";

export function ConsultationCta({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "cta-band compact" : "cta-band"} aria-labelledby="consultation-heading">
      <div className="cta-orb" aria-hidden="true"><CalendarCheck /></div>
      <div>
        <p className="eyebrow light">Your next practical step</p>
        <h2 id="consultation-heading">Turn marketing questions into a clear action plan.</h2>
        <p>{siteConfig.consultationOffer}</p>
      </div>
      <Link className="button button-light" href={consultationHref()}>
        Book a Free Consultation <ArrowRight size={18} />
      </Link>
    </section>
  );
}
