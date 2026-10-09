import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isConfigured, siteConfig } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "AI-Powered Digital Marketing for Growing Businesses", template: `%s | ${siteConfig.shortBrand}` },
  description: "Practical AI-powered digital marketing strategy, implementation, and optimization for small and medium-sized businesses.",
  openGraph: { title: "Grow Your Business with AI-Powered Digital Marketing", description: "A practical, personalized approach to better visibility, qualified leads, and more effective marketing workflows.", type: "website", url: siteConfig.siteUrl, siteName: siteConfig.shortBrand },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const serviceSchema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: siteConfig.brandName, url: siteConfig.siteUrl, description: "AI-powered digital marketing services for small and medium-sized businesses." };
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        {isConfigured(siteConfig.brandName) && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />}
      </body>
    </html>
  );
}
