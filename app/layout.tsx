import type { Metadata } from "next";
import { Abhaya_Libre, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya-libre",
  subsets: ["latin", "sinhala"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "වේකඩ නැගෙනහිර සණස සහයෝගිතා සමිතිය",
    template: "%s | වේකඩ නැගෙනහිර සණස",
  },
  description:
    "වේකඩ නැගෙනහිර සණස සහයෝගිතා සමිතියේ සේවා, පුවත්, සහ සාමාජික තොරතුරු.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="si" className={`${inter.variable} ${abhayaLibre.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
