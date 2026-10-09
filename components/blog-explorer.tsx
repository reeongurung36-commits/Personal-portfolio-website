"use client";

import Link from "next/link";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { articleCategories, articles, formatArticleDate } from "@/lib/content";

export function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return articles.filter((article) => {
      const categoryMatch = category === "All" || article.category === category;
      const searchMatch = !normalized || `${article.title} ${article.summary} ${article.category}`.toLowerCase().includes(normalized);
      return categoryMatch && searchMatch;
    });
  }, [category, query]);

  return <>
    <div className="blog-tools" role="search">
      <label className="search-field"><span className="sr-only">Search articles</span><Search aria-hidden="true" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search practical marketing ideas…" /></label>
      <div className="category-filter" aria-label="Filter articles by category"><SlidersHorizontal aria-hidden="true" />{articleCategories.map((item) => <button type="button" aria-pressed={category === item} className={category === item ? "active" : ""} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div>
    </div>
    <div className="results-count" aria-live="polite">{results.length} {results.length === 1 ? "article" : "articles"}</div>
    {results.length ? <div className="article-grid">{results.map((article, index) => <article className={`article-card ${index === 0 ? "featured" : ""}`} key={article.slug}>
      <Link href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`} className="article-visual"><span>{article.category}</span><div className="visual-lines" aria-hidden="true"><i /><i /><i /></div></Link>
      <div className="article-card-body"><div className="article-meta"><span>{formatArticleDate(article.publishedAt)}</span><span>{article.readingTime}</span></div><h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2><p>{article.summary}</p><Link className="text-link" href={`/blog/${article.slug}`}>Read article <ArrowRight size={17} /></Link></div>
    </article>)}</div> : <div className="empty-state"><Search /><h2>No articles match those filters.</h2><p>Try a broader phrase, or choose “All” to see every article.</p><button type="button" className="button button-secondary" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button></div>}
  </>;
}
