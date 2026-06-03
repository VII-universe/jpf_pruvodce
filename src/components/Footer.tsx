import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = {
  "Obsah": [
    { href: "/magazin", label: "Magazín" },
    { href: "/diagnostika", label: "Diagnostika situace" },
    { href: "/jak-vybirat", label: "Jak vybírat manažera" },
    { href: "/porovnani", label: "Srovnání poskytovatelů" },
  ],
  "Témata": [
    { href: "/magazin/poradce-vs-interim-manazer", label: "Poradce vs. Interim manažer" },
    { href: "/magazin/provozni-slepota", label: "Provozní slepota" },
    { href: "/magazin/freelancer-nebo-agentura", label: "Freelancer nebo agentura?" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#07090F", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* Gold gradient line */}
      <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#8A6820] flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>IM</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white text-[12px] font-semibold tracking-wider uppercase">Interim Management</span>
                <span className="text-white/30 text-[9px] tracking-widest uppercase">Nezávislý průvodce</span>
              </div>
            </div>
            <p style={{ color: "rgba(148,163,184,0.6)", fontSize: "0.8rem", lineHeight: "1.7", maxWidth: "280px" }}>
              Nezávislý vzdělávací portál o interim managementu pro majitele firem.
              Pomáháme rozhodovat se informovaně.
            </p>
            <div className="mt-6">
              <Link
                href="/diagnostika"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg hover:shadow-[0_0_16px_rgba(201,168,76,0.2)] transition-all duration-200"
                style={{ background: "linear-gradient(135deg,#C9A84C,#8A6820)", color: "#fff" }}
              >
                Spustit diagnostiku <ArrowUpRight size={11} />
              </Link>
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 style={{ color: "rgba(148,163,184,0.4)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                {section}
              </h4>
              <ul className="space-y-3">
                {items.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="footer-link text-sm flex items-center gap-1 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p style={{ color: "rgba(148,163,184,0.25)", fontSize: "0.72rem" }}>
            © {new Date().getFullYear()} Interim Management CZ — vzdělávací portál
          </p>
          <p style={{ color: "rgba(148,163,184,0.15)", fontSize: "0.72rem" }}>
            Obsah slouží výhradně vzdělávacím účelům.
          </p>
        </div>
      </div>
    </footer>
  );
}
