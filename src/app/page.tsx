import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Clock, AlertTriangle, TrendingDown, Zap, RefreshCw, Users, Target } from "lucide-react";
import { getAllArticles, formatDateShort } from "@/lib/articles";
import { BannerLeaderboard, BannerStrip } from "@/components/Banners";

/* ── PAIN POINTS data ──────────────────────────────────────────────── */
const painPoints = [
  "Klíčový manažer náhle odešel.",
  "Tržby klesají třetí kvartál za sebou.",
  "Firma roste, ale nestíháte strukturu.",
  "Plánujete předat firmu — a nemáte nástupce.",
  "Víte, co je špatně. Nevíte, kdo to opraví.",
  "Fúze se komplikuje, integrace vázne.",
  "Zakladatel se topí v operativě.",
  "Zákazníci odcházejí bez jasného důvodu.",
];

const situations = [
  { icon: AlertTriangle, title: "Krizové řízení",    color: "#F87171", href: "/diagnostika#krize" },
  { icon: TrendingDown,  title: "Stagnace",          color: "#FBBF24", href: "/diagnostika#stagnace" },
  { icon: Zap,           title: "Rychlý růst",       color: "#60A5FA", href: "/diagnostika#rust" },
  { icon: RefreshCw,     title: "Generační předání", color: "#A78BFA", href: "/diagnostika#prechod" },
  { icon: Users,         title: "Transformace",      color: "#2DD4BF", href: "/diagnostika#transformace" },
  { icon: Target,        title: "Provozní optim.",   color: "var(--accent)", href: "/diagnostika" },
];

const proofNumbers = [
  { v: "90 dní",  l: "do prvních měřitelných výsledků" },
  { v: "12 %",    l: "průměrné zvýšení EBITDA" },
  { v: "3–8×",    l: "typická návratnost angažmá" },
  { v: "18 měs.", l: "průměrná délka úspěšného projektu" },
];

export default function HomePage() {
  const articles = getAllArticles();
  const latest = articles.slice(0, 4);

  return (
    <>
      {/* ─────────────────────────────────────────────────────
          HERO — speaking directly to business owner
      ───────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
          alt="Executive prostředí"
          fill priority className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-img-overlay" style={{ background: "linear-gradient(115deg, rgba(7,9,15,0.97) 0%, rgba(7,9,15,0.88) 50%, rgba(7,9,15,0.55) 100%)" }} />
        <div className="absolute inset-0 hero-blob" style={{ background: "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left: headline */}
            <div className="lg:col-span-7">
              <div className="eyebrow anim-fade-up mb-7">
                Nezávislý průvodce interim managementem
              </div>

              {/* Rolling pain point ticker */}
              <div className="overflow-hidden mb-5 anim-fade-up anim-delay-1" style={{ height: "2.4rem" }}>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full shrink-0 animate-pulse" style={{ background: "#F87171" }} />
                  <p className="text-base font-semibold" style={{ color: "var(--text-3)" }}>
                    Poznáváte se? → {painPoints[0]}
                  </p>
                </div>
              </div>

              <h1
                className="anim-fade-up anim-delay-1 font-bold leading-[1.06] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)", color: "var(--text-1)" }}
              >
                Firma nepotřebuje<br />
                <span className="gold-shimmer">dalšího poradce.</span><br />
                Potřebuje výsledek.
              </h1>

              <p className="anim-fade-up anim-delay-2 text-lg leading-relaxed mb-10 max-w-xl" style={{ color: "var(--text-2)" }}>
                Interim manažer přichází s plným mandátem, nese zodpovědnost za KPI
                a odchází, až je firma soběstačná. Žádné reporty. Žádné výmluvy.
              </p>

              <div className="anim-fade-up anim-delay-3 flex flex-wrap gap-4 mb-12">
                <Link
                  href="/diagnostika"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_32px_rgba(201,168,76,0.3)]"
                  style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-dark))", color: "#fff" }}
                >
                  Diagnostikovat mou situaci <ArrowRight size={16} />
                </Link>
                <Link
                  href="/magazin"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl glass transition-all"
                  style={{ color: "var(--text-2)" }}
                >
                  Číst analýzy
                </Link>
              </div>

              {/* Proof numbers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {proofNumbers.map(({ v, l }) => (
                  <div key={l} className="glass rounded-xl px-4 py-3">
                    <div className="font-bold mb-0.5 gold-shimmer" style={{ fontFamily: "var(--font-heading)", fontSize: "1.35rem" }}>{v}</div>
                    <p className="text-[11px] leading-snug" style={{ color: "var(--text-3)" }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: situation quick-picks — hidden on mobile */}
            <div className="hidden lg:block lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "var(--text-3)" }}>
                Vaše situace?
              </p>
              <div className="space-y-2.5">
                {situations.map(({ icon: Icon, title, color, href }) => (
                  <Link key={title} href={href}
                    className="glass-hover group flex items-center gap-4 px-5 py-3.5 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}18` }}>
                      <Icon size={15} style={{ color }} />
                    </div>
                    <span className="text-sm font-semibold flex-1" style={{ color: "var(--text-1)", fontFamily: "var(--font-heading)" }}>{title}</span>
                    <ChevronRight size={14} className="shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: "var(--text-4)" }} />
                  </Link>
                ))}
                <Link href="/diagnostika"
                  className="flex items-center justify-center gap-2 py-3 text-xs font-semibold rounded-xl transition-all mt-1"
                  style={{ background: "rgba(var(--accent-rgb),0.07)", border: "1px solid rgba(201,168,76,0.15)", color: "var(--accent)" }}
                >
                  Spustit diagnostiku <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 pointer-events-none" style={{ height: 160, background: "linear-gradient(to bottom, transparent, var(--bg))", zIndex: 10 }} />
      </section>

      {/* ─────────────────────────────────────────────────────
          WHAT MAKES INTERIM DIFFERENT — 3 columns
      ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Mandát, ne doporučení",
                text: "Interim manažer vstupuje do firmy jako výkonný člen vedení. Rozhoduje. Řídí tým. Nese KPI. Poradce nechá výsledek na vás.",
              },
              {
                num: "02",
                title: "Výsledek, ne přítomnost",
                text: "Platíte za dosažené cíle, ne za odpracované hodiny. Smlouva s měřitelnými milestones je podmínka, ne bonus.",
              },
              {
                num: "03",
                title: "Odchod, ne závislost",
                text: "Dobrý interim manažer plánuje svůj odchod od prvního dne. Firma po něm funguje lépe — bez něho.",
              },
            ].map(({ num, title, text }) => (
              <div key={num} className="p-7 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <span className="text-4xl font-bold block mb-4" style={{ fontFamily: "var(--font-heading)", color: "rgba(var(--accent-rgb),0.18)" }}>{num}</span>
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          FEATURED ARTICLES
      ───────────────────────────────────────────────────── */}
      <section className="section-glow py-20 lg:py-28" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="eyebrow mb-4">Magazín</div>
              <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Nejčtenější analýzy</h2>
            </div>
            <Link href="/magazin" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#E4C76B]" style={{ color: "var(--accent)" }}>
              Všechny články <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
            {/* Big card */}
            {articles[0] && (
              <Link href={`/magazin/${articles[0].slug}`} className="lg:col-span-7 group relative rounded-2xl overflow-hidden flex flex-col justify-end" style={{ minHeight: 420 }}>
                <Image src={articles[0].image} alt={articles[0].imageAlt} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:1024px)100vw,58vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,9,15,0.68) 0%, rgba(7,9,15,0.72) 35%, rgba(7,9,15,0.4) 65%, transparent 100%)" }} />
                <div className="relative z-10 p-7">
                  <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-lg mb-3 inline-block" style={{ background: "rgba(var(--accent-rgb),0.15)", color: "var(--accent)", border: "1px solid rgba(201,168,76,0.25)" }}>
                    {articles[0].category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold leading-snug mb-2 group-hover:text-[#E4C76B] transition-colors" style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>
                    {articles[0].title}
                  </h3>
                  <p className="text-sm line-clamp-2 mb-4" style={{ color: "var(--text-2)" }}>{articles[0].excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--accent)" }}>Číst <ArrowRight size={13} /></span>
                </div>
              </Link>
            )}

            {/* Stack */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {articles.slice(1, 4).map(a => (
                <Link key={a.slug} href={`/magazin/${a.slug}`}
                  className="group flex gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-x-0.5"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
                    <Image src={a.image} alt={a.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="80px" />
                  </div>
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <h4 className="text-sm font-bold leading-snug group-hover:text-[#C9A84C] transition-colors line-clamp-2" style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>
                      {a.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded" style={{ background: "var(--surface-2)", color: "var(--text-3)" }}>{a.category}</span>
                      <span className="text-[10px]" style={{ color: "var(--text-3)" }}>
                        <Clock size={9} className="inline mr-1" />{a.readingTime} min · {formatDateShort(a.publishedAt)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

              <Link href="/magazin" className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-3)" }}>
                Zobrazit všech {articles.length} článků <ArrowRight size={11} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          LEADERBOARD BANNER
      ───────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <BannerLeaderboard />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          COMPARISON TEASER
      ───────────────────────────────────────────────────── */}
      <section className="py-16 section-glow" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-3xl overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left */}
              <div className="p-8 lg:p-10">
                <div className="eyebrow mb-4">Srovnání</div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  Freelancer, agentura nebo<br />specializovaná firma?
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-2)" }}>
                  Nezávislé srovnání 4 typů poskytovatelů podle 8 kritérií. S jasným žebříčkem a metodikou.
                </p>
                <Link href="/porovnani"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
                  style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-dark))", color: "#fff" }}>
                  Zobrazit srovnání <ArrowRight size={14} />
                </Link>
              </div>
              {/* Right — mini score preview */}
              <div className="p-8 lg:p-10" style={{ borderLeft: "1px solid var(--border)" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "var(--text-3)" }}>Celkové skóre</p>
                <div className="space-y-3">
                  {[
                    { t: "Specializovaná IM agentura", s: 91, c: "var(--accent)", b: true },
                    { t: "Solo freelancer",             s: 42, c: "#F87171", b: false },
                    { t: "Poradenská firma",            s: 38, c: "#FBBF24", b: false },
                    { t: "Personální agentura",        s: 28, c: "#94A3B8", b: false },
                  ].map(({ t, s, c, b }) => (
                    <div key={t} className="flex items-center gap-3">
                      <span className="text-xs w-44 shrink-0 font-medium" style={{ color: b ? "var(--accent-light)" : "var(--text-2)" }}>{t}</span>
                      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--surface-2)" }}>
                        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${s}%`, background: c }} />
                      </div>
                      <span className="text-xs font-bold w-7 text-right shrink-0" style={{ color: c }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          EDITORIAL QUOTE
      ───────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 overflow-hidden section-glow" style={{ background: "var(--bg)" }}>
        <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
          alt="Executive" fill className="object-cover opacity-12" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "rgba(7,9,15,0.9)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <div className="text-3xl mb-6" style={{ color: "rgba(var(--accent-rgb),0.2)" }}>&ldquo;</div>
          <p className="text-2xl lg:text-3xl font-semibold leading-snug mb-7"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>
            Nejdražší rozhodnutí ve firmě není špatný nákup ani promarněná zakázka.
            Je to čekat příliš dlouho se správnou pomocí.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div style={{ height: 1, width: 40, background: "rgba(var(--accent-rgb),0.2)" }} />
            <span className="text-xs" style={{ color: "var(--text-3)" }}>Redakce Interim Management CZ</span>
            <div style={{ height: 1, width: 40, background: "rgba(var(--accent-rgb),0.2)" }} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          HOW TO CHOOSE — 4 questions
      ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 section-glow" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="eyebrow mb-5">Jak vybírat</div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Většina firem si při výběru pokládá špatné otázky
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-2)" }}>
                Čtyři otázky, které okamžitě odhalí rozdíl mezi skutečným interim manažerem
                a konzultantem s jiným označením.
              </p>
              <Link href="/jak-vybirat"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]"
                style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text-1)" }}>
                Celý průvodce výběrem <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-3">
              {[
                { n: "01", q: "Kdo nese smluvní zodpovědnost za výsledky?" },
                { n: "02", q: "Jak probíhá zastupování při výpadku manažera?" },
                { n: "03", q: "Jak měříte KPI v průběhu projektu?" },
                { n: "04", q: "Máte zkušenosti s firmami v podobné situaci?" },
              ].map(({ n, q }) => (
                <Link key={n} href="/jak-vybirat"
                  className="glass-hover group flex items-center gap-4 p-4 rounded-xl">
                  <span className="font-bold shrink-0 text-lg w-8" style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}>{n}</span>
                  <p className="text-sm font-semibold flex-1 leading-snug" style={{ color: "var(--text-1)" }}>{q}</p>
                  <ArrowRight size={14} className="shrink-0 group-hover:text-[#C9A84C] transition-colors" style={{ color: "var(--text-4)" }} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          PHOTO STRIP
      ───────────────────────────────────────────────────── */}
      <section className="pb-20" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-3 gap-3 h-52 lg:h-64 rounded-2xl overflow-hidden">
            {[
              { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80", alt: "Strategické plánování" },
              { src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80", alt: "Vedení týmu" },
              { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80", alt: "Moderní kancelář" },
            ].map(({ src, alt }) => (
              <div key={alt} className="relative overflow-hidden">
                <Image src={src} alt={alt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="33vw" />
                <div className="absolute inset-0" style={{ background: "rgba(7,9,15,0.3)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
