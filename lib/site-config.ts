export const siteConfig = {
  name: "[YOUR NAME]",
  brandName: "[YOUR BRAND NAME]",
  shortBrand: "AI Growth Studio",
  location: "[YOUR LOCATION / REMOTE]",
  email: "[YOUR BUSINESS EMAIL]",
  phone: "[YOUR PHONE NUMBER, OPTIONAL]",
  bookingUrl: "[YOUR BOOKING LINK]",
  linkedin: "[YOUR LINKEDIN URL]",
  socialLinks: [
    { label: "LinkedIn", href: "[YOUR LINKEDIN URL]" },
    { label: "Other social profile", href: "[YOUR SOCIAL LINKS]" },
  ],
  profilePhoto: "[PHOTO FILE OR URL]",
  colors: {
    ink: "#10221d",
    accent: "#e7683f",
    sage: "#dce8df",
    cream: "#f7f3eb",
  },
  siteUrl: "https://ai-marketing-growth-20261009.amusedflute.chatgpt.site",
  consultationOffer:
    "Book a free consultation where I’ll analyze your business, identify opportunities for growth, and create a customized digital marketing plan you can start implementing immediately.",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export function isConfigured(value: string) {
  return !value.startsWith("[") && !value.endsWith("]");
}

export function consultationHref() {
  return isConfigured(siteConfig.bookingUrl)
    ? siteConfig.bookingUrl
    : "/contact?intent=consultation";
}
