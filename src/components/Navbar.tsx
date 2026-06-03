"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/lib/theme";

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/magazin", label: "Magazín" },
  { href: "/diagnostika", label: "Diagnostika" },
  { href: "/jak-vybirat", label: "Jak vybírat" },
  { href: "/porovnani", label: "Srovnání" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isPolitico = theme === "politico";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Politico: always black navbar
  const navBg = isPolitico
    ? "rgba(17,17,17,0.97)"
    : scrolled ? "rgba(7,9,15,0.88)" : "transparent";

  const navBorderB = isPolitico
    ? "1px solid rgba(255,255,255,0.08)"
    : scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent";

  const linkColor = isPolitico ? "rgba(255,255,255,0.7)" : "rgba(241,245,249,0.55)";
  const linkActive = "#FFFFFF";

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{ background: navBg, backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderBottom: navBorderB }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          {isPolitico ? (
            /* Politico style: bold masthead */
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded flex items-center justify-center shrink-0" style={{ background: "#CC2200" }}>
                <span className="text-white font-black text-xs">IM</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white text-[12px] font-black tracking-tighter uppercase" style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}>
                  Interim Management
                </span>
                <span className="text-white/35 text-[9px] tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
                  Nezávislý průvodce
                </span>
              </div>
            </div>
          ) : (
            /* Dark style: gold gradient logo */
            <>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#8A6820] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>IM</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white text-[12px] font-semibold tracking-wider uppercase">Interim Management</span>
                <span className="text-white/35 text-[9px] tracking-widest uppercase">Nezávislý průvodce</span>
              </div>
            </>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className="relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: active ? linkActive : linkColor }}
              >
                {active && (
                  <span
                    className="absolute inset-0 rounded-lg"
                    style={{ background: isPolitico ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                )}
                <span className="relative">{label}</span>
                {active && isPolitico && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full" style={{ background: "#CC2200" }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: toggle + CTA + mobile */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/diagnostika"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-bold rounded-lg transition-all duration-200"
            style={{
              background: isPolitico ? "#CC2200" : "linear-gradient(135deg, #C9A84C, #8A6820)",
              color: "#fff",
            }}
          >
            Diagnostika
          </Link>
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "rgba(255,255,255,0.6)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: isPolitico ? "rgba(17,17,17,0.98)" : "rgba(7,9,15,0.98)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    color: active ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                    background: active ? "rgba(255,255,255,0.07)" : "transparent",
                    borderLeft: active ? `2px solid ${isPolitico ? "#CC2200" : "#C9A84C"}` : "2px solid transparent",
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
              style={{ background: isPolitico ? "#CC2200" : "linear-gradient(135deg, #C9A84C, #8A6820)" }}
            >
              Spustit diagnostiku
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
