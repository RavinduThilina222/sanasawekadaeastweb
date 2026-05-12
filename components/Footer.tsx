"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";

import { getContent, type SiteLanguage } from "@/src/constants/content";

export default function Footer() {
  const searchParams = useSearchParams();
  const language = (searchParams.get("lang") as SiteLanguage | null) === "en" ? "en" : "si";
  const content = getContent(language);
  const languageQuery = language === "en" ? "?lang=en" : "";

  const footerLinks = [
    { href: "/", label: content.nav.home },
    { href: "/about", label: content.nav.about },
    { href: "/services", label: content.nav.services },
    { href: "/news", label: content.nav.news },
    { href: "/contact", label: content.nav.contact },
  ];

  return (
    <footer className="mt-16 border-t border-blue-950/10 bg-[#0f1f4a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-white">{content.brand.fullName}</p>
          <p className="max-w-xl text-sm leading-7 text-blue-100/90">{content.footer.description}</p>
          <div className="grid gap-2 text-sm text-blue-100/90">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+94 38 224 0006</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@wekadaeast.lk</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Wekada East, Sri Lanka</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex flex-wrap gap-4 text-sm font-medium text-blue-50">
            {footerLinks.map((item) => (
              <Link key={item.href} href={`${item.href}${languageQuery}`} className="hover:text-[#f5c84c]">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-blue-100/80">
            © {new Date().getFullYear()} {content.brand.name}. {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}