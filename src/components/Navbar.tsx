"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/magazin", label: "Magazín" },
  { href: "/diagnostika", label: "Diagnostika" },
  { href: "/jak-vybirat", label: "Jak vybírat" },
  { href: "/porovnani", label: "Srovnání" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,9,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#8A6820] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>IM</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white text-[12px] font-semibold tracking-wider uppercase">Interim Management</span>
            <span className="text-white/35 text-[9px] tracking-widest uppercase">Nezávislý průvodce</span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: active ? "#F1F5F9" : "rgba(241,245,249,0.5)" }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(241,245,249,0.85)"; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(241,245,249,0.5)"; }}
              >
                {active && (
                  <span
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                  />
                )}
                <span className="relative">{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile */}
        <div className="flex items-center gap-3">
          <Link
            href="/diagnostika"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-bold rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]"
            style={{
              background: "linear-gradient(135deg, #C9A84C, #8A6820)",
              color: "#fff",
            }}
          >
            Diagnostika
          </Link>
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "rgba(241,245,249,0.6)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ background: "rgba(13,17,32,0.98)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    color: active ? "#F1F5F9" : "rgba(241,245,249,0.5)",
                    background: active ? "rgba(255,255,255,0.06)" : "transparent",
                    borderLeft: active ? "2px solid #C9A84C" : "2px solid transparent",
                    paddingLeft: active ? "20px" : "16px",
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/diagnostika"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 text-sm font-bold rounded-xl text-center text-white"
              style={{ background: "linear-gradient(135deg, #C9A84C, #8A6820)" }}
            >
              Spustit diagnostiku
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
