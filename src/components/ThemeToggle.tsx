"use client";

import { useTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isPolitico = theme === "politico";

  return (
    <button
      onClick={toggle}
      title={isPolitico ? "Přepnout na Dark téma" : "Přepnout na Politico téma"}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border"
      style={{
        background: isPolitico ? "#111111" : "rgba(255,255,255,0.06)",
        border: isPolitico ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.1)",
        color: isPolitico ? "#FFFFFF" : "rgba(241,245,249,0.7)",
      }}
    >
      {/* Icons */}
      <span className="text-[15px] leading-none select-none">
        {isPolitico ? "🌑" : "📰"}
      </span>
      <span className="hidden sm:block uppercase tracking-wide" style={{ fontSize: "0.65rem" }}>
        {isPolitico ? "Dark" : "Politico"}
      </span>
    </button>
  );
}
