"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Languages, Moon, Sun } from "lucide-react";

import { getContent, type SiteLanguage } from "@/src/constants/content";

type ThemeMode = "light" | "dark";

function getThemePreference(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const language = (searchParams.get("lang") as SiteLanguage | null) === "en" ? "en" : "si";
  const content = useMemo(() => getContent(language), [language]);
  const languageQuery = language === "en" ? "?lang=en" : "";
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const preferredTheme = getThemePreference();
    setTheme(preferredTheme);
    document.documentElement.classList.toggle("dark", preferredTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
  };

  const navItems = [
    { href: "/", label: content.nav.home },
    { href: "/about", label: content.nav.about },
    { href: "/services", label: content.nav.services },
    { href: "/news", label: content.nav.news },
    { href: "/contact", label: content.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-blue-900/20 bg-[#1e3a8a]/95 text-white shadow-lg shadow-blue-950/10 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={`/${languageQuery}`} className="flex items-center gap-3 leading-none">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
            <Image src="/sanasa-logo.png" alt="Sanasa logo" width={36} height={36} priority />
          </span>
          <span className="flex flex-col gap-0.5">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-[#f5c84c]">
              {content.brand.tagline}
            </span>
            <span className="text-lg font-semibold text-white sm:text-xl">{content.brand.name}</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-blue-50">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={`${item.href}${languageQuery}`} className="transition-colors hover:text-[#f5c84c]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={`${pathname}?lang=${language === "en" ? "si" : "en"}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/15"
            aria-label="Toggle language"
          >
            <Languages className="h-4 w-4" />
            {language === "en" ? "සිංහල" : "English"}
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-full border border-[#f5c84c]/35 bg-[#f5c84c] px-3 py-2 text-[#1e3a8a] transition-transform hover:-translate-y-0.5 hover:bg-[#ffe08a]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Link
            href={`/contact${languageQuery}`}
            className="rounded-full bg-[#f5c84c] px-4 py-2 text-sm font-semibold text-[#1e3a8a] transition-transform hover:-translate-y-0.5 hover:bg-[#ffe08a]"
          >
            {content.nav.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}