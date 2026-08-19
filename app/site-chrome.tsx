import { ThemeToggle } from "./theme-toggle";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header
        className="mb-12 flex items-center justify-between border-b pb-4"
        style={{ borderColor: "var(--border)" }}
      >
        <a
          href="/"
          className="text-[1.1rem] font-medium leading-none no-underline"
          style={{ fontFamily: "var(--font-newsreader), Newsreader, serif", color: "var(--text)" }}
        >
          Spencer Applebaum
        </a>
        <nav
          className="flex flex-wrap items-center justify-end gap-5 text-[0.9rem]"
          style={{ color: "var(--text-secondary)" }}
        >
          <a href="/#writing" className="no-underline hover:text-[var(--text)]">
            Writing
          </a>
          <a href="/press" className="no-underline hover:text-[var(--text)]">
            Press
          </a>
          <a href="/#contact" className="no-underline hover:text-[var(--text)]">
            Contact
          </a>
          <a
            href="https://multicoin.capital/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-[var(--text)]"
          >
            Multicoin
          </a>
          <ThemeToggle />
        </nav>
      </header>

      {children}

      <footer
        className="mt-16 border-t pt-6 text-[0.85rem]"
        style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
      >
        <p>
          © 2026 Spencer Applebaum ·{" "}
          <a
            href="https://multicoin.capital/terms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms
          </a>{" "}
          ·{" "}
          <a
            href="https://multicoin.capital/disclosures/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Disclosures
          </a>
        </p>
      </footer>
    </div>
  );
}
