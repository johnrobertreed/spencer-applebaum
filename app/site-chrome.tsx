import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header
        className="mb-12 flex items-center justify-between border-b pb-4"
        style={{ borderColor: "var(--border)" }}
      >
        <Link
          href="/new"
          className="text-[1.1rem] font-medium leading-none no-underline"
          style={{ fontFamily: "var(--font-newsreader), Newsreader, serif", color: "var(--text)" }}
        >
          Spencer Applebaum
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-5 text-[0.9rem]"
          style={{ color: "var(--text-secondary)" }}
        >
          <Link href="/new#writing" className="no-underline hover:text-[var(--text)]">
            Writing
          </Link>
          <Link href="/new/press" className="no-underline hover:text-[var(--text)]">
            Press
          </Link>
          <Link href="/new#contact" className="no-underline hover:text-[var(--text)]">
            Contact
          </Link>
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
