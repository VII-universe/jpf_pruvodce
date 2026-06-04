import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { getArticleBySlug, getAllArticles, formatDate } from "@/lib/articles";
import type { Metadata } from "next";
import type { ArticleSection } from "@/lib/articles";
import { BannerSidebar, BannerPostArticle, BannerLeaderboard } from "@/components/Banners";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllArticles().map(a => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticleBySlug(slug);
  if (!a) return {};
  return { title: a.title, description: a.excerpt };
}

function renderSection(s: ArticleSection, i: number) {
  switch (s.type) {
    case "paragraph":
      return <p key={i} className="prose-dark" style={{ color: "#94A3B8", fontSize: "1.0625rem", lineHeight: "1.85", marginBottom: "1.5rem" }}>{s.text}</p>;
    case "heading2":
      return <h2 key={i} className="text-2xl lg:text-[1.75rem] font-bold mt-12 mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>{s.text}</h2>;
    case "heading3":
      return <h3 key={i} className="text-xl font-bold mt-8 mb-3 leading-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>{s.text}</h3>;
    case "blockquote":
      return (
        <blockquote key={i} className="my-8 pl-6" style={{ borderLeft: "3px solid #C9A84C" }}>
          <p className="text-xl leading-relaxed italic" style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>{s.text}</p>
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="my-6 space-y-3">
          {s.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[1.0625rem] leading-relaxed" style={{ color: "#94A3B8" }}>
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />{item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div key={i} className="my-8 p-6 rounded-2xl" style={{ background: "rgba(var(--accent-rgb),0.07)", borderLeft: "3px solid #C9A84C" }}>
          <p className="text-sm leading-relaxed font-semibold" style={{ color: "var(--accent-light)" }}>{s.text}</p>
        </div>
      );
    default: return null;
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const related = getAllArticles().filter(a => a.slug !== slug).slice(0, 2);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* ── ARTICLE HEADER (no photo background) ── */}
      <div className="pt-16" style={{ background: "var(--bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16 pb-8">

          {/* Back + category */}
          <div className="flex items-center gap-3 mb-6">
            <Link href="/magazin" className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-3)" }}>
              <ArrowLeft size={14} /> Zpět na magazín
            </Link>
            <span style={{ color: "var(--border-2)" }}>·</span>
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-md uppercase tracking-wide"
              style={{ background: "rgba(var(--accent-rgb),0.12)", color: "var(--accent)", border: `1px solid rgba(var(--accent-rgb),0.25)` }}>
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>
            {article.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl leading-relaxed mb-6 max-w-2xl"
            style={{ color: "var(--text-2)", fontFamily: "var(--font-body)" }}>
            {article.subtitle}
          </p>

          {/* Meta: date + reading time */}
          <div className="flex flex-wrap items-center gap-4 pb-8"
            style={{ borderBottom: "1px solid var(--border)" }}>
            <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-3)" }}>
              <Calendar size={13} />{formatDate(article.publishedAt)}
            </span>
            <span style={{ color: "var(--border-2)", fontSize: "0.75rem" }}>·</span>
            <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-3)" }}>
              <Clock size={13} />{article.readingTime} minut čtení
            </span>
          </div>
        </div>

        {/* ── FEATURED PHOTO ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="relative w-full overflow-hidden rounded-xl lg:rounded-2xl"
            style={{ height: "clamp(280px, 45vw, 540px)" }}>
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill priority
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 900px"
            />
          </div>
          <p className="mt-3 text-xs text-center" style={{ color: "var(--text-4)" }}>
            {article.imageAlt}
          </p>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 items-start">
          {/* Content */}
          <article className="max-w-[68ch]">
            {article.content[0]?.type === "paragraph" && (
              <p className="text-xl lg:text-2xl leading-[1.7] mb-10 font-semibold"
                style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>
                {article.content[0].text}
              </p>
            )}
            {article.content.slice(1).map((s, i) => renderSection(s, i))}
            <div className="mt-12 pt-8 flex flex-wrap gap-2" style={{ borderTop: "1px solid var(--border)" }}>
              {article.tags.map(t => (
                <span key={t} className="px-3 py-1.5 text-xs rounded-xl"
                  style={{ background: "var(--surface-2)", color: "var(--text-3)", border: "1px solid var(--border)" }}>
                  {t}
                </span>
              ))}
            </div>

            {/* In-article banners */}
            <BannerPostArticle />
            
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block sticky top-24 space-y-4">
            <div className="p-5 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase mb-4" style={{ color: "var(--text-3)" }}>Obsah článku</h4>
              <ul className="space-y-3">
                {article.content.filter(s => s.type === "heading2").map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                    <span className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{s.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-2xl overflow-hidden relative" style={{ background: "rgba(var(--accent-rgb),0.08)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle,#C9A84C,transparent)", transform: "translate(30%,-30%)" }} />
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(var(--accent-rgb),0.5)" }}>Diagnostika situace</h4>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-2)" }}>Zjistěte, zda je interim management správnou volbou.</p>
              <Link href="/diagnostika"
                className="block text-center px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-dark))", color: "#fff" }}>
                Spustit diagnostiku
              </Link>
            </div>
            <BannerSidebar />
          </aside>
        </div>

        {/* Leaderboard banner */}
        <div className="mt-12">
          <BannerLeaderboard />
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 lg:mt-20 pt-12" style={{ borderTop: "1px solid var(--border)" }}>
            <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>
              Související články
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {related.map(r => (
                <Link key={r.slug} href={`/magazin/${r.slug}`}
                  className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div className="relative h-40 overflow-hidden">
                    <Image src={r.image} alt={r.imageAlt} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="50vw" />
                    <div className="absolute inset-0" style={{ background: "rgba(7,9,15,0.4)" }} />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "var(--text-3)" }}>{r.category}</span>
                    <h3 className="font-bold text-base leading-snug mb-2 flex-1 transition-colors group-hover:text-[#E4C76B]"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--text-1)" }}>
                      {r.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-3)" }}>
                        <Clock size={11} />{r.readingTime} min
                      </span>
                      <ArrowRight size={14} style={{ color: "var(--accent)" }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
