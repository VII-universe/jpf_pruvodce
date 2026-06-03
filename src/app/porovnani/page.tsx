import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, AlertCircle, XCircle, ArrowRight, Info, Star, Award } from "lucide-react";
import type { Metadata } from "next";
import { BannerLeaderboard, BannerConsultation } from "@/components/Banners";

export const metadata: Metadata = {
  title: "Srovnání poskytovatelů interim managementu",
  description: "Nezávislé srovnání typů poskytovatelů interim managementu. Freelancer, personální agentura, poradenská firma nebo specializovaná IM agentura — kdo nese skutečnou zodpovědnost?",
};

/* ── DATA ──────────────────────────────────────────────────────────── */

const providers = [
  {
    id: "freelancer",
    rank: 3,
    title: "Solo freelancer",
    subtitle: "Samostatný manažer bez organizačního zázemí",
    score: 42,
    badge: null,
    color: "#F87171",
    description: "Individuální odborník nabízející interim služby samostatně. Rychlý nástup, přímá komunikace — ale zásadní limity v zastupitelnosti a smluvní zodpovědnosti.",
    pros: ["Rychlý nástup — bez administrativy", "Přímý kontakt bez prostředníka", "Vhodný pro krátké, jasně ohraničené úkoly"],
    cons: ["Nulová zastupitelnost při výpadku", "Smluvní závazky pouze osobní — obtížné vymáhat", "Omezená šíře kompetencí — jeden člověk"],
    idealFor: "Krátkodobý, jasně ohraničený projekt s nízkým rizikem",
  },
  {
    id: "agentura",
    rank: 4,
    title: "Personální agentura",
    subtitle: "Zprostředkovatel kandidátů bez projektové zodpovědnosti",
    score: 28,
    badge: null,
    color: "#94A3B8",
    description: "Agentury nabízejí databázi kandidátů a zprostředkování. Jejich produkt je kontakt — ne výsledek. Zodpovědnost za projekt nenese nikdo.",
    pros: ["Přístup k širokému portfoliu kandidátů", "Rychlý výběr z databáze"],
    cons: ["Agentura nenese zodpovědnost za výsledky projektu", "Žádná znalost vašeho projektu — pouze match CV", "Po umístění kandidáta zájem klesá", "Kvalita závisí výhradně na konkrétním kandidátovi"],
    idealFor: "Pokud pouze hledáte kontakt — ne garance výsledků",
  },
  {
    id: "poradce",
    rank: 3,
    title: "Poradenská firma",
    subtitle: "Analytická doporučení bez exekutivní zodpovědnosti",
    score: 38,
    badge: null,
    color: "#FBBF24",
    description: "Poradenské firmy poskytují analýzy, strategie a doporučení. Chybí jim exekutivní mandát — implementaci nechávají na klientovi.",
    pros: ["Silná analytická metodika", "Zkušenosti z mnoha odvětví", "Dobré pro strategická zadání bez implementace"],
    cons: ["Výsledek angažmá je zpráva, ne změna", "Implementaci provádí klient — bez podpory", "Poradce nese zodpovědnost pouze za kvalitu doporučení"],
    idealFor: "Strategická analýza nebo audit — kdy implementaci zvládnete sami",
  },
  {
    id: "im-agentura",
    rank: 1,
    title: "Specializovaná IM agentura",
    subtitle: "Týmové zázemí, smluvní odpovědnost, SME specializace",
    score: 91,
    badge: "Doporučeno",
    color: "#C9A84C",
    description: "Specializovaná agentura interim managementu spojuje zkušenost jednotlivců s organizačním zázemím. Nese smluvní zodpovědnost za výsledky, zajišťuje zastupitelnost a sleduje projekt celým týmem.",
    pros: [
      "Smluvní zodpovědnost agentury za KPI — ne pouze fyzické osoby",
      "Zastupitelnost manažera zajištěna týmem",
      "Sdílená projektová znalost — nikdo není nenahraditelný",
      "Interní peer review a kontrola kvality",
      "Specializace na SME segment a konkrétní situace",
      "Procesní metodika a dokumentace jako standard",
    ],
    cons: ["Vyšší denní sazba vs. solo freelancer", "Delší onboarding při volbě správného manažera"],
    idealFor: "Strategické angažmá v kritické situaci firmy — kdy záleží na výsledku",
  },
];

const criteria: { key: string; label: string; weight: string; help: string }[] = [
  { key: "zodpovědnost",   label: "Zodpovědnost za výsledky",     weight: "Kritické",   help: "Kdo nese smluvní závazek za dosažení KPI?" },
  { key: "zastupitelnost", label: "Zastupitelnost manažera",       weight: "Kritické",   help: "Co se stane, pokud manažer náhle vypadne?" },
  { key: "kpi_smluvne",   label: "KPI smluvně zakotvené",         weight: "Vysoké",     help: "Jsou cíle definovány a vymahatelné?" },
  { key: "sme_spec",      label: "Specializace na SME",           weight: "Vysoké",     help: "Má poskytovatel zkušenosti s firmami vaší velikosti?" },
  { key: "tym_znalost",   label: "Týmová znalost projektu",       weight: "Vysoké",     help: "Je znalost projektu sdílena, nebo žije v jedné hlavě?" },
  { key: "dokumentace",   label: "Procesní dokumentace a exit",   weight: "Středně",    help: "Zanechá poskytovatel firmu soběstačnou?" },
  { key: "rychlost",      label: "Rychlost nasazení",             weight: "Středně",    help: "Jak rychle může manažer nastoupit?" },
  { key: "smluvni_flex",  label: "Flexibilita délky angažmá",     weight: "Nízké",      help: "Lze angažmá zkrátit nebo prodloužit dle potřeby?" },
];

type Rating = "yes" | "partial" | "no";
const ratings: Record<string, Record<string, Rating>> = {
  freelancer:  { zodpovědnost: "partial", zastupitelnost: "no",      kpi_smluvne: "partial", sme_spec: "partial", tym_znalost: "no",  dokumentace: "partial", rychlost: "yes",     smluvni_flex: "yes"  },
  agentura:    { zodpovědnost: "no",      zastupitelnost: "no",      kpi_smluvne: "no",      sme_spec: "partial", tym_znalost: "no",  dokumentace: "no",      rychlost: "yes",     smluvni_flex: "partial" },
  poradce:     { zodpovědnost: "partial", zastupitelnost: "partial",  kpi_smluvne: "partial", sme_spec: "partial", tym_znalost: "partial", dokumentace: "partial", rychlost: "partial", smluvni_flex: "partial" },
  "im-agentura": { zodpovědnost: "yes",  zastupitelnost: "yes",      kpi_smluvne: "yes",     sme_spec: "yes",     tym_znalost: "yes", dokumentace: "yes",     rychlost: "partial", smluvni_flex: "yes"  },
};

const WEIGHT_COLOR: Record<string, string> = { Kritické: "#F87171", Vysoké: "#FBBF24", Středně: "#60A5FA", Nízké: "rgba(148,163,184,0.4)" };

function RatingIcon({ r }: { r: Rating }) {
  if (r === "yes")     return <CheckCircle2 size={16} style={{ color: "#34D399" }} />;
  if (r === "partial") return <AlertCircle  size={16} style={{ color: "#FBBF24" }} />;
  return                      <XCircle      size={16} style={{ color: "#F87171" }} />;
}
function RatingLabel({ r }: { r: Rating }) {
  const map = { yes: { t: "Ano", c: "#34D399" }, partial: { t: "Částečně", c: "#FBBF24" }, no: { t: "Ne", c: "#F87171" } };
  const { t, c } = map[r];
  return <span className="text-xs font-semibold" style={{ color: c }}>{t}</span>;
}

/* ── PAGE ──────────────────────────────────────────────────────────── */
export default function PorovnaniPage() {
  const sorted = [...providers].sort((a, b) => b.score - a.score);

  return (
    <div style={{ background: "#07090F", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden pt-16" style={{ background: "#07090F" }}>
        <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
          alt="Srovnání poskytovatelů" fill className="object-cover opacity-10" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(7,9,15,0.8) 0%, #07090F 85%)" }} />
        <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(201,168,76,0.3),transparent)" }} />
        <div className="absolute bottom-0 inset-x-0 pointer-events-none" style={{ height: 120, background: "linear-gradient(to bottom, transparent, #07090F)", zIndex: 10 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-20 lg:pt-24 lg:pb-24">
          <div className="max-w-3xl">
            <div className="eyebrow mb-5">Nezávislé srovnání</div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.05] mb-5 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Kdo skutečně nese<br />
              <span className="gold-shimmer">zodpovědnost za výsledek?</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(148,163,184,0.55)" }}>
              Srovnání čtyř typů poskytovatelů interim managementu podle kritérií, na kterých záleží nejvíce.
              Metodika je transparentní — posuďte sami.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 space-y-20">

        {/* ── RANKING CARDS ── */}
        <section>
          <div className="eyebrow mb-6">Žebříček</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-10" style={{ fontFamily: "var(--font-heading)" }}>
            Celkové hodnocení
          </h2>

          <div className="space-y-4">
            {sorted.map((p, idx) => (
              <div key={p.id} className="rounded-3xl overflow-hidden"
                style={{ background: p.badge ? "linear-gradient(to right, rgba(201,168,76,0.08), rgba(255,255,255,0.03))" : "rgba(255,255,255,0.04)", border: `1px solid ${p.badge ? "rgba(201,168,76,0.25)" : "rgba(255,255,255,0.07)"}` }}>
                <div className="grid grid-cols-1 lg:grid-cols-[64px_1fr_340px] items-stretch">

                  {/* Rank number */}
                  <div className="flex items-center justify-center py-4 lg:py-0"
                    style={{ background: idx === 0 ? "rgba(201,168,76,0.1)" : "rgba(255,255,255,0.02)", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)", color: idx === 0 ? "#C9A84C" : "rgba(148,163,184,0.2)" }}>
                      #{idx + 1}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>{p.title}</h3>
                      {p.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full"
                          style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)" }}>
                          <Award size={11} /> {p.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm mb-4" style={{ color: "rgba(148,163,184,0.5)" }}>{p.subtitle}</p>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(148,163,184,0.65)" }}>{p.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(52,211,153,0.5)" }}>Silné stránky</p>
                        <ul className="space-y-1.5">
                          {p.pros.slice(0, 3).map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "rgba(134,239,172,0.7)" }}>
                              <CheckCircle2 size={11} className="shrink-0 mt-0.5" style={{ color: "#34D399" }} />{pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(248,113,113,0.5)" }}>Omezení</p>
                        <ul className="space-y-1.5">
                          {p.cons.slice(0, 3).map((con, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "rgba(252,165,165,0.65)" }}>
                              <XCircle size={11} className="shrink-0 mt-0.5" style={{ color: "#F87171" }} />{con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="text-xs mt-4 pt-4" style={{ color: "rgba(148,163,184,0.4)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="font-bold" style={{ color: "rgba(148,163,184,0.5)" }}>Ideální pro: </span>{p.idealFor}
                    </p>
                  </div>

                  {/* Score panel */}
                  <div className="p-6 lg:p-8 flex flex-col items-center justify-center gap-5"
                    style={{ borderLeft: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                    {/* Circle score */}
                    <div className="relative" style={{ width: 100, height: 100 }}>
                      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
                        <circle cx="50" cy="50" r="42" fill="none"
                          stroke={p.color} strokeWidth="7" strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 42}`}
                          strokeDashoffset={`${2 * Math.PI * 42 * (1 - p.score / 100)}`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)", color: p.color }}>{p.score}</span>
                        <span className="text-[10px]" style={{ color: "rgba(148,163,184,0.35)" }}>/ 100</span>
                      </div>
                    </div>

                    {/* Score bar */}
                    <div className="w-full">
                      <div className="flex justify-between text-[10px] mb-1.5" style={{ color: "rgba(148,163,184,0.35)" }}>
                        <span>Celkové skóre</span>
                        <span style={{ color: p.color, fontWeight: 700 }}>{p.score} / 100</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                        <div className="h-full rounded-full" style={{ width: `${p.score}%`, background: `linear-gradient(to right, ${p.color}88, ${p.color})` }} />
                      </div>
                    </div>

                    {idx === 0 && (
                      <Link href="/diagnostika"
                        className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl transition-all hover:shadow-[0_0_16px_rgba(201,168,76,0.25)]"
                        style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)", color: "#fff" }}>
                        Konzultace <ArrowRight size={11} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section>
          <div className="eyebrow mb-6">Srovnávací tabulka</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Kritérium po kritériu
          </h2>
          <p className="text-sm mb-10" style={{ color: "rgba(148,163,184,0.45)" }}>
            Váha kritéria odráží jeho dopad na výsledky projektu.
          </p>

          {/* Table */}
          <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {/* Header */}
            <div className="grid gap-px" style={{ gridTemplateColumns: "1fr repeat(4, minmax(0, 1fr))", background: "rgba(255,255,255,0.04)" }}>
              <div className="p-4 lg:p-5" style={{ background: "#07090F" }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(148,163,184,0.3)" }}>Kritérium</span>
              </div>
              {providers.map(p => (
                <div key={p.id} className="p-4 lg:p-5 text-center" style={{ background: p.badge ? "rgba(201,168,76,0.06)" : "#07090F" }}>
                  <p className="text-xs font-bold leading-tight" style={{ fontFamily: "var(--font-heading)", color: p.badge ? "#C9A84C" : "rgba(241,245,249,0.7)" }}>
                    {p.title}
                  </p>
                  {p.badge && <Star size={10} fill="#C9A84C" style={{ color: "#C9A84C", margin: "4px auto 0" }} />}
                </div>
              ))}
            </div>

            {/* Rows */}
            {criteria.map((c, i) => (
              <div key={c.key} className="grid gap-px" style={{ gridTemplateColumns: "1fr repeat(4, minmax(0, 1fr))", background: "rgba(255,255,255,0.03)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                {/* Criterion label */}
                <div className="p-4 flex flex-col gap-1" style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold" style={{ color: "#E2E8F0" }}>{c.label}</span>
                    <div className="group relative">
                      <Info size={12} style={{ color: "rgba(148,163,184,0.3)", cursor: "help" }} />
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wide"
                    style={{ color: WEIGHT_COLOR[c.weight] ?? "rgba(148,163,184,0.3)" }}>
                    {c.weight}
                  </span>
                </div>

                {/* Ratings */}
                {providers.map(p => {
                  const r = ratings[p.id][c.key];
                  return (
                    <div key={p.id} className="p-4 flex flex-col items-center justify-center gap-1"
                      style={{ background: p.badge ? (i % 2 === 0 ? "rgba(201,168,76,0.04)" : "rgba(201,168,76,0.02)") : (i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent") }}>
                      <RatingIcon r={r} />
                      <RatingLabel r={r} />
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Score footer */}
            <div className="grid gap-px" style={{ gridTemplateColumns: "1fr repeat(4, minmax(0, 1fr))", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="p-4 lg:p-5" style={{ background: "rgba(255,255,255,0.04)" }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(148,163,184,0.4)" }}>Celkové skóre</span>
              </div>
              {providers.map(p => (
                <div key={p.id} className="p-4 lg:p-5 text-center" style={{ background: p.badge ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.03)" }}>
                  <span className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)", color: p.color }}>{p.score}</span>
                  <div className="mt-1 h-1 rounded-full overflow-hidden mx-2" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="h-full rounded-full" style={{ width: `${p.score}%`, background: p.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-5 flex flex-wrap items-center gap-6 px-2">
            {([["yes", "#34D399", "Ano — plně splňuje"], ["partial", "#FBBF24", "Částečně — s výhradami"], ["no", "#F87171", "Ne — nesplňuje"]] as const).map(([r, c, t]) => (
              <div key={r} className="flex items-center gap-2">
                <RatingIcon r={r as Rating} />
                <span className="text-xs" style={{ color: "rgba(148,163,184,0.45)" }}>{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── METHODOLOGY ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
                Jak jsme hodnotili
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(148,163,184,0.6)" }}>
                Hodnocení vychází z analýzy desítek interim angažmá a veřejně dostupných dat o výsledcích projektů.
                Váha kritérií odráží jejich statistický dopad na úspěšnost angažmá.
              </p>
              <ul className="space-y-2.5">
                {[
                  { w: "Kritické (30 %)", t: "Zodpovědnost za výsledky, zastupitelnost" },
                  { w: "Vysoké (20 %)", t: "KPI ve smlouvě, SME specializace, týmová znalost" },
                  { w: "Středně (10 %)", t: "Dokumentace, rychlost nasazení" },
                  { w: "Nízké (5 %)", t: "Flexibilita délky angažmá" },
                ].map(({ w, t }) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(148,163,184,0.55)" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#C9A84C" }} />
                    <span><strong style={{ color: "rgba(201,168,76,0.8)" }}>{w}:</strong> {t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
                Kdy srovnání neplatí
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(148,163,184,0.6)" }}>
                Toto srovnání hodnotí poskytovatele z hlediska kritérií klíčových pro strategická angažmá v SME firmách.
                Pro jiné kontexty může být vhodný jiný typ:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Solo freelancer pro krátkodobý, jasně ohraničený projekt s nízkým rizikem",
                  "Personální agentura, pokud hledáte interního zaměstnance, ne interim manažera",
                  "Poradenská firma, pokud potřebujete výhradně analytický výstup bez implementace",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(148,163,184,0.55)" }}>
                    <AlertCircle size={13} className="shrink-0 mt-0.5" style={{ color: "#FBBF24" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── BANNERS ── */}
        <BannerLeaderboard />
        <BannerConsultation variant="inline" />

        {/* ── CTA ── */}
        <section className="relative rounded-3xl overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
            alt="Výběr interim manažera" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(7,9,15,0.9)" }} />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10 lg:p-14">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
                Víte, jaký typ poskytovatele hledáte?
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.55)" }}>
                Projděte si 6 klíčových otázek, které odhalí rozdíl ještě při prvním pohovoru.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/jak-vybirat"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl transition-all hover:shadow-[0_0_24px_rgba(201,168,76,0.25)]"
                style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)", color: "#fff" }}>
                Průvodce výběrem <ArrowRight size={15} />
              </Link>
              <Link href="/diagnostika"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl transition-all"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(241,245,249,0.7)" }}>
                Spustit diagnostiku
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
