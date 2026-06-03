import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BannerStickyBottom } from "@/components/Banners";

export const metadata: Metadata = {
  title: {
    default: "Interim Management CZ — Nezávislý průvodce pro majitele firem",
    template: "%s | Interim Management CZ",
  },
  description:
    "Nezávislý informační portál o interim managementu. Vzdělávejte se o tom, kdy a jak využít interim manažera, jak vybírat, a co odlišuje skutečného manažera od poradce.",
  keywords: ["interim management", "interim manažer", "krizové řízení", "transformace firmy", "management"],
  openGraph: {
    siteName: "Interim Management CZ",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="h-full antialiased">
      <body className="min-h-screen flex flex-col" style={{ background: "#07090F", color: "#F1F5F9" }}>
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <BannerStickyBottom />
      </body>
    </html>
  );
}
