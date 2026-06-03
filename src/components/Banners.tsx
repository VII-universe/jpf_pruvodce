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
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-1" style={{ color: "rgba(var(--accent-rgb),0.45)" }}>
          Partnerský obsah
        </span>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
          <strong style={{ color: "var(--text-1)", fontFamily: "var(--font-heading)" }}>Bezplatná konzultace pro majitele firem</strong>
          {" "}— senior interim manažer zhodnotí vaši situaci a doporučí konkrétní postup.
        </p>
      </div>

      <Link
        href="/diagnostika"
        className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 whitespace-nowrap"
        style={{
          background: "linear-gradient(135deg, var(--accent), var(--accent-dark))",
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
        background: "var(--bg)",
        border: "1px solid rgba(201,168,76,0.18)",
      }}
    >
      {/* Gold top line */}
      <div style={{ height: 2, background: "linear-gradient(to right, transparent, #C9A84C 40%, transparent)" }} />

      <div className="p-5">
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-dark))" }}
          >
            <span className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-heading)" }}>IM</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "rgba(var(--accent-rgb),0.5)" }}>
            Doporučený partner
          </span>
        </div>

        <h4 className="text-sm font-bold mb-2 leading-snug" style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>
          Hledáte interim manažera s týmovým zázemím?
        </h4>
        <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--text-2)" }}>
          Specializace na střední firmy. Smluvní KPI, zastupitelnost a měřitelné výsledky.
        </p>

        <Link
          href="/diagnostika"
          className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 w-full"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent-dark))",
            color: "#fff",
            boxShadow: "0 2px 16px rgba(201,168,76,0.2)",
          }}
        >
          <Phone size={11} /> Bezplatná konzultace
        </Link>

        <Link
          href="/porovnani"
          className="flex items-center justify-center gap-1 mt-2.5 text-xs transition-colors hover:text-[#C9A84C]"
          style={{ color: "var(--text-3)" }}
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
          background: "var(--nav-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-3.5 flex items-center gap-4 flex-wrap lg:flex-nowrap">
          {/* Logo */}
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-dark))" }}
          >
            <span className="text-white font-bold text-[10px]" style={{ fontFamily: "var(--font-heading)" }}>IM</span>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0 flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] shrink-0" style={{ color: "rgba(var(--accent-rgb),0.5)" }}>
              Partnerský obsah
            </span>
            <span className="text-xs" style={{ color: "var(--text-2)" }}>
              Bezplatná 30min konzultace — senior interim manažer zhodnotí vaši situaci.
            </span>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <Link
              href="/diagnostika"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                color: "#fff",
                boxShadow: "0 2px 12px rgba(201,168,76,0.25)",
              }}
            >
              Zarezervovat <ArrowRight size={11} />
            </Link>
            <button
              onClick={dismiss}
              className="p-1.5 rounded-lg transition-colors"
              style={{ color: "var(--text-3)" }}
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
   4. LEADERBOARD — větší, plnohodnotná reklamní plocha s metrikami
   Používá se: homepage (sekce), diagnostika, jak-vybirat, porovnani, magazin
───────────────────────────────────────────────────────────────────── */
export function BannerLeaderboard() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: "var(--bg)",
        border: "1px solid rgba(201,168,76,0.2)",
      }}
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 100% at 0% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4) 40%, rgba(201,168,76,0.4) 60%, transparent)" }} />

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 px-5 py-5 sm:px-7 sm:py-6 lg:px-8 lg:py-7">
        {/* Left */}
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-dark))", boxShadow: "0 0 20px rgba(201,168,76,0.25)" }}>
            <span className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-heading)" }}>IM</span>
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-1" style={{ color: "rgba(var(--accent-rgb),0.45)" }}>
              Doporučený partner · Inzerce
            </span>
            <p className="text-sm font-semibold leading-snug mb-1" style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>
              Senior interim management pro střední firmy — s týmovým zázemím a smluvními KPI
            </p>
            <p className="text-xs hidden sm:block" style={{ color: "var(--text-3)" }}>
              Zastupitelnost · Procesní standardizace · Měřitelné výsledky
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-row sm:flex-col gap-2.5 sm:min-w-[148px] w-full sm:w-auto">
          <Link
            href="/diagnostika"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all duration-200"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-dark))", color: "#fff", boxShadow: "0 2px 14px rgba(201,168,76,0.22)" }}
          >
            Konzultace <ArrowRight size={11} />
          </Link>
          <Link
            href="/porovnani"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all duration-200"
            style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text-2)" }}
          >
            Porovnat
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Legacy aliases — zachování kompatibility s existujícími importy
───────────────────────────────────────────────────────────────────── */
export function BannerInFeed() { return <BannerSidebar />; }
export function BannerPostArticle() { return <BannerStrip />; }
export function BannerConsultation({ variant = "inline" }: { variant?: "inline" | "sidebar" }) {
  if (variant === "sidebar") return <BannerSidebar />;
  return <BannerStrip />;
}
export function BannerReport() { return null; }
export function BannerPartner() { return <BannerLeaderboard />; }
