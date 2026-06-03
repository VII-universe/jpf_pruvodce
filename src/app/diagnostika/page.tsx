"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BannerLeaderboard } from "@/components/Banners";
import {
  AlertTriangle, TrendingDown, Zap, RefreshCw, Users,
  ArrowRight, ArrowLeft, CheckCircle2, ChevronRight,
  RotateCcw, Target, Clock,
} from "lucide-react";

/* ── TYPES ─────────────────────────────────────────────────────────── */
interface Question {
  text: string;
  options: { label: string; score: number }[];
  hint?: string;
}
interface Situation {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  accentColor: string;
  image: string;
  intro: string;
  questions: Question[];
  results: {
    low:    { title: string; text: string; next: string };
    medium: { title: string; text: string; next: string };
    high:   { title: string; text: string; next: string };
  };
}

/* ── DATA ───────────────────────────────────────────────────────────── */
const situations: Situation[] = [
  {
    id: "krize",
    icon: AlertTriangle,
    title: "Krizová situace",
    subtitle: "Firma čelí akutnímu problému, který ohrožuje stabilitu nebo přežití",
    accentColor: "#F87171",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=1200&q=80",
    intro: "Odpovězte na 5 otázek. Na jejich základě vyhodnotíme, zda vaše firma skutečně potřebuje krizové řízení s interim manažerem, nebo jde o řešitelný problém vlastními silami.",
    questions: [
      {
        text: "Jak se vyvíjely vaše tržby v posledních 12 měsících?",
        hint: "Porovnejte se stejným obdobím minulého roku.",
        options: [
          { label: "Rostly nebo jsou stabilní", score: 0 },
          { label: "Klesly mírně (do 10 %)", score: 1 },
          { label: "Klesly výrazně (10–25 %)", score: 3 },
          { label: "Propad více než 25 %", score: 5 },
        ],
      },
      {
        text: "Odešli za posledních 6 měsíců klíčoví zaměstnanci nebo zákazníci?",
        options: [
          { label: "Ne, situace je stabilní", score: 0 },
          { label: "Jeden nebo dva, ale zvládnutelné", score: 1 },
          { label: "Více odchodů s dopadem na provoz", score: 3 },
          { label: "Masivní odchody, firma to pocítila", score: 5 },
        ],
      },
      {
        text: "Jak hodnotíte situaci cash-flow a přístup k financování?",
        options: [
          { label: "Bez problémů, rezervy jsou dostatečné", score: 0 },
          { label: "Občas napjatý, ale zvládnutelný", score: 1 },
          { label: "Chronicky napjatý, odkládáme platby", score: 3 },
          { label: "Kritický stav, hrozí platební neschopnost", score: 5 },
        ],
      },
      {
        text: "Kolik procent svého času tráví CEO nebo majitel hašením operativních požárů?",
        options: [
          { label: "Méně než 30 % — strategický fokus", score: 0 },
          { label: "30–50 % — občas sklouznu do operativy", score: 1 },
          { label: "50–70 % — převážně řeším denní problémy", score: 3 },
          { label: "Přes 70 % — jsem uvízlý v operativě", score: 5 },
        ],
      },
      {
        text: "Věří tým a klíčoví stakeholdeři aktuálnímu vedení, že situaci zvládne?",
        options: [
          { label: "Ano, důvěra je silná", score: 0 },
          { label: "Částečně, jsou pochybnosti", score: 2 },
          { label: "Důvěra je narušena", score: 3 },
          { label: "Důvěra je ztracena, odchody pokračují", score: 5 },
        ],
      },
    ],
    results: {
      low:    { title: "Krize zatím nenastala", text: "Vaše situace naznačuje napjatost, ale pravděpodobně ji zvládnete interními silami. Doporučujeme preventivní audit procesů a cash-flow modelování.", next: "/magazin/provozni-slepota" },
      medium: { title: "Riziko krize je reálné", text: "Několik varovných signálů naznačuje, že bez intervence se situace může zhoršit. Zvažte konzultaci s externím interim manažerem pro rychlou diagnostiku.", next: "/jak-vybirat" },
      high:   { title: "Interim management je silně doporučen", text: "Vaše odpovědi odpovídají obrazu firmy v krizi nebo bezprostředně před ní. Krizový interim manažer s plným mandátem je pravděpodobně nejrychlejší cestou ke stabilizaci.", next: "/jak-vybirat" },
    },
  },
  {
    id: "stagnace",
    icon: TrendingDown,
    title: "Stagnace a plateau",
    subtitle: "Firma funguje, ale přestala růst a chybí impulz pro nový cyklus",
    accentColor: "#FBBF24",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    intro: "Stagnace je záludná — firma stále funguje, ale pomalu ztrácí pozici. Odpovězte na 5 otázek a zjistěte, zda potřebujete pohled a energii zvenčí.",
    questions: [
      {
        text: "Jak rostou vaše tržby v porovnání s průměrem vašeho trhu?",
        options: [
          { label: "Rosteme rychleji než trh", score: 0 },
          { label: "Zhruba stejně jako trh", score: 1 },
          { label: "Pomaleji než trh už 1–2 roky", score: 3 },
          { label: "Tržby stagnují nebo klesají 2+ roky", score: 5 },
        ],
      },
      {
        text: "Jak často vedení řeší stále stejné problémy bez trvalého řešení?",
        hint: "Myslíme například personální konflikty, procesní selhání nebo zákaznické stížnosti.",
        options: [
          { label: "Problémy řešíme efektivně a trvale", score: 0 },
          { label: "Občas se problémy vrátí", score: 1 },
          { label: "Stále stejné problémy, jiné tváře", score: 3 },
          { label: "Jsme uvízlí v opakujícím se kolotoči", score: 5 },
        ],
      },
      {
        text: "Kdy naposledy firma úspěšně zavedla nový produkt, službu nebo procesní inovaci?",
        options: [
          { label: "V posledním roce", score: 0 },
          { label: "Před 1–2 lety", score: 1 },
          { label: "Před 3–5 lety", score: 3 },
          { label: "Nevybavuji si, nebo nikdy", score: 5 },
        ],
      },
      {
        text: "Jak hodnotíte motivaci a ambice vašeho vedoucího týmu?",
        options: [
          { label: "Tým je nabuzený a táhne firmu vpřed", score: 0 },
          { label: "Solidní výkon, ale chybí nový zápal", score: 2 },
          { label: "Únava a setrvačnost jsou znatelné", score: 3 },
          { label: "Klíčoví lidé odcházejí nebo jsou demotivovaní", score: 5 },
        ],
      },
      {
        text: "Má firma jasně definovanou a sdílenou strategii na příštích 3 roky?",
        options: [
          { label: "Ano, konkrétní plán s KPI existuje", score: 0 },
          { label: "Existuje, ale ne zcela sdílená", score: 1 },
          { label: "Spíše vize než konkrétní plán", score: 3 },
          { label: "Žádná explicitní strategie neexistuje", score: 5 },
        ],
      },
    ],
    results: {
      low:    { title: "Stagnace zatím nehrozí", text: "Firma má solidní základy. Pokud cítíte potřebu nového impulzu, může postačit strategický workshop nebo cílená konzultace.", next: "/magazin/provozni-slepota" },
      medium: { title: "Signály stagnace jsou přítomné", text: "Vaše firma je na křižovatce. Externe pohled interim manažera může odhalit slepá místa a nastartovat nový growth cyklus dříve, než stagnace přejde v pokles.", next: "/jak-vybirat" },
      high:   { title: "Stagnace je potvrzena — čas jednat", text: "Váš profil odpovídá firmě, která potřebuje zásadní transformaci přístupu. Interim manažer se zkušeností ze srovnatelných situací může přinést přesně ten pohled a energii, které chybí.", next: "/jak-vybirat" },
    },
  },
  {
    id: "rust",
    icon: Zap,
    title: "Rychlý růst",
    subtitle: "Firma roste, ale struktury a vedení nestíhají tempem tržeb",
    accentColor: "#60A5FA",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    intro: "Rychlý růst je skvělý problém — ale bez správné infrastruktury může firmu zničit stejně jako krize. Zjistěte, zda potřebujete pomoc se skalováním.",
    questions: [
      {
        text: "Jak rychle rostou vaše tržby v posledních 12 měsících?",
        options: [
          { label: "Do 15 % — organický, zdravý růst", score: 0 },
          { label: "15–30 % — dynamický růst", score: 1 },
          { label: "30–60 % — rychlý růst s tlakem na strukturu", score: 3 },
          { label: "Přes 60 % — explozivní růst", score: 5 },
        ],
      },
      {
        text: "Jak dlouho by firma fungovala bez CEO nebo majitele bez závažného problému?",
        hint: "Myslíme skutečnou nepřítomnost — dovolená, nemoc.",
        options: [
          { label: "Měsíc i déle — máme silný tým", score: 0 },
          { label: "Dva týdny — s menšími obtížemi", score: 1 },
          { label: "Jeden týden — pak problémy eskalují", score: 3 },
          { label: "Méně než týden — firma závisí na mně", score: 5 },
        ],
      },
      {
        text: "Jak probíhá onboarding nových zaměstnanců?",
        options: [
          { label: "Strukturovaný proces, do 2 týdnů plný výkon", score: 0 },
          { label: "Funguje, ale trvá déle než bychom chtěli", score: 1 },
          { label: "Chaotický, každý nováček jde jinou cestou", score: 3 },
          { label: "Nemáme definovaný onboarding, učí se za pochodu", score: 5 },
        ],
      },
      {
        text: "Dostávají zákazníci konzistentní zážitek bez ohledu na to, kdo je obsluhuje?",
        options: [
          { label: "Ano, máme standardy a zákazníci to cítí", score: 0 },
          { label: "Většinou ano, občas variabilita", score: 1 },
          { label: "Výrazná variabilita závislá na konkrétním člověku", score: 3 },
          { label: "Kvalita zcela závisí na jedincích, ne na procesu", score: 5 },
        ],
      },
      {
        text: "Jaký podíl práce managementu tvoří hašení požárů a výjimky?",
        options: [
          { label: "Méně než 20 % — systémy fungují", score: 0 },
          { label: "20–40 % — zvládnutelné", score: 1 },
          { label: "40–60 % — výjimky jsou nová norma", score: 3 },
          { label: "Přes 60 % — jsme permanentně v krizovém módu", score: 5 },
        ],
      },
    ],
    results: {
      low:    { title: "Skalování zvládáte dobře", text: "Vaše firma má zdravé základy i při rychlém růstu. Preventivní audit procesů jednou ročně postačí pro udržení kurzu.", next: "/magazin/poradce-vs-interim-manazer" },
      medium: { title: "Skalování začíná být náročné", text: "Firma roste, ale struktura nestíhá. Interim COO nebo operativní ředitel může vybudovat potřebnou infrastrukturu dříve, než chaos ovládne denní realitu.", next: "/jak-vybirat" },
      high:   { title: "Strukturální pomoc je nutná", text: "Vaše firma je v klasické skalování krizi. Bez senior operativní posily hrozí, že rychlý růst přejde v chaos a odliv zákazníků. Interim manažer s COO profilem je priorita.", next: "/jak-vybirat" },
    },
  },
  {
    id: "prechod",
    icon: RefreshCw,
    title: "Generační předání",
    subtitle: "Zakladatel nebo klíčový manažer plánuje přechod nebo odchod",
    accentColor: "#A78BFA",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80",
    intro: "Generační předání je jedno z nejnáročnějších manažerských témat. Zjistěte, jak jste připraveni a zda potřebujete průvodce tímto procesem.",
    questions: [
      {
        text: "V jakém horizontu plánujete předat nebo prodat firmu?",
        options: [
          { label: "Neplánuji — budu řídit ještě 10+ let", score: 0 },
          { label: "Výhledově za 5–10 let", score: 1 },
          { label: "V horizontu 3–5 let", score: 3 },
          { label: "Do 3 let — předání je aktuální téma", score: 5 },
        ],
      },
      {
        text: "Je váš potenciální nástupce připraven převzít vedení dnes?",
        options: [
          { label: "Ano, je plně připraven a připraven jednat", score: 0 },
          { label: "Téměř — potřebuje ještě 1–2 roky", score: 1 },
          { label: "Má potenciál, ale je daleko od připravenosti", score: 3 },
          { label: "Nástupce neexistuje nebo není identifikován", score: 5 },
        ],
      },
      {
        text: "Nakolik je firma závislá na specifických znalostech nebo vztazích zakladatele?",
        options: [
          { label: "Minimálně — procesy jsou nezávislé na osobě", score: 0 },
          { label: "Mírně — klíčové vztahy jsou zdokumentovány", score: 1 },
          { label: "Výrazně — mnoho věcí závisí pouze na mně", score: 3 },
          { label: "Kriticky — bez mě firma funguje jen krátkodobě", score: 5 },
        ],
      },
      {
        text: "Existuje písemný přechodový plán s milestones a odpovědnostmi?",
        options: [
          { label: "Ano, detailní a aktuální plán existuje", score: 0 },
          { label: "Rámcový plán, ale chybí detaily", score: 2 },
          { label: "Pouze ústní dohody bez dokumentace", score: 3 },
          { label: "Žádný plán neexistuje", score: 5 },
        ],
      },
      {
        text: "Znáte aktuální tržní hodnotu vaší firmy?",
        options: [
          { label: "Ano, máme aktuální ocenění od experta", score: 0 },
          { label: "Máme odhad, ale ne formální ocenění", score: 1 },
          { label: "Přibližná představa, bez výpočtu", score: 2 },
          { label: "Nevím, nikdy jsme to neřešili", score: 5 },
        ],
      },
    ],
    results: {
      low:    { title: "Předání je daleko nebo dobře připravené", text: "Vaše situace nevyžaduje okamžitou akci. Doporučujeme začít plánovat přechodový proces 18–24 měsíců před plánovaným datem.", next: "/magazin/generacni-predani-rodinny-podnik" },
      medium: { title: "Příprava na předání by měla začít", text: "Máte základ, ale mezery v přípravě jsou patrné. Interim manažer jako 'bridge' může systematicky připravit firmu i nástupce na hladký přechod.", next: "/jak-vybirat" },
      high:   { title: "Předání bez pomoci je rizikové", text: "Vaše odpovědi naznačují vysoké riziko turbulentního nebo neúspěšného předání. Profesionální interim most je v tuto chvíli silně doporučen.", next: "/jak-vybirat" },
    },
  },
  {
    id: "transformace",
    icon: Users,
    title: "Transformace",
    subtitle: "Firma záměrně mění model, strukturu nebo vstupuje na nový trh",
    accentColor: "#2DD4BF",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    intro: "Transformace je náročná i pro nejlepší týmy. Zjistěte, zda vaše firma má kapacitu ji zvládnout vlastními silami nebo potřebuje zkušeného průvodce.",
    questions: [
      {
        text: "Jaký typ transformace vaše firma plánuje nebo prochází?",
        options: [
          { label: "Dílčí optimalizace — žádná zásadní změna modelu", score: 0 },
          { label: "Procesní transformace s dopadem na 20–40 % operací", score: 2 },
          { label: "Zásadní změna modelu nebo vstupu na nový trh", score: 3 },
          { label: "Fúze, akvizice nebo kompletní restrukturalizace", score: 5 },
        ],
      },
      {
        text: "Má váš tým kapacitu řídit transformaci a zároveň zajišťovat běžný provoz?",
        options: [
          { label: "Ano, máme dedikovaný transformační tým", score: 0 },
          { label: "Částečně — improvizujeme s dostupnými lidmi", score: 2 },
          { label: "Jen těžko — tým je přetížen", score: 4 },
          { label: "Ne — provoz a transformace si konkurují o zdroje", score: 5 },
        ],
      },
      {
        text: "Má management zkušenosti s řízením podobně rozsáhlé změny?",
        options: [
          { label: "Ano, několikrát v minulosti", score: 0 },
          { label: "Jednou, s omezeným úspěchem", score: 2 },
          { label: "Zkušenosti chybí, spoléháme na teorii", score: 3 },
          { label: "Žádné — jde o první projekt tohoto rozsahu", score: 5 },
        ],
      },
      {
        text: "Jak zvládá firma komunikaci změny směrem k zaměstnancům a stakeholderům?",
        options: [
          { label: "Systematicky — transparentní communication plan existuje", score: 0 },
          { label: "Ad hoc — komunikujeme, ale bez struktury", score: 2 },
          { label: "Špatně — panuje nejistota a odpor", score: 3 },
          { label: "Nekomunikujeme — doufáme, že se to vyřeší samo", score: 5 },
        ],
      },
      {
        text: "Je transformace podložena konkrétním business casem a měřitelnými KPI?",
        options: [
          { label: "Ano — business case, ROI a KPI jsou definovány", score: 0 },
          { label: "Částečně — směr je jasný, čísla méně", score: 2 },
          { label: "Strategie existuje, ale bez konkrétních metrik", score: 3 },
          { label: "Ne — jde spíš o intuici než data", score: 5 },
        ],
      },
    ],
    results: {
      low:    { title: "Transformaci zvládnete vlastními silami", text: "Váš tým má kapacitu i zkušenosti. Doporučujeme externí facilitaci change management workshopů pro udržení správného kurzu.", next: "/magazin/digitalni-transformace-sme" },
      medium: { title: "Transformace potřebuje posilu", text: "Kapacitní nebo zkušenostní mezera je patrná. Interim transformation lead může přinést strukturu a zkušenosti bez nutnosti trvalého náboru.", next: "/jak-vybirat" },
      high:   { title: "Bez externího průvodce je transformace riziková", text: "Vaše odpovědi naznačují vysoké riziko selhání transformace. Zkušený interim manažer specializující se na change management je v tuto chvíli nejlepší investicí.", next: "/jak-vybirat" },
    },
  },
];

/* ── SCORING LOGIC ──────────────────────────────────────────────────── */
const MAX_SCORE = 25; // 5 questions × max 5 points

function getResultTier(score: number): "low" | "medium" | "high" {
  const pct = (score / MAX_SCORE) * 100;
  if (pct < 35) return "low";
  if (pct < 65) return "medium";
  return "high";
}

const TIER_META = {
  low:    { color: "#34D399", bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.2)", label: "Nízká urgence" },
  medium: { color: "#FBBF24", bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.2)", label: "Střední urgence" },
  high:   { color: "#F87171", bg: "rgba(248,113,113,0.08)", border: "rgba(248,113,113,0.2)", label: "Vysoká urgence" },
};

/* ── PROGRESS BAR ───────────────────────────────────────────────────── */
function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(current / total) * 100}%`, background: `linear-gradient(to right, ${color}88, ${color})` }}
        />
      </div>
      <span className="text-xs font-semibold shrink-0 tabular-nums" style={{ color: "rgba(148,163,184,0.4)" }}>
        {current}/{total}
      </span>
    </div>
  );
}

/* ── RESULT SCREEN ──────────────────────────────────────────────────── */
function ResultScreen({ sit, score, answers, onReset }: {
  sit: Situation; score: number; answers: number[]; onReset: () => void;
}) {
  const tier = getResultTier(score);
  const result = sit.results[tier];
  const meta = TIER_META[tier];
  const pct = Math.round((score / MAX_SCORE) * 100);

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Score visual */}
      <div className="rounded-3xl overflow-hidden" style={{ border: `1px solid ${meta.border}`, background: meta.bg }}>
        <div className="p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Circle gauge */}
            <div className="relative shrink-0 mx-auto lg:mx-0" style={{ width: 120, height: 120 }}>
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="50" fill="none"
                  stroke={meta.color} strokeWidth="8" strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 50}`}
                  strokeDashoffset={`${2 * Math.PI * 50 * (1 - pct / 100)}`}
                  style={{ transition: "stroke-dashoffset 1s ease-out" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)", color: meta.color }}>{pct}</span>
                <span className="text-xs" style={{ color: "rgba(148,163,184,0.4)" }}>/ 100</span>
              </div>
            </div>

            {/* Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3"
                style={{ background: `${meta.color}20`, color: meta.color, border: `1px solid ${meta.color}30` }}>
                {meta.label}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
                {result.title}
              </h3>
              <p className="text-sm leading-relaxed max-w-xl" style={{ color: "rgba(148,163,184,0.7)" }}>
                {result.text}
              </p>
            </div>
          </div>
        </div>

        {/* Answer recap */}
        <div style={{ borderTop: `1px solid ${meta.border}` }}>
          <div className="p-6 lg:p-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(148,163,184,0.3)" }}>
              Vaše odpovědi
            </p>
            <div className="space-y-3">
              {sit.questions.map((q, i) => {
                const chosen = q.options[answers[i]];
                return (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-xs font-bold w-5 shrink-0 mt-0.5" style={{ color: "rgba(148,163,184,0.3)" }}>{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs leading-relaxed mb-1" style={{ color: "rgba(148,163,184,0.5)" }}>{q.text}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold" style={{ color: "#F1F5F9" }}>{chosen?.label}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded"
                          style={{ background: chosen?.score >= 3 ? "rgba(248,113,113,0.15)" : "rgba(52,211,153,0.1)", color: chosen?.score >= 3 ? "#F87171" : "#34D399" }}>
                          {chosen?.score} b.
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Next steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href={result.next}
          className="flex items-center justify-between p-5 rounded-2xl transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:-translate-y-0.5"
          style={{ background: `linear-gradient(135deg,${meta.color}15,${meta.color}05)`, border: `1px solid ${meta.border}` }}>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: meta.color }}>Doporučený krok</p>
            <p className="text-sm font-semibold" style={{ color: "#F1F5F9" }}>{tier === "low" ? "Číst relevantní analýzu" : "Průvodce výběrem manažera"}</p>
          </div>
          <ArrowRight size={18} style={{ color: meta.color }} />
        </Link>

        <button onClick={onReset}
          className="flex items-center justify-between p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(148,163,184,0.35)" }}>Jiná situace?</p>
            <p className="text-sm font-semibold" style={{ color: "#E2E8F0" }}>Zkusit jinou diagnostiku</p>
          </div>
          <RotateCcw size={16} style={{ color: "rgba(148,163,184,0.4)" }} />
        </button>
      </div>
    </div>
  );
}

/* ── QUESTIONNAIRE ──────────────────────────────────────────────────── */
function Questionnaire({ sit, onBack, onFinish }: {
  sit: Situation;
  onBack: () => void;
  onFinish: (score: number, answers: number[]) => void;
}) {
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const q = sit.questions[step];
  const isLast = step === sit.questions.length - 1;

  function choose(idx: number) {
    setSelected(idx);
  }

  function next() {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    if (isLast) {
      const totalScore = newAnswers.reduce((sum, ansIdx, qIdx) => sum + sit.questions[qIdx].options[ansIdx].score, 0);
      onFinish(totalScore, newAnswers);
    } else {
      setAnswers(newAnswers);
      setStep(s => s + 1);
      setSelected(null);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm mb-6 transition-colors hover:text-[#C9A84C]" style={{ color: "rgba(148,163,184,0.4)" }}>
          <ArrowLeft size={14} /> Zpět na výběr situace
        </button>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${sit.accentColor}20` }}>
            <sit.icon size={15} style={{ color: sit.accentColor }} />
          </div>
          <span className="text-sm font-semibold" style={{ color: sit.accentColor }}>{sit.title}</span>
        </div>
        <ProgressBar current={step + 1} total={sit.questions.length} color={sit.accentColor} />
      </div>

      {/* Question card */}
      <div key={step} className="rounded-3xl p-7 lg:p-9 anim-fade-up"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="mb-2">
          <span className="text-xs font-bold" style={{ color: "rgba(148,163,184,0.3)" }}>Otázka {step + 1} z {sit.questions.length}</span>
        </div>
        <h2 className="text-xl lg:text-2xl font-bold mb-2 leading-snug" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
          {q.text}
        </h2>
        {q.hint && (
          <p className="text-sm mb-6" style={{ color: "rgba(148,163,184,0.45)" }}>{q.hint}</p>
        )}

        {/* Options */}
        <div className="space-y-3 mt-6">
          {q.options.map((opt, i) => {
            const isChosen = selected === i;
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                className="w-full flex items-center gap-4 p-4 lg:p-5 rounded-2xl text-left transition-all duration-200 hover:-translate-x-1"
                style={{
                  background: isChosen ? `${sit.accentColor}12` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isChosen ? sit.accentColor + "50" : "rgba(255,255,255,0.07)"}`,
                  transform: isChosen ? "translateX(4px)" : undefined,
                }}
              >
                <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center transition-all duration-200"
                  style={{ border: `2px solid ${isChosen ? sit.accentColor : "rgba(148,163,184,0.2)"}`, background: isChosen ? `${sit.accentColor}25` : "transparent" }}>
                  {isChosen && <div className="w-2 h-2 rounded-full" style={{ background: sit.accentColor }} />}
                </div>
                <span className="text-sm font-medium leading-relaxed flex-1" style={{ color: isChosen ? "#F1F5F9" : "rgba(148,163,184,0.7)" }}>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between pt-2">
        {step > 0 ? (
          <button
            onClick={() => { setStep(s => s - 1); setSelected(answers[step - 1] ?? null); setAnswers(a => a.slice(0, -1)); }}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm rounded-xl transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(148,163,184,0.55)" }}>
            <ArrowLeft size={14} /> Předchozí
          </button>
        ) : <div />}

        <button
          onClick={next}
          disabled={selected === null}
          className="inline-flex items-center gap-2 px-7 py-2.5 text-sm font-bold rounded-xl transition-all duration-300"
          style={{
            background: selected !== null ? `linear-gradient(135deg, ${sit.accentColor}, ${sit.accentColor}bb)` : "rgba(255,255,255,0.04)",
            color: selected !== null ? "#fff" : "rgba(148,163,184,0.3)",
            cursor: selected !== null ? "pointer" : "not-allowed",
            border: `1px solid ${selected !== null ? "transparent" : "rgba(255,255,255,0.06)"}`,
            boxShadow: selected !== null ? `0 0 20px ${sit.accentColor}30` : "none",
          }}>
          {isLast ? "Zobrazit výsledek" : "Další otázka"} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

/* ── SITUATION PICKER ───────────────────────────────────────────────── */
function SituationPicker({ onSelect }: { onSelect: (s: Situation) => void }) {
  return (
    <div>
      <div className="mb-10">
        <div className="eyebrow mb-5">Interaktivní diagnostika</div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
          Vyberte situaci vaší firmy
        </h2>
        <p className="text-base leading-relaxed max-w-xl" style={{ color: "rgba(148,163,184,0.55)" }}>
          Každá situace má vlastní dotazník. Na základě vašich odpovědí vyhodnotíme,
          zda a jaký typ interim managementu dává smysl.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {situations.map((sit) => (
          <button
            key={sit.id}
            onClick={() => onSelect(sit)}
            className="group relative text-left rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Image bg */}
            <div className="relative h-36 overflow-hidden">
              <Image src={sit.image} alt={sit.title} fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, rgba(7,9,15,0.1), rgba(7,9,15,0.85))` }} />
            </div>

            {/* Content */}
            <div className="p-5" style={{ background: "rgba(255,255,255,0.04)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${sit.accentColor}18`, border: `1px solid ${sit.accentColor}30` }}>
                  <sit.icon size={15} style={{ color: sit.accentColor }} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: sit.accentColor }}>
                  {sit.questions.length} otázek
                </span>
              </div>
              <h3 className="text-base font-bold mb-1.5 leading-snug" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
                {sit.title}
              </h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(148,163,184,0.5)" }}>
                {sit.subtitle}
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold transition-colors group-hover:text-white"
                style={{ color: sit.accentColor }}>
                Spustit dotazník <ChevronRight size={13} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Info strip */}
      <div className="mt-8 flex flex-wrap items-center gap-6 p-5 rounded-2xl"
        style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
        {[
          { icon: Clock, text: "Každý dotazník trvá 2–3 minuty" },
          { icon: Target, text: "Personalizovaný výsledek s doporučením" },
          { icon: CheckCircle2, text: "Bez registrace, okamžitě" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2">
            <Icon size={13} style={{ color: "rgba(201,168,76,0.5)" }} />
            <span className="text-xs" style={{ color: "rgba(148,163,184,0.4)" }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── PAGE ───────────────────────────────────────────────────────────── */
type View = { stage: "pick" } | { stage: "quiz"; sit: Situation } | { stage: "result"; sit: Situation; score: number; answers: number[] };

export default function DiagnostikaPage() {
  const [view, setView] = useState<View>({ stage: "pick" });

  return (
    <div style={{ background: "#07090F", minHeight: "100vh" }}>
      {/* HERO */}
      <div className="relative overflow-hidden pt-16" style={{ background: "#0D1120" }}>
        <Image src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80"
          alt="Executive diagnostika" fill className="object-cover opacity-15" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #07090F 0%, rgba(7,9,15,0.75) 40%, rgba(7,9,15,0.4) 100%)" }} />
        <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(201,168,76,0.3),transparent)" }} />
        {/* Bottom fade to page background */}
        <div className="absolute bottom-0 inset-x-0 pointer-events-none" style={{ height: 120, background: "linear-gradient(to bottom, transparent, #07090F)", zIndex: 10 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-20 lg:pt-24 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow mb-5">Diagnostika situace</div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-[1.05] mb-5 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Je interim management<br />
                <span className="gold-shimmer">správný pro vás?</span>
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(148,163,184,0.55)", maxWidth: "440px" }}>
                Vyberte situaci a projděte si 5 cílených otázek.
                Dostanete personalizované vyhodnocení s konkrétním doporučením.
              </p>
            </div>
            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3">
              {situations.map(sit => (
                <button key={sit.id} onClick={() => setView({ stage: "quiz", sit })}
                  className="group flex items-center gap-3 p-4 rounded-2xl text-left transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${sit.accentColor}15` }}>
                    <sit.icon size={14} style={{ color: sit.accentColor }} />
                  </div>
                  <span className="text-xs font-semibold leading-snug" style={{ color: "rgba(241,245,249,0.7)", fontFamily: "var(--font-heading)" }}>
                    {sit.title}
                  </span>
                  <ChevronRight size={12} className="ml-auto shrink-0 group-hover:translate-x-0.5 transition-transform" style={{ color: "rgba(148,163,184,0.25)" }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
        {view.stage === "pick" && (
          <SituationPicker onSelect={sit => setView({ stage: "quiz", sit })} />
        )}
        {view.stage === "quiz" && (
          <Questionnaire
            sit={view.sit}
            onBack={() => setView({ stage: "pick" })}
            onFinish={(score, answers) => setView({ stage: "result", sit: view.sit, score, answers })}
          />
        )}
        {view.stage === "result" && (
          <ResultScreen
            sit={view.sit}
            score={view.score}
            answers={view.answers}
            onReset={() => setView({ stage: "pick" })}
          />
        )}
      </div>

      {/* Leaderboard banner (always visible) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-10">
        <BannerLeaderboard />
      </div>

      {/* Bottom CTA (only on pick screen) */}
      {view.stage === "pick" && (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
          <div className="relative rounded-3xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80"
              alt="Konzultace" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0" style={{ background: "rgba(7,9,15,0.88)" }} />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-10 lg:p-12">
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
                  Víte, co hledáte?
                </h3>
                <p className="text-sm" style={{ color: "rgba(148,163,184,0.5)" }}>
                  Přejděte rovnou na kritéria a otázky pro výběr manažera.
                </p>
              </div>
              <Link href="/jak-vybirat"
                className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_28px_rgba(201,168,76,0.25)]"
                style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)", color: "#fff" }}>
                Průvodce výběrem <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
