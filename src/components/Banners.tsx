"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, X, Phone } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────
   1. EDITORIAL STRIP — subtilní, inline mezi sekcemi
   Používá se: homepage (pod články), magazín (nad editorial note)
───────────────────────────────────────────────────────────────────── */
export function BannerStrip() {
  return (
    <div
      className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5 px-7 py-5 rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(to right, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 60%, transparent 100%)",
        border: "1px solid rgba(201,168,76,0.14)",
      }}
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full" style={{ background: "linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0.2))" }} />

      <div className="flex-1 pl-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-1" style={{ color: "rgba(201,168,76,0.45)" }}>
          Partnerský obsah
        </span>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(241,245,249,0.7)" }}>
          <strong style={{ color: "#F1F5F9", fontFamily: "var(--font-heading)" }}>Bezplatná konzultace pro majitele firem</strong>
          {" "}— senior interim manažer zhodnotí vaši situaci a doporučí konkrétní postup.
        </p>
      </div>

      <Link
        href="/diagnostika"
        className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 whitespace-nowrap"
        style={{
          background: "linear-gradient(135deg, #C9A84C, #8A6820)",
          color: "#fff",
          boxShadow: "0 2px 12px rgba(201,168,76,0.2)",
        }}
      >
        Zarezervovat <ArrowRight size={13} />
      </Link>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   2. SIDEBAR CARD — v článku, sticky pravý sloupec
   Používá se: article reader sidebar
───────────────────────────────────────────────────────────────────── */
export function BannerSidebar() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#0D1120",
        border: "1px solid rgba(201,168,76,0.18)",
      }}
    >
      {/* Gold top line */}
      <div style={{ height: 2, background: "linear-gradient(to right, transparent, #C9A84C 40%, transparent)" }} />

      <div className="p-5">
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #C9A84C, #8A6820)" }}
          >
            <span className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-heading)" }}>IM</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "rgba(201,168,76,0.5)" }}>
            Doporučený partner
          </span>
        </div>

        <h4 className="text-sm font-bold mb-2 leading-snug" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
          Hledáte interim manažera s týmovým zázemím?
        </h4>
        <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(148,163,184,0.55)" }}>
          Specializace na střední firmy. Smluvní KPI, zastupitelnost a měřitelné výsledky.
        </p>

        <Link
          href="/diagnostika"
          className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 w-full"
          style={{
            background: "linear-gradient(135deg, #C9A84C, #8A6820)",
            color: "#fff",
            boxShadow: "0 2px 16px rgba(201,168,76,0.2)",
          }}
        >
          <Phone size={11} /> Bezplatná konzultace
        </Link>

        <Link
          href="/porovnani"
          className="flex items-center justify-center gap-1 mt-2.5 text-xs transition-colors hover:text-[#C9A84C]"
          style={{ color: "rgba(148,163,184,0.35)" }}
        >
          Porovnat poskytovatele <ArrowRight size={10} />
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   3. STICKY BOTTOM — globální, dismissible po 5 sekundách
   Používá se: layout.tsx (všechny stránky)
───────────────────────────────────────────────────────────────────── */
export function BannerStickyBottom() {
  const [show, setShow] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("sticky-dismissed")) { setGone(true); return; }
    const t = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setShow(false);
    setTimeout(() => setGone(true), 300);
    sessionStorage.setItem("sticky-dismissed", "1");
  }

  if (gone) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 transition-transform duration-500 ease-out"
      style={{ transform: show ? "translateY(0)" : "translateY(100%)" }}
    >
      {/* Top gold line */}
      <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5) 40%, rgba(201,168,76,0.5) 60%, transparent)" }} />

      <div
        style={{
          background: "rgba(10,13,22,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-3.5 flex items-center gap-4 flex-wrap lg:flex-nowrap">
          {/* Logo */}
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #C9A84C, #8A6820)" }}
          >
            <span className="text-white font-bold text-[10px]" style={{ fontFamily: "var(--font-heading)" }}>IM</span>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0 flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] shrink-0" style={{ color: "rgba(201,168,76,0.5)" }}>
              Partnerský obsah
            </span>
            <span className="text-xs" style={{ color: "rgba(241,245,249,0.6)" }}>
              Bezplatná 30min konzultace — senior interim manažer zhodnotí vaši situaci.
            </span>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <Link
              href="/diagnostika"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #8A6820)",
                color: "#fff",
                boxShadow: "0 2px 12px rgba(201,168,76,0.25)",
              }}
            >
              Zarezervovat <ArrowRight size={11} />
            </Link>
            <button
              onClick={dismiss}
              className="p-1.5 rounded-lg transition-colors"
              style={{ color: "rgba(148,163,184,0.35)" }}
              aria-label="Zavřít"
            >
              <X size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Legacy aliases — zachování kompatibility s existujícími importy
───────────────────────────────────────────────────────────────────── */
export function BannerLeaderboard() { return <BannerStrip />; }
export function BannerInFeed() { return <BannerSidebar />; }
export function BannerPostArticle() { return <BannerStrip />; }
export function BannerConsultation({ variant = "inline" }: { variant?: "inline" | "sidebar" }) {
  if (variant === "sidebar") return <BannerSidebar />;
  return <BannerStrip />;
}
export function BannerReport() { return null; }
export function BannerPartner() { return <BannerStrip />; }
