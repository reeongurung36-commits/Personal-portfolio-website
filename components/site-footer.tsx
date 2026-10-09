import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { isConfigured, navigation, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const visibleSocials = siteConfig.socialLinks.filter((item) => isConfigured(item.href));
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true"><Sparkles size={18} /></span>
            <span className="brand-copy"><b>{siteConfig.shortBrand}</b><small>{siteConfig.brandStatement}</small></span>
          </Link>
          <p className="footer-copy">Practical AI-powered marketing for small and medium-sized businesses ready to grow with greater clarity.</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        </div>
        <div>
          <p className="footer-label">Connect</p>
          <div className="footer-links">
            {isConfigured(siteConfig.email) ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : <Link href="/contact">Send an enquiry</Link>}
            {visibleSocials.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label} <ArrowUpRight size={14} /></a>)}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</span>
        <span>{siteConfig.location}</span>
      </div>
    </footer>
  );
}
