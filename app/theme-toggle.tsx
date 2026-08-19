"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="cursor-pointer rounded-[4px] border border-solid border-[var(--border)] bg-transparent px-[0.5rem] py-[0.35rem] leading-none text-[var(--text-secondary)] hover:border-[var(--text)] hover:text-[var(--text)]"
    >
      {theme === "dark" ? "☀" : "☽"}
    </button>
  );
}
