import type { Metadata } from "next";
import { BlogExplorer } from "@/components/blog-explorer";
import { ConsultationCta } from "@/components/consultation-cta";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Blog", description: "Practical guides on AI marketing, digital strategy, automation, content, and lead generation for growing businesses." };

export default function BlogPage() {
  return <>
    <PageHero eyebrow="Insights" title="Marketing guidance you can put to work." intro="Clear, practical ideas for using AI responsibly, building stronger marketing foundations, and making follow-up more consistent." />
    <section className="section blog-index"><div className="container"><BlogExplorer /></div></section>
    <div className="container cta-wrap"><ConsultationCta compact /></div>
  </>;
}
