"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, Clock, SlidersHorizontal, X, TrendingUp, Bookmark } from "lucide-react";
import { BannerLeaderboard, BannerInFeed, BannerConsultation } from "@/components/Banners";
import { getAllArticles, formatDateShort, CATEGORIES } from "@/lib/articles";
import type { Article, Category } from "@/lib/articles";

const SORTS = ["Nejnovější", "Nejstarší", "Nejdelší čtení", "Nejkratší čtení"] as const;
type Sort = typeof SORTS[number];

const CATEGORY_COLORS: Record<string, string> = {
  "Základy":          "rgba(201,168,76,0.15)",
  "Analýza":          "rgba(59,130,246,0.15)",
  "Finance":          "rgba(16,185,129,0.15)",
  "Průvodce":         "rgba(139,92,246,0.15)",
  "Případová studie": "rgba(239,68,68,0.12)",
  "Příběhy":          "rgba(249,115,22,0.15)",
};
const CATEGORY_TEXT: Record<string, string> = {
  "Základy":          "#E4C76B",
  "Analýza":          "#60A5FA",
  "Finance":          "#34D399",
  "Průvodce":         "#A78BFA",
  "Případová studie": "#F87171",
  "Příběhy":          "#FB923C",
};

function CategoryBadge({ category, size = "sm" }: { category: string; size?: "sm" | "xs" }) {
  return (
    <span
      className={`font-bold rounded-lg uppercase tracking-wide shrink-0 ${size === "xs" ? "text-[10px] px-2 py-0.5" : "text-xs px-2.5 py-1"}`}
      style={{ background: CATEGORY_COLORS[category] ?? "rgba(255,255,255,0.08)", color: CATEGORY_TEXT[category] ?? "#94A3B8", border: `1px solid ${CATEGORY_TEXT[category] ?? "#94A3B8"}22` }}
    >
      {category}
    </span>
  );
}

function HeroCard({ article }: { article: Article }) {
  return (
    <Link href={`/magazin/${article.slug}`} className="group relative flex flex-col justify-end overflow-hidden rounded-2xl" style={{ minHeight: 480 }}>
      <Image src={article.image} alt={article.imageAlt} fill priority
        className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:1024px)100vw,66vw" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,9,15,0.97) 0%, rgba(7,9,15,0.65) 45%, rgba(7,9,15,0.15) 100%)" }} />
      <div className="relative z-10 p-8 lg:p-10">
        <div className="flex items-center gap-3 mb-4">
          <CategoryBadge category={article.category} />
          <span className="text-xs" style={{ color: "rgba(148,163,184,0.45)" }}>{article.readingTime} min čtení</span>
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-3 transition-colors duration-300 group-hover:text-[#E4C76B]"
          style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9", letterSpacing: "-0.02em" }}>
          {article.title}
        </h2>
        <p className="text-sm lg:text-base leading-relaxed mb-5 max-w-2xl line-clamp-2" style={{ color: "rgba(148,163,184,0.65)" }}>
          {article.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3" style={{ color: "#C9A84C" }}>
          Číst analýzu <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

function MediumCard({ article }: { article: Article }) {
  return (
    <Link href={`/magazin/${article.slug}`} className="group relative flex flex-col justify-end overflow-hidden rounded-2xl" style={{ minHeight: 280 }}>
      <Image src={article.image} alt={article.imageAlt} fill
        className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px)100vw,33vw" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,9,15,0.95) 0%, rgba(7,9,15,0.4) 60%, transparent 100%)" }} />
      <div className="relative z-10 p-5">
        <CategoryBadge category={article.category} size="xs" />
        <h3 className="mt-2 text-base font-bold leading-snug transition-colors duration-200 group-hover:text-[#E4C76B] line-clamp-2"
          style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
          {article.title}
        </h3>
        <p className="text-xs mt-1" style={{ color: "rgba(148,163,184,0.4)" }}>{article.readingTime} min · {formatDateShort(article.publishedAt)}</p>
      </div>
    </Link>
  );
}

function ListCard({ article }: { article: Article }) {
  return (
    <Link href={`/magazin/${article.slug}`}
      className="group flex gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-x-0.5"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="relative h-16 w-24 rounded-lg overflow-hidden shrink-0">
        <Image src={article.image} alt={article.imageAlt} fill className="object-cover" sizes="96px" />
      </div>
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <CategoryBadge category={article.category} size="xs" />
          <h4 className="mt-1.5 text-sm font-bold leading-snug transition-colors duration-200 group-hover:text-[#C9A84C] line-clamp-2"
            style={{ fontFamily: "var(--font-heading)", color: "#E2E8F0" }}>
            {article.title}
          </h4>
        </div>
        <p className="text-xs mt-1" style={{ color: "rgba(148,163,184,0.35)" }}>
          {article.readingTime} min · {formatDateShort(article.publishedAt)}
        </p>
      </div>
    </Link>
  );
}

function GridCard({ article }: { article: Article }) {
  return (
    <Link href={`/magazin/${article.slug}`}
      className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="relative h-44 overflow-hidden">
        <Image src={article.image} alt={article.imageAlt} fill
          className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
        <div className="absolute inset-0" style={{ background: "rgba(7,9,15,0.35)" }} />
        <div className="absolute top-3 left-3"><CategoryBadge category={article.category} size="xs" /></div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-base leading-snug mb-2 flex-1 transition-colors group-hover:text-[#E4C76B] line-clamp-2"
          style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: "rgba(148,163,184,0.5)" }}>{article.excerpt}</p>
        <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-xs flex items-center gap-1.5" style={{ color: "rgba(148,163,184,0.3)" }}>
            <Clock size={10} />{article.readingTime} min
          </span>
          <span className="text-xs" style={{ color: "rgba(148,163,184,0.3)" }}>{formatDateShort(article.publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
}

export default function MagazinPage() {
  const allArticles = useMemo(() => getAllArticles(), []);

  const [query, setQuery]           = useState("");
  const [category, setCategory]     = useState<Category>("Vše");
  const [sort, setSort]             = useState<Sort>("Nejnovější");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let arr = allArticles;
    if (category !== "Vše") arr = arr.filter(a => a.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q)) ||
        a.category.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case "Nejstarší":      return [...arr].sort((a,b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
      case "Nejdelší čtení": return [...arr].sort((a,b) => b.readingTime - a.readingTime);
      case "Nejkratší čtení":return [...arr].sort((a,b) => a.readingTime - b.readingTime);
      default:               return arr;
    }
  }, [allArticles, query, category, sort]);

  const isFiltering = query.trim() !== "" || category !== "Vše";

  // Editorial layout data
  const [hero, second, third, ...rest] = allArticles;
  const featuredSide = allArticles.filter(a => a.featured && a.slug !== hero?.slug).slice(0, 2);
  const byCategory = CATEGORIES.slice(1).map(cat => ({
    cat,
    articles: allArticles.filter(a => a.category === cat),
  })).filter(g => g.articles.length > 0);

  const trending = allArticles.slice(0, 5);

  return (
    <div style={{ background: "#07090F", minHeight: "100vh" }}>
      {/* ── TOP BAR ── */}
      <div className="relative overflow-hidden" style={{ background: "#0D1120" }}>
        {/* Bottom fade to page background */}
        <div className="absolute bottom-0 inset-x-0 pointer-events-none" style={{ height: 80, background: "linear-gradient(to bottom, transparent, #07090F)", zIndex: 10 }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-5">
          <div className="flex flex-col lg:flex-row lg:items-end gap-6">
            <div className="flex-1">
              <div className="eyebrow mb-3">Magazín</div>
              <h1 className="text-3xl lg:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                Analýzy <span className="gold-shimmer">a průvodce</span>
              </h1>
            </div>
            {/* Search bar */}
            <div className="flex gap-3 flex-wrap lg:flex-nowrap">
              <div className="relative flex-1 min-w-[240px]">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "rgba(148,163,184,0.35)" }} />
                <input
                  type="text"
                  placeholder="Hledat články, témata..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "#F1F5F9",
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)")}
                />
                {query && (
                  <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(148,163,184,0.4)" }}>
                    <X size={14} />
                  </button>
                )}
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-xl transition-all duration-200"
                style={{
                  background: showFilters ? "rgba(201,168,76,0.12)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${showFilters ? "rgba(201,168,76,0.35)" : "rgba(255,255,255,0.09)"}`,
                  color: showFilters ? "#C9A84C" : "rgba(148,163,184,0.7)",
                }}
              >
                <SlidersHorizontal size={14} /> Filtrovat
              </button>
            </div>
          </div>

          {/* Filter panel */}
          {showFilters && (
            <div className="mt-5 pt-5 flex flex-col sm:flex-row gap-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(148,163,184,0.3)" }}>Kategorie</p>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map(c => (
                    <button key={c} onClick={() => setCategory(c)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150"
                      style={{
                        background: category === c ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${category === c ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.07)"}`,
                        color: category === c ? "#C9A84C" : "rgba(148,163,184,0.55)",
                      }}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(148,163,184,0.3)" }}>Řadit dle</p>
                <div className="flex flex-wrap gap-2">
                  {SORTS.map(s => (
                    <button key={s} onClick={() => setSort(s)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150"
                      style={{
                        background: sort === s ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${sort === s ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.07)"}`,
                        color: sort === s ? "#C9A84C" : "rgba(148,163,184,0.55)",
                      }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Active filters + count */}
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <span className="text-xs" style={{ color: "rgba(148,163,184,0.35)" }}>
              {isFiltering ? `${filtered.length} výsledků` : `${allArticles.length} článků`}
            </span>
            {category !== "Vše" && (
              <button onClick={() => setCategory("Vše")} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg"
                style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}>
                {category} <X size={11} />
              </button>
            )}
            {query && (
              <button onClick={() => setQuery("")} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(148,163,184,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}>
                &ldquo;{query}&rdquo; <X size={11} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-14">

        {/* ── SEARCH/FILTER RESULTS VIEW ── */}
        {isFiltering ? (
          <div>
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)", color: "#F1F5F9" }}>Žádné výsledky</p>
                <p style={{ color: "rgba(148,163,184,0.4)" }}>Zkuste jiný výraz nebo odeberte filtr.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map(a => <GridCard key={a.slug} article={a} />)}
              </div>
            )}
          </div>
        ) : (
          /* ── EDITORIAL NEWS LAYOUT ── */
          <div className="space-y-16">

            {/* ── HERO + SIDE ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2">
                {hero && <HeroCard article={hero} />}
              </div>
              <div className="flex flex-col gap-5">
                {/* Breaking/Latest strip */}
                <div className="p-5 rounded-2xl flex-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(148,163,184,0.5)" }}>Právě vyšlo</span>
                  </div>
                  <div className="space-y-4">
                    {allArticles.slice(0, 4).map((a, i) => (
                      <Link key={a.slug} href={`/magazin/${a.slug}`}
                        className="group flex items-start gap-3 pb-4 last:pb-0 last:border-0"
                        style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                        <span className="text-2xl font-bold shrink-0 w-6 leading-tight"
                          style={{ fontFamily: "var(--font-heading)", color: i === 0 ? "#C9A84C" : "rgba(148,163,184,0.15)" }}>
                          {i + 1}
                        </span>
                        <div>
                          <CategoryBadge category={a.category} size="xs" />
                          <p className="mt-1 text-sm font-semibold leading-snug transition-colors group-hover:text-[#C9A84C] line-clamp-2"
                            style={{ color: "#E2E8F0", fontFamily: "var(--font-heading)" }}>
                            {a.title}
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: "rgba(148,163,184,0.3)" }}>{a.readingTime} min</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── FEATURED TRIO ── */}
            {allArticles.filter(a => a.featured).length > 1 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div style={{ width: 28, height: 2, background: "#C9A84C" }} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#C9A84C" }}>Doporučené čtení</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {allArticles.filter(a => a.featured).slice(0, 3).map(a => <MediumCard key={a.slug} article={a} />)}
                </div>
              </div>
            )}

            {/* ── CATEGORY SECTIONS ── */}
            {byCategory.map(({ cat, articles: catArticles }) => (
              <div key={cat}>
                {/* Section header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 text-xs font-bold rounded-lg uppercase tracking-wide"
                      style={{ background: CATEGORY_COLORS[cat] ?? "rgba(255,255,255,0.07)", color: CATEGORY_TEXT[cat] ?? "#94A3B8", border: `1px solid ${CATEGORY_TEXT[cat] ?? "#94A3B8"}22` }}>
                      {cat}
                    </span>
                    <span className="text-xs" style={{ color: "rgba(148,163,184,0.3)" }}>{catArticles.length} {catArticles.length === 1 ? "článek" : catArticles.length < 5 ? "články" : "článků"}</span>
                  </div>
                  <button onClick={() => { setCategory(cat as Category); setShowFilters(true); }}
                    className="text-xs flex items-center gap-1 transition-colors hover:text-[#C9A84C]"
                    style={{ color: "rgba(148,163,184,0.35)" }}>
                    Vše <ArrowRight size={11} />
                  </button>
                </div>

                {catArticles.length === 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <MediumCard article={catArticles[0]} />
                  </div>
                ) : catArticles.length === 2 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {catArticles.map(a => <MediumCard key={a.slug} article={a} />)}
                  </div>
                ) : (
                  /* 3+ articles: 1 big left + list right */
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                    <div className="lg:col-span-3">
                      <MediumCard article={catArticles[0]} />
                    </div>
                    <div className="lg:col-span-2 flex flex-col gap-3">
                      {catArticles.slice(1).map(a => <ListCard key={a.slug} article={a} />)}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* ── TRENDING + ALL GRID ── */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Trending sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="flex items-center gap-2 mb-5">
                    <TrendingUp size={14} style={{ color: "#C9A84C" }} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#C9A84C" }}>Populární</span>
                  </div>
                  <div className="space-y-3">
                    {trending.map((a, i) => (
                      <Link key={a.slug} href={`/magazin/${a.slug}`}
                        className="group flex items-start gap-3 py-3 transition-all duration-200"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <span className="text-xl font-bold shrink-0 leading-tight w-5"
                          style={{ fontFamily: "var(--font-heading)", color: i < 2 ? "#C9A84C" : "rgba(148,163,184,0.2)" }}>
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-xs font-bold leading-snug transition-colors group-hover:text-[#C9A84C] line-clamp-3"
                            style={{ color: "rgba(241,245,249,0.75)", fontFamily: "var(--font-heading)" }}>
                            {a.title}
                          </p>
                          <p className="text-[10px] mt-1" style={{ color: "rgba(148,163,184,0.3)" }}>{a.readingTime} min</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Tags cloud */}
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Bookmark size={13} style={{ color: "rgba(148,163,184,0.3)" }} />
                      <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(148,163,184,0.3)" }}>Témata</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(allArticles.flatMap(a => a.tags))).slice(0, 14).map(tag => (
                        <button key={tag} onClick={() => setQuery(tag)}
                          className="px-2.5 py-1 text-[11px] rounded-lg transition-all hover:border-[#C9A84C]/30 hover:text-[#C9A84C]"
                          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(148,163,184,0.45)" }}>
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              {/* All articles grid */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-6">
                  <div style={{ width: 28, height: 2, background: "#C9A84C" }} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#C9A84C" }}>Všechny články</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {allArticles.map((a, idx) => (
                    <>
                      <GridCard key={a.slug} article={a} />
                      {/* In-feed banner after every 4th article */}
                      {(idx + 1) % 4 === 0 && idx < allArticles.length - 1 && (
                        <div key={`banner-${idx}`} className="sm:col-span-1">
                          <BannerInFeed />
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>

            {/* Leaderboard banner */}
            <BannerLeaderboard />

            {/* Consultation banner */}
            <BannerConsultation variant="inline" />

            {/* Editorial note */}
            <div className="p-6 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <p className="text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(148,163,184,0.4)" }}>
                <strong style={{ color: "rgba(241,245,249,0.6)" }}>Editorská poznámka:</strong>{" "}
                Veškerý obsah je zpracováván nezávislou redakcí za účelem vzdělávat, nikoli propagovat konkrétní poskytovatele.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
