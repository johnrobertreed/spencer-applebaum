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
          href="/"
          className="text-[1.1rem] font-medium leading-none no-underline"
          style={{ fontFamily: "var(--font-newsreader), Newsreader, serif", color: "var(--text)" }}
        >
          Spencer Applebaum
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-5 text-[0.9rem]"
          style={{ color: "var(--text-secondary)" }}
        >
          <Link href="/#writing" className="no-underline hover:text-[var(--text)]">
            Writing
          </Link>
          <Link href="/press" className="no-underline hover:text-[var(--text)]">
            Press
          </Link>
          <Link href="/#contact" className="no-underline hover:text-[var(--text)]">
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
        <p>© 2026 Spencer Applebaum</p>
        <p className="mt-4 text-[0.75rem] leading-relaxed max-w-3xl">
          The information contained herein is not an offer to buy or sell any security. The views expressed in speaking engagements are my own and don't necessarily reflect those of my employer. Inclusion of the links to such engagements does not represent an endorsement of me by the sponsors. Speaking engagements and writings are a sample of complete works.
        </p>
      </footer>
    </div>
  );
}
