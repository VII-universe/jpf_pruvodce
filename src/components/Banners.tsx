"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, X, Phone, Download, Award, TrendingUp, Users, Clock, CheckCircle2 } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────
   LEADERBOARD — full-width between sections, prominent gold design
───────────────────────────────────────────────────────────────────── */
export function BannerLeaderboard() {
  return (
    <div className="relative overflow-hidden rounded-2xl" style={{ background: "linear-gradient(135deg, #1A1200 0%, #0F0B00 40%, #0A0D18 100%)", border: "1px solid rgba(201,168,76,0.35)" }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 100% at 15% 50%, rgba(201,168,76,0.12) 0%, transparent 60%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.6), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 px-7 py-6">
        {/* Label + icon */}
        <div className="flex items-center gap-4 lg:shrink-0">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #C9A84C, #8A6820)", boxShadow: "0 0 24px rgba(201,168,76,0.3)" }}>
            <Phone size={20} className="text-white" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-0.5" style={{ color: "rgba(201,168,76,0.5)" }}>Inzerce</span>
            <p className="text-base font-bold leading-tight" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
              Doporučený poskytovatel interim managementu
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px self-stretch shrink-0" style={{ background: "rgba(201,168,76,0.15)" }} />

        {/* Text */}
        <div className="flex-1">
          <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.75)" }}>
            Tým senior interim manažerů specializovaný na střední firmy.{" "}
            <strong style={{ color: "#E4C76B" }}>Bezplatná 30minutová konzultace</strong> — dostanete konkrétní pohled na vaši situaci, bez závazku.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
          <Link
            href="/diagnostika"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl whitespace-nowrap transition-all hover:shadow-[0_0_24px_rgba(201,168,76,0.4)]"
            style={{ background: "linear-gradient(135deg, #C9A84C, #8A6820)", color: "#fff" }}
          >
            Zarezervovat konzultaci <ArrowRight size={14} />
          </Link>
          <Link
            href="/porovnani"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl whitespace-nowrap"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(241,245,249,0.65)" }}
          >
            Porovnat poskytovatele
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   IN-FEED — appears between article cards in magazine grid
───────────────────────────────────────────────────────────────────── */
export function BannerInFeed() {
  return (
    <div className="relative overflow-hidden rounded-2xl flex flex-col" style={{ background: "linear-gradient(145deg, rgba(201,168,76,0.1), rgba(201,168,76,0.04) 50%, rgba(59,130,246,0.04))", border: "1px solid rgba(201,168,76,0.25)", minHeight: 280 }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)" }} />

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-md" style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.25)" }}>
            Placená spolupráce
          </span>
        </div>

        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #C9A84C, #8A6820)" }}>
          <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>IM</span>
        </div>

        <h3 className="text-base font-bold mb-2 leading-snug" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
          Hledáte interim manažera s týmovým zázemím?
        </h3>
        <p className="text-xs leading-relaxed flex-1 mb-5" style={{ color: "rgba(148,163,184,0.6)" }}>
          Specializovaná agentura se zaměřením na SME. Zastupitelnost, smluvní KPI a procesní metodika jako standard.
        </p>

        {/* Mini stats */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[{ v: "91/100", l: "hodnocení" }, { v: "#1", l: "v žebříčku" }].map(({ v, l }) => (
            <div key={l} className="text-center py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-sm font-bold" style={{ color: "#C9A84C", fontFamily: "var(--font-heading)" }}>{v}</div>
              <div className="text-[10px]" style={{ color: "rgba(148,163,184,0.4)" }}>{l}</div>
            </div>
          ))}
        </div>

        <Link
          href="/diagnostika"
          className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all hover:shadow-[0_0_16px_rgba(201,168,76,0.25)]"
          style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)", color: "#fff" }}
        >
          Bezplatná konzultace <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SIDEBAR BANNER — sticky in article reader
───────────────────────────────────────────────────────────────────── */
export function BannerSidebar() {
  return (
    <div className="space-y-4">
      {/* Consultation */}
      <div className="relative overflow-hidden rounded-2xl" style={{ background: "linear-gradient(145deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03))", border: "1px solid rgba(201,168,76,0.25)" }}>
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)" }} />
        <div className="p-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] block mb-3" style={{ color: "rgba(201,168,76,0.5)" }}>Inzerce</span>
          <h4 className="text-sm font-bold mb-2 leading-snug" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
            Bezplatná konzultace pro majitele firem
          </h4>
          <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(148,163,184,0.55)" }}>
            30 minut se senior interim manažerem. Konkrétní pohled na vaši situaci — bez závazku.
          </p>
          <ul className="space-y-1.5 mb-4">
            {["Analýza vaší situace", "Doporučení typu angažmá", "Bez prodejního tlaku"].map(item => (
              <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "rgba(148,163,184,0.6)" }}>
                <CheckCircle2 size={11} style={{ color: "#C9A84C", flexShrink: 0 }} /> {item}
              </li>
            ))}
          </ul>
          <Link
            href="/diagnostika"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl transition-all hover:shadow-[0_0_16px_rgba(201,168,76,0.25)]"
            style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)", color: "#fff" }}
          >
            <Phone size={11} /> Zarezervovat čas
          </Link>
        </div>
      </div>

      {/* Report download */}
      <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] block mb-3" style={{ color: "rgba(148,163,184,0.3)" }}>Ke stažení</span>
        <h4 className="text-sm font-bold mb-2 leading-snug" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
          Průvodce výběrem interim manažera
        </h4>
        <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(148,163,184,0.45)" }}>
          Checklist 6 otázek · KPI šablony · Red flags
        </p>
        <Link
          href="/jak-vybirat"
          className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold rounded-xl transition-all"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(241,245,249,0.7)" }}
        >
          <span className="flex items-center gap-1.5"><Download size={11} /> Stáhnout zdarma</span>
          <ArrowRight size={11} />
        </Link>
      </div>

      {/* Ranking teaser */}
      <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] block mb-3" style={{ color: "rgba(148,163,184,0.25)" }}>Srovnání</span>
        <h4 className="text-sm font-bold mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)", color: "#E2E8F0" }}>
          Žebříček poskytovatelů
        </h4>
        <div className="space-y-2 mb-4">
          {[{ n: "#1 IM agentura", s: 91, c: "#C9A84C" }, { n: "#2 Freelancer", s: 42, c: "#F87171" }, { n: "#3 Poradce", s: 38, c: "#FBBF24" }].map(({ n, s, c }) => (
            <div key={n} className="flex items-center gap-2">
              <span className="text-[10px] w-28 shrink-0" style={{ color: "rgba(148,163,184,0.5)" }}>{n}</span>
              <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div style={{ width: `${s}%`, height: "100%", background: c, borderRadius: "9999px" }} />
              </div>
              <span className="text-[10px] font-bold w-5 text-right" style={{ color: c }}>{s}</span>
            </div>
          ))}
        </div>
        <Link href="/porovnani" className="text-xs font-semibold flex items-center gap-1 transition-colors hover:text-[#E4C76B]" style={{ color: "#C9A84C" }}>
          Celé srovnání <ArrowRight size={11} />
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   POST-ARTICLE — large banner after article content
───────────────────────────────────────────────────────────────────── */
export function BannerPostArticle() {
  return (
    <div className="relative overflow-hidden rounded-3xl my-10" style={{ background: "linear-gradient(135deg, #120E00 0%, #0A0D1A 100%)", border: "1px solid rgba(201,168,76,0.3)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 120% at 10% 50%, rgba(201,168,76,0.1) 0%, transparent 55%)" }} />
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)" }} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 items-center gap-0">
        {/* Left */}
        <div className="lg:col-span-3 p-8 lg:p-10">
          <div className="flex items-center gap-2 mb-4">
            <Award size={14} style={{ color: "#C9A84C" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(201,168,76,0.6)" }}>Doporučený partner · Inzerce</span>
          </div>
          <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
            Hledáte interim manažera, který skutečně nese zodpovědnost?
          </h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(148,163,184,0.65)" }}>
            Náš doporučený partner se zaměřuje na střední firmy. Tým senior manažerů, zastupitelnost, smluvní KPI. Prvních 30 minut konzultace zdarma.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/diagnostika"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all hover:shadow-[0_0_24px_rgba(201,168,76,0.35)]"
              style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)", color: "#fff" }}
            >
              <Phone size={14} /> Bezplatná konzultace
            </Link>
            <Link
              href="/porovnani"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(241,245,249,0.6)" }}
            >
              Porovnat poskytovatele
            </Link>
          </div>
        </div>

        {/* Right: stats */}
        <div className="lg:col-span-2 p-8 lg:p-10 grid grid-cols-2 gap-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
          {[
            { icon: TrendingUp, v: "91/100",  l: "skóre v žebříčku" },
            { icon: Clock,      v: "90 dní",  l: "do prvních výsledků" },
            { icon: Users,      v: "SME",     l: "specializace" },
            { icon: Award,      v: "3–8×",    l: "návratnost investice" },
          ].map(({ icon: Icon, v, l }) => (
            <div key={l} className="rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Icon size={14} className="mx-auto mb-1.5" style={{ color: "rgba(201,168,76,0.5)" }} />
              <div className="text-base font-bold" style={{ fontFamily: "var(--font-heading)", color: "#C9A84C" }}>{v}</div>
              <div className="text-[10px] mt-0.5" style={{ color: "rgba(148,163,184,0.4)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   STICKY BOTTOM — dismissible bar, appears after 3s
───────────────────────────────────────────────────────────────────── */
export function BannerStickyBottom() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!sessionStorage.getItem("banner-dismissed")) setVisible(true);
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setDismissed(true);
    sessionStorage.setItem("banner-dismissed", "1");
  }

  if (dismissed || !visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 transition-transform duration-500"
      style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
    >
      <div className="relative" style={{ background: "linear-gradient(to right, #120E00, #0A0D1A)", borderTop: "1px solid rgba(201,168,76,0.35)" }}>
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.6), transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 lg:px-10 py-3.5 flex items-center gap-4 flex-wrap">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)" }}>
            <span className="text-white font-bold text-[10px]" style={{ fontFamily: "var(--font-heading)" }}>IM</span>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-widest mr-2" style={{ color: "rgba(201,168,76,0.5)" }}>Inzerce</span>
            <span className="text-xs font-semibold" style={{ color: "#F1F5F9" }}>Bezplatná konzultace —</span>
            <span className="text-xs ml-1" style={{ color: "rgba(148,163,184,0.6)" }}>30 minut se senior interim manažerem. Bez závazku.</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/diagnostika"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all hover:shadow-[0_0_16px_rgba(201,168,76,0.3)]"
              style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)", color: "#fff" }}
            >
              Zarezervovat <ArrowRight size={11} />
            </Link>
            <button onClick={dismiss} className="p-1.5 rounded-lg transition-colors" style={{ color: "rgba(148,163,184,0.4)" }}
              aria-label="Zavřít">
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   STRIP — compact inline strip (kept for compatibility)
───────────────────────────────────────────────────────────────────── */
export function BannerStrip() {
  return (
    <div className="relative overflow-hidden rounded-xl" style={{ background: "linear-gradient(to right, rgba(201,168,76,0.1), rgba(201,168,76,0.04))", border: "1px solid rgba(201,168,76,0.2)" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)" }} />
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 px-5 py-4">
        <div className="shrink-0 flex items-center gap-2">
          <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)" }}>
            <span className="text-white font-bold text-[9px]" style={{ fontFamily: "var(--font-heading)" }}>IM</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(201,168,76,0.55)" }}>Inzerce</span>
        </div>
        <p className="text-xs flex-1" style={{ color: "rgba(148,163,184,0.65)" }}>
          <strong style={{ color: "rgba(241,245,249,0.85)" }}>Bezplatná 30min konzultace</strong>{" "}
          — senior manažer zhodnotí vaši situaci a doporučí konkrétní postup.
        </p>
        <Link
          href="/diagnostika"
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all hover:shadow-[0_0_14px_rgba(201,168,76,0.25)] whitespace-nowrap"
          style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)", color: "#fff" }}
        >
          Zarezervovat <ArrowRight size={10} />
        </Link>
      </div>
    </div>
  );
}

/* Legacy compat */
export function BannerConsultation({ variant = "inline" }: { variant?: "inline" | "sidebar" }) {
  if (variant === "sidebar") return <BannerSidebar />;
  return <BannerPostArticle />;
}
export function BannerReport({ variant = "inline" }: { variant?: "inline" | "sidebar" }) {
  if (variant === "sidebar") return null;
  return (
    <div className="rounded-2xl overflow-hidden my-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.06)" }}>
          <Download size={18} style={{ color: "rgba(148,163,184,0.5)" }} />
        </div>
        <div className="flex-1">
          <span className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: "rgba(148,163,184,0.3)" }}>Volně ke stažení</span>
          <p className="text-sm font-semibold mb-0.5" style={{ color: "#F1F5F9", fontFamily: "var(--font-heading)" }}>Průvodce výběrem interim manažera — checklist v PDF</p>
          <p className="text-xs" style={{ color: "rgba(148,163,184,0.4)" }}>6 otázek · KPI šablony · Red flags checklist</p>
        </div>
        <Link href="/jak-vybirat" className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "#E2E8F0" }}>
          <Download size={12} /> Stáhnout zdarma
        </Link>
      </div>
    </div>
  );
}
export function BannerPartner() {
  return <BannerLeaderboard />;
}
