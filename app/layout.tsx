import type { Metadata } from "next";
import { Allura, Bodoni_Moda, Cinzel, Cormorant_Garamond, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isConfigured, siteConfig } from "@/lib/site-config";
import "./globals.css";

const grandeur = Bodoni_Moda({ subsets: ["latin"], variable: "--font-grandeur", display: "swap" });
const blush = Allura({ subsets: ["latin"], weight: "400", variable: "--font-blush", display: "swap" });
const elegant = Cinzel({ subsets: ["latin"], variable: "--font-elegant", display: "swap" });
const paladio = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-paladio", display: "swap" });
const safira = Source_Serif_4({ subsets: ["latin"], variable: "--font-safira", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: `${siteConfig.shortBrand} | AI-Powered Digital Marketing`, template: `%s | ${siteConfig.shortBrand}` },
  description: "Practical AI-powered digital marketing strategy, implementation, and optimization for small and medium-sized businesses.",
  openGraph: { title: `${siteConfig.shortBrand} | AI-Powered Digital Marketing`, description: "A practical, personalized approach to better visibility, qualified leads, and more effective marketing workflows.", type: "website", url: siteConfig.siteUrl, siteName: siteConfig.shortBrand },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const serviceSchema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: siteConfig.brandName, url: siteConfig.siteUrl, description: "AI-powered digital marketing services for small and medium-sized businesses." };
  return (
    <html lang="en" className={`${grandeur.variable} ${blush.variable} ${elegant.variable} ${paladio.variable} ${safira.variable}`}>
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
