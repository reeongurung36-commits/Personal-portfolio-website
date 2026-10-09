"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { consultationHref, navigation, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Go to homepage" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><Sparkles size={18} /></span>
          <span><b>{siteConfig.shortBrand}</b><small>AI marketing, made practical</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-small header-cta" href={consultationHref()}>
          Book a Free Consultation
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`}>
        <nav className="container" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
          <Link className="button" href={consultationHref()} onClick={() => setOpen(false)}>Book a Free Consultation</Link>
        </nav>
      </div>
    </header>
  );
}
