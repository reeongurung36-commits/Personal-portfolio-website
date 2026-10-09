import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import { ConsultationCta } from "@/components/consultation-cta";
import { articles, formatArticleDate } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.summary, openGraph: { title: article.title, description: article.summary, type: "article", publishedTime: article.publishedAt } };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);
  return <>
    <article className="article-page">
      <header className="article-header"><div className="container article-header-inner"><Link className="back-link" href="/blog"><ArrowLeft /> All articles</Link><p className="eyebrow light">{article.kicker}</p><h1>{article.title}</h1><p className="article-deck">{article.summary}</p><div className="article-byline"><span><CalendarDays /> {formatArticleDate(article.publishedAt)}</span><span><Clock3 /> {article.readingTime}</span><span className="article-category">{article.category}</span></div></div></header>
      <div className="container article-layout"><aside className="article-aside"><p>In this guide</p><nav aria-label="Article sections">{article.blocks.filter((block) => block.type === "h2").map((block) => block.type === "h2" && <a key={block.text} href={`#${block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}>{block.text}</a>)}</nav></aside>
        <div className="article-content">{article.blocks.map((block, index) => {
          if (block.type === "p") return <p key={index}>{block.text}</p>;
          if (block.type === "h2") return <h2 id={block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")} key={index}>{block.text}</h2>;
          if (block.type === "h3") return <h3 key={index}>{block.text}</h3>;
          if (block.type === "ul") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
          if (block.type === "ol") return <ol key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ol>;
          return <aside className="article-callout" key={index}><strong>{block.title}</strong><p>{block.text}</p></aside>;
        })}<ConsultationCta compact /></div>
      </div>
    </article>
    <section className="section related-section"><div className="container"><div className="section-heading-row"><div><p className="eyebrow">Keep exploring</p><h2>Related practical guides.</h2></div><Link className="text-link" href="/blog">View all articles <ArrowRight /></Link></div><div className="related-grid">{related.map((item) => <article key={item.slug}><p>{item.category}</p><h3><Link href={`/blog/${item.slug}`}>{item.title}</Link></h3><span>{item.readingTime}</span></article>)}</div></div></section>
  </>;
}
