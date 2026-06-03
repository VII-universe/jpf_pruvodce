"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BannerLeaderboard } from "@/components/Banners";
import {
  ArrowRight, CheckCircle2, AlertTriangle, Shield, Users, Target,
  BarChart3, ChevronDown, Star, Zap, Eye, FileCheck, TrendingUp,
} from "lucide-react";

/* ── DATA ──────────────────────────────────────────────────────────── */

const processSteps = [
  { num: "01", title: "Diagnostika situace", desc: "Určete typ angažmá a požadovaný profil manažera ještě před zahájením hledání.", icon: Eye },
  { num: "02", title: "Kvalifikační otázky", desc: "Šest otázek, které odliší výkonného partnera od konzultanta s jiným označením.", icon: FileCheck },
  { num: "03", title: "Smluvní rámec a KPI", desc: "Nastavte měřitelné cíle a mandát před podpisem — ne po prvním reportu.", icon: BarChart3 },
  { num: "04", title: "Exit plán od dne 1", desc: "Dobrý interim manažer plánuje svůj odchod od začátku. Firma musí zůstat soběstačná.", icon: TrendingUp },
];

const criteria = [
  {
    num: "01",
    icon: Target,
    title: "Zodpovědnost za výsledky",
    perex: "Kdo nese hlavu, pokud KPI nesplní? Tato otázka musí mít jasnou odpověď ještě před podpisem smlouvy.",
    detail: "Poradce nese zodpovědnost za kvalitu doporučení. Interim manažer nese zodpovědnost za výsledek. Tato distinkce musí být zakotvena ve smlouvě — konkrétními milestones, ne obecnými formulacemi.",
    green: ["Smlouva s měřitelnými KPI a sankcemi za neplnění", "Reference s konkrétními čísly a jmény klientů", "Ochota zabudovat odměnu vázanou na výsledky"],
    red:   ["'Výsledky závisí na mnoha faktorech mimo mou kontrolu'", "Smlouva definuje hodiny a přítomnost, ne výstupy"],
    stat:  { value: "67 %", label: "angažmá bez KPI nedosáhne cílů" },
  },
  {
    num: "02",
    icon: Users,
    title: "Zastupitelnost a zázemí",
    perex: "Pokud stojí za manažerem jen on sám, jste závislí na jeho zdraví, motivaci a rozhodnutí neopustit vás v kritický moment.",
    detail: "Freelancer bez organizačního zázemí je legitimní pro krátkodobé, jasně ohraničené úkoly. Pro strategické angažmá v kritické situaci hledejte poskytovatele, za jehož manažerem stojí tým s komplementárními kompetencemi a sdílenou znalostí projektu.",
    green: ["Tým manažerů se sdílenou znalostí vašeho projektu", "Písemný plán zastupování pro případ výpadku", "Interní peer review a kvalitní kontrola výstupů"],
    red:   ["Manažer pracuje zcela samostatně, bez jakéhokoliv zázemí", "'Nikoho nepotřebuji, mám 20 let zkušeností'"],
    stat:  { value: "1 z 3", label: "solo interim manažerů nedokončí angažmá" },
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Kontextuální zkušenosti",
    perex: "Skvělý korporátní ředitel nemusí být správnou volbou pro rodinný podnik se 60 zaměstnanci. Kontext rozhoduje.",
    detail: "Hledejte shodu v segmentu (SME vs. korporát), fázi firmy (startup vs. turnaround) a povaze problému (krize vs. transformace vs. skalování). Zkušenosti z jiných odvětví jsou bonus — zkušenosti ze správné fáze jsou podmínka.",
    green: ["Alespoň dvě reference z firem podobné velikosti a situace", "Manažer zná specifika vašeho odvětví nebo příbuzného", "Dokáže popsat neúspěšná angažmá a co se z nich naučil"],
    red:   ["Pouze korporátní reference pro SME mandát (nebo naopak)", "Generické zkušenosti bez kontextuální relevance"],
    stat:  { value: "3×", label: "vyšší úspěšnost při shodě kontextu" },
  },
  {
    num: "04",
    icon: Shield,
    title: "Transparentnost a exit plán",
    perex: "Cílem interim angažmá není závislost. Je to firma, která po odchodu manažera funguje lépe než před jeho příchodem.",
    detail: "Dobrý interim manažer aktivně buduje systémy a dokumentaci, které přežijí jeho odchod. Exit plán by měl být součástí smlouvy od prvního dne — ne jako formalita, ale jako pracovní dokument s milestones.",
    green: ["Pravidelný reporting jako standard (týdenní operativní, měsíční strategický)", "Průběžná dokumentace procesů a rozhodnutí", "Definovaný exit plán s přechodovým obdobím 4–6 týdnů"],
    red:   ["'Já firmu znám nejlépe, detaily nepotřebujete'", "Žádná zmínka o dokumentaci nebo předání znalostí"],
    stat:  { value: "4–6 týdnů", label: "ideální délka exit fáze" },
  },
];

const questions = [
  {
    n: "01",
    q: "Kdo nese smluvní zodpovědnost za výsledky tohoto projektu?",
    why: "Tato otázka okamžitě rozliší interim manažera od konzultanta. Správná odpověď jmenuje buď fyzickou osobu s konkrétními KPI ve smlouvě, nebo organizaci, která ručí za výsledky.",
    signal: "Pokud kandidát začne vysvětlovat, proč zodpovědnost za výsledky nelze zaručit, je to konzultant — bez ohledu na to, jak se označuje.",
  },
  {
    n: "02",
    q: "Jak konkrétně probíhá zastupování, pokud nastane neplánovaný výpadek?",
    why: "Kandidát bez zázemí tuto otázku nedokáže zodpovědět konkrétně. Organizace se skutečným týmovým zázemím má přesný plán — jméno zástupce, postup předání, timeline.",
    signal: "Vágní odpověď nebo odkaz na 'kolegy z oboru' je varovný signál. Ptejte se na jméno, na znalost projektu, na formální plán.",
  },
  {
    n: "03",
    q: "Popište tři situace, kde jste nezasáhli včas nebo kde projekt nedopadl podle plánu.",
    why: "Každý zkušený interim manažer zažil neúspěch nebo korekci kurzu. Sebeuvědomělý kandidát o tom mluví otevřeně a reflektuje poučení. Ten, kdo tvrdí že vždy uspěl, buď lže nebo nemá dostatečnou zkušenost.",
    signal: "Sledujte, zda kandidát přijímá osobní zodpovědnost, nebo přenáší vinu na klienta a okolnosti.",
  },
  {
    n: "04",
    q: "Jaká je vaše metrika úspěchu tohoto angažmá a jak ji budete měřit?",
    why: "Manažer orientovaný na výsledky má jasnou a konkrétní odpověď. Konzultant mluví o 'procesu', 'kvalitě doporučení' a 'naplnění zadání'.",
    signal: "Odpověď by měla obsahovat konkrétní metriku (%, Kč, dny), způsob měření a frekvenci reportingu. Bez toho nejde o výsledkový mandát.",
  },
  {
    n: "05",
    q: "Jaká jsou vaše dvě největší slabá místa v kontextu naší konkrétní situace?",
    why: "Nikdo není expert na vše. Poctivý kandidát identifikuje slabiny specifické pro váš kontext a vysvětlí, jak je kompenzuje — zázemím, zkušenostmi partnera nebo externím specialistou.",
    signal: "Odpověď 'Jsem schopen zvládnout cokoliv' je automatický disqualifier. Hledejte sebeuvědomění, ne sebevědomí.",
  },
  {
    n: "06",
    q: "Jak konkrétně probíhá předání projektu při ukončení angažmá?",
    why: "Exit strategie je součástí dobré interim práce od prvního dne. Manažer, který to neřeší, vytváří závislost — ať už záměrně nebo ne.",
    signal: "Ptejte se na délku přechodového období, formu dokumentace, kdo bude nástupce a jak probíhá testování soběstačnosti firmy.",
  },
];

const redFlags = [
  { text: "Smlouva definuje pouze honorář a přítomnost — bez měřitelných KPI", severity: "high" },
  { text: "Nemůže poskytnout tři ověřitelné reference z posledních pěti let", severity: "high" },
  { text: "Nedokáže konkrétně popsat, jak by probíhalo zastupování při výpadku", severity: "high" },
  { text: "Prezentuje se jako expert na vše bez uznání limitů svých kompetencí", severity: "medium" },
  { text: "Hovoří o obsahu zakázek jiných klientů bez jejich explicitního souhlasu", severity: "medium" },
  { text: "Odmítá strukturovaný onboarding — 'rovnou do práce'", severity: "medium" },
  { text: "Nechce zabudovat odměnu vázanou na výsledky do struktury smlouvy", severity: "medium" },
  { text: "Nemá připravený ani rámcový exit plán pro případ ukončení", severity: "low" },
];

const kpis = [
  {
    situation: "Krizové řízení",
    color: "#F87171",
    items: ["Cash-flow break-even do X dnů od nástupu", "Retence klíčových klientů (min. Y % portfolia)", "Snížení věřitelského dluhu o Z % v prvním kvartálu"],
  },
  {
    situation: "Skalování a růst",
    color: "#60A5FA",
    items: ["Onboarding nového zaměstnance pod X pracovních dní", "CEO time-on-operations snížen o Y %", "Implementace 3 klíčových procesních standardů"],
  },
  {
    situation: "Transformace",
    color: "#A78BFA",
    items: ["% dokončených procesních změn dle harmonogramu", "Milníky projektu — splněno v čase a rozpočtu", "Spokojenost interních stakeholderů (NPS > X)"],
  },
  {
    situation: "Provozní optimalizace",
    color: "#34D399",
    items: ["Snížení provozních nákladů o X % YoY", "Identifikace a eliminace duplikace v Y odděleních", "Zkrácení rozhodovacího procesu na Z pracovní dny"],
  },
];

/* ── COMPONENTS ────────────────────────────────────────────────────── */

function QuestionCard({ q, why, signal, n, isOpen, onToggle }: {
  q: string; why: string; signal: string; n: string;
  isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
      style={{ background: isOpen ? "rgba(201,168,76,0.07)" : "rgba(255,255,255,0.04)", border: `1px solid ${isOpen ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.07)"}` }}
      onClick={onToggle}
    >
      <div className="flex items-start gap-3 sm:gap-5 p-4 sm:p-6">
        <span
          className="text-2xl sm:text-4xl font-bold shrink-0 w-8 sm:w-12 leading-tight tabular-nums pt-0.5"
          style={{ fontFamily: "var(--font-heading)", color: isOpen ? "#C9A84C" : "rgba(148,163,184,0.2)" }}
        >
          {n}
        </span>
        <p className="flex-1 text-sm sm:text-base font-bold leading-snug" style={{ fontFamily: "var(--font-heading)", color: isOpen ? "#F1F5F9" : "#CBD5E1" }}>
          {q}
        </p>
        <ChevronDown
          size={16}
          className="shrink-0 transition-transform duration-300 mt-1"
          style={{ color: isOpen ? "#C9A84C" : "rgba(148,163,184,0.3)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      {isOpen && (
        <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4 pt-0">
          <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(148,163,184,0.4)" }}>Proč se ptát</p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.75)" }}>{why}</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(201,168,76,0.5)" }}>Co sledovat v odpovědi</p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(201,168,76,0.75)" }}>{signal}</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── PAGE ──────────────────────────────────────────────────────────── */

export default function JakVybiratPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <div style={{ background: "#07090F", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
          alt="Executive výběr"
          fill className="object-cover opacity-20" sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(7,9,15,0.6) 0%, rgba(7,9,15,0.85) 70%, #07090F 100%)" }} />
        <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(201,168,76,0.3),transparent)" }} />
        {/* Bottom fade to page background */}
        <div className="absolute bottom-0 inset-x-0 pointer-events-none" style={{ height: 120, background: "linear-gradient(to bottom, transparent, #07090F)", zIndex: 10 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="eyebrow mb-6">Průvodce výběrem</div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Vybíráte<br />
                <span className="gold-shimmer">správně?</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(148,163,184,0.6)" }}>
                Většina firem si při výběru interim manažera pokládá špatné otázky.
                Výsledkem je zaplacení za přítomnost — místo za výsledek.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#kriteria"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_24px_rgba(201,168,76,0.25)]"
                  style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)", color: "#fff" }}>
                  Zobrazit kritéria <ArrowRight size={15} />
                </a>
                <a href="#otazky"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(241,245,249,0.7)" }}>
                  6 klíčových otázek
                </a>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "67 %", l: "angažmá bez KPI ve smlouvě nedosáhne cílů" },
                { v: "1 z 3", l: "solo interim manažerů nedokončí projekt" },
                { v: "3×", l: "vyšší úspěšnost při správném výběru kontextu" },
                { v: "18 měs.", l: "průměrná délka nejúspěšnějších angažmá" },
              ].map(({ v, l }) => (
                <div key={l} className="glass rounded-2xl p-5">
                  <div className="text-2xl lg:text-3xl font-bold mb-1.5 gold-shimmer" style={{ fontFamily: "var(--font-heading)" }}>{v}</div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(148,163,184,0.45)" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── PROCESS STEPS ── */}
      <div style={{ background: "#07090F" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-center" style={{ color: "rgba(148,163,184,0.3)" }}>
            Správný postup výběru — 4 kroky
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {processSteps.map(({ num, title, desc, icon: Icon }, i) => (
              <div key={num} className="relative flex flex-col items-start px-6 py-2 first:pl-0 last:pr-0">
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-5 w-px h-full"
                    style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.2), transparent)" }} />
                )}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <Icon size={16} style={{ color: "#C9A84C" }} />
                  </div>
                  <span className="font-bold text-xs" style={{ fontFamily: "var(--font-heading)", color: "rgba(201,168,76,0.6)" }}>{num}</span>
                </div>
                <h3 className="text-sm font-bold mb-1.5" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(148,163,184,0.5)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-14 lg:space-y-24 py-14 lg:py-28">

        {/* ── 4 CRITERIA ── */}
        <section id="kriteria">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14 items-end">
            <div className="lg:col-span-2">
              <div className="eyebrow mb-5">Čtyři kritéria</div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Na čem závisí<br />úspěch nebo neúspěch
              </h2>
            </div>
            <p style={{ color: "rgba(148,163,184,0.55)", lineHeight: "1.7", fontSize: "0.9rem" }}>
              Tato kritéria vycházejí z analýzy desítek interim angažmá. Každé z nich odhalí fundamentální rozdíl mezi poskytovateli.
            </p>
          </div>

          <div className="space-y-5">
            {criteria.map(({ num, icon: Icon, title, perex, detail, green, red, stat }) => (
              <div key={num}
                className="group rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">

                  {/* Left accent col */}
                  <div className="p-7 lg:p-8 flex flex-col justify-between"
                    style={{ borderRight: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                          style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                          <Icon size={20} style={{ color: "#C9A84C" }} />
                        </div>
                        <span className="text-5xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "rgba(201,168,76,0.12)" }}>{num}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>{title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.6)" }}>{perex}</p>
                    </div>
                    {/* Stat */}
                    <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="text-2xl font-bold gold-shimmer" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</div>
                      <p className="text-xs mt-1" style={{ color: "rgba(148,163,184,0.4)" }}>{stat.label}</p>
                    </div>
                  </div>

                  {/* Right content col */}
                  <div className="p-7 lg:p-8">
                    <p className="text-sm leading-relaxed mb-7" style={{ color: "rgba(148,163,184,0.65)" }}>{detail}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Green */}
                      <div className="rounded-2xl p-5" style={{ background: "rgba(52,211,153,0.05)", border: "1px solid rgba(52,211,153,0.12)" }}>
                        <div className="flex items-center gap-2 mb-3">
                          <Star size={12} style={{ color: "#34D399" }} />
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(52,211,153,0.6)" }}>Správné signály</span>
                        </div>
                        <ul className="space-y-2.5">
                          {green.map((g, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed" style={{ color: "rgba(134,239,172,0.7)" }}>
                              <CheckCircle2 size={12} className="shrink-0 mt-0.5" style={{ color: "#34D399" }} />{g}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Red */}
                      <div className="rounded-2xl p-5" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)" }}>
                        <div className="flex items-center gap-2 mb-3">
                          <AlertTriangle size={12} style={{ color: "#F87171" }} />
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(248,113,113,0.6)" }}>Varovné signály</span>
                        </div>
                        <ul className="space-y-2.5">
                          {red.map((r, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed" style={{ color: "rgba(252,165,165,0.65)" }}>
                              <AlertTriangle size={12} className="shrink-0 mt-0.5" style={{ color: "#F87171" }} />{r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6 QUESTIONS ── */}
        <section id="otazky">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12 items-end">
            <div className="lg:col-span-2">
              <div className="eyebrow mb-5">Šest otázek</div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Otázky, které změní<br />rozhovor
              </h2>
            </div>
            <p style={{ color: "rgba(148,163,184,0.55)", lineHeight: "1.7", fontSize: "0.9rem" }}>
              Každá otázka funguje jako filtr. Kliknutím rozbalíte, co sledovat v odpovědi a proč záleží na přesném znění.
            </p>
          </div>

          <div className="space-y-3">
            {questions.map((q, i) => (
              <QuestionCard
                key={q.n}
                {...q}
                isOpen={openQuestion === i}
                onToggle={() => setOpenQuestion(openQuestion === i ? null : i)}
              />
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl flex items-start gap-4"
            style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <Zap size={18} className="shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
            <p className="text-sm leading-relaxed" style={{ color: "rgba(201,168,76,0.8)" }}>
              <strong style={{ color: "#E4C76B" }}>Jak tyto otázky použít:</strong>{" "}
              Pokládejte je v tomto pořadí. První dvě jsou kvalifikační — špatná odpověď ukončuje rozhovor. Otázky 3–6 prohlubují pochopení kandidáta a nastavují očekávání pro celé angažmá.
            </p>
          </div>
        </section>

        {/* ── RED FLAGS ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12 items-end">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div style={{ width: 28, height: 2, background: "#F87171" }} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#F87171" }}>Varovné signály</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Okamžité<br />deal-breakers
              </h2>
            </div>
            <p style={{ color: "rgba(148,163,184,0.55)", lineHeight: "1.7", fontSize: "0.9rem" }}>
              Při výskytu kteréhokoliv z těchto signálů ukončete výběrový proces — bez ohledu na to, jak dobrý je zbytek profilu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {redFlags.map(({ text, severity }, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200"
                style={{
                  background: severity === "high" ? "rgba(239,68,68,0.07)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${severity === "high" ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.06)"}`,
                }}>
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: severity === "high" ? "rgba(239,68,68,0.15)" : "rgba(148,163,184,0.08)" }}>
                  <AlertTriangle size={11} style={{ color: severity === "high" ? "#F87171" : "rgba(148,163,184,0.4)" }} />
                </div>
                <div>
                  {severity === "high" && (
                    <span className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: "rgba(248,113,113,0.5)" }}>Kritické</span>
                  )}
                  <p className="text-sm leading-relaxed" style={{ color: severity === "high" ? "rgba(252,165,165,0.75)" : "rgba(148,163,184,0.55)" }}>
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── KPI SECTION ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12 items-end">
            <div className="lg:col-span-2">
              <div className="eyebrow mb-5">KPI a metriky</div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Vždy trvejte<br />na konkrétních číslech
              </h2>
            </div>
            <p style={{ color: "rgba(148,163,184,0.55)", lineHeight: "1.7", fontSize: "0.9rem" }}>
              Níže jsou výchozí metriky podle typu angažmá. Konkrétní hodnoty (X, Y, Z) definujte spolu s manažerem před podpisem smlouvy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map(({ situation, color, items }) => (
              <div key={situation} className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="px-5 py-4" style={{ borderBottom: `2px solid ${color}30`, background: `${color}08` }}>
                  <h3 className="text-sm font-bold" style={{ fontFamily: "var(--font-heading)", color }}>{situation}</h3>
                </div>
                <ul className="p-5 space-y-3">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed" style={{ color: "rgba(148,163,184,0.6)" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color, opacity: 0.6 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── LEADERBOARD BANNER ── */}
        <BannerLeaderboard />

        {/* ── FINAL CTA ── */}
        <section className="relative rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80"
            alt="Strategické plánování"
            fill className="object-cover" sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(7,9,15,0.9)" }} />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10 lg:p-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-5 leading-tight" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
                Připraveni hledat<br />správného manažera?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(148,163,184,0.55)" }}>
                Nejprve si ověřte, zda je vaše situace pro interim management vůbec správná.
                Pak teprve hledejte — se správnými kritérii v ruce.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/diagnostika"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_28px_rgba(201,168,76,0.25)]"
                  style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)", color: "#fff" }}>
                  Diagnostikovat situaci <ArrowRight size={16} />
                </Link>
                <Link href="/magazin"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(241,245,249,0.7)" }}>
                  Číst analýzy
                </Link>
              </div>
            </div>

            {/* Summary checklist */}
            <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(148,163,184,0.4)" }}>
                Shrnutí — co musí splňovat váš interim manažer
              </h3>
              <ul className="space-y-3">
                {[
                  "Smluvní zodpovědnost za měřitelné KPI",
                  "Zázemí umožňující zastupování",
                  "Reference ze srovnatelného kontextu",
                  "Pravidelný reporting jako standard",
                  "Exit plán definovaný od prvního dne",
                  "Ochota diskutovat vlastní slabá místa",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                    <span className="text-sm" style={{ color: "rgba(241,245,249,0.7)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
