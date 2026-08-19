import { SiteChrome } from "./site-chrome";

const writing = [
  {
    title: "Multicoin Capital’s Investment Thesis",
    date: "February 6, 2026",
    href: "https://multicoin.capital/2026/02/06/multicoin-capitals-investment-thesis/",
  },
  {
    title: "Hyperliquid (HYPE) Analysis & Valuation",
    date: "June 25, 2026",
    href: "https://multicoin.capital/2026/06/25/hyperliquid-hype-analysis-and-valuation/",
  },
  {
    title: "ACE Is The Place With The Helpful Value Capture",
    date: "February 10, 2026",
    href: "https://multicoin.capital/2026/02/10/ace-is-the-place-with-the-helpful-value-capture/",
  },
  {
    title: "Adverse Selection Rules Everything Around Me",
    date: "February 17, 2026",
    href: "https://multicoin.capital/2026/02/17/adverse-selection-rules-everything-around-me/",
  },
  {
    title: "Specialized Stablecoin Fintechs",
    date: "December 10, 2025",
    href: "https://multicoin.capital/2025/12/10/specialized-stablecoin-fintechs/",
  },
  {
    title: "Drift ($DRIFT) Analysis and Valuation",
    date: "September 10, 2024",
    href: "https://multicoin.capital/2024/09/10/drift-analysis-and-valuation/",
  },
  {
    title: "Unbundling Sotheby’s",
    date: "May 3, 2024",
    href: "https://multicoin.capital/2024/05/03/unbundling-sothebys/",
  },
  {
    title: "The DeFi Stack",
    date: "November 24, 2020",
    href: "https://multicoin.capital/2020/11/24/the-defi-stack/",
  },
];

const contacts = [
  {
    label: "Investment inquiries",
    email: "ir@multicoin.capital",
  },
  {
    label: "Startup pitches",
    email: "spencer@multicoin.capital",
  },
];

export default function Home() {
  return (
    <SiteChrome>
      <section>
        <p className="mb-4">
          I’m General Partner and Co-Head of Venture at Multicoin Capital. One
          of the firm’s first hires, I joined in early 2018. I was named
          Investment Partner in March 2023 and promoted to General Partner and
          Co-Head of Venture in March 2026.
        </p>
        <p className="mb-4">
          I work across public and private markets. In public markets I drive
          thesis formation, asset coverage, and on-chain diligence. In private
          markets I drive underwriting and negotiating for the firm’s funds,
          and lead deals across DeFi, DePIN infrastructure, and crypto-consumer
          applications. I was one of the key architects of the firm’s updated
          2026 investment thesis.
        </p>
        <p className="mb-4">
          I studied Accounting and Economics at Miami University. I live and
          work in New York City, speak regularly on podcasts and at industry
          events, and contribute to various industry groups.
        </p>
      </section>

      <div className="mb-2 mt-4 flex gap-4 text-[0.9rem]">
        <a href="https://x.com/SpencerApplebau" target="_blank" rel="noopener noreferrer">
          X
        </a>
        <a
          href="https://www.linkedin.com/in/spencer-applebaum-bb6466108/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://multicoin.capital/" target="_blank" rel="noopener noreferrer">
          Multicoin
        </a>
      </div>

      <section id="writing">
        <p
          className="mb-4 mt-10 text-[0.85rem] font-semibold uppercase tracking-[0.05em]"
          style={{ color: "var(--text-secondary)" }}
        >
          Writing
        </p>
        <ul>
          {writing.map((item) => (
            <li key={item.href} className="mb-6">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.1rem] font-medium no-underline"
                style={{ fontFamily: "var(--font-newsreader), Newsreader, serif" }}
              >
                {item.title}
              </a>
              <p className="mt-0.5 text-[0.85rem]" style={{ color: "var(--text-secondary)" }}>
                {item.date}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="mt-16 border-t pt-10" style={{ borderColor: "var(--border)" }}>
        <h2
          className="text-[1.35rem] font-medium tracking-tight"
          style={{ fontFamily: "var(--font-newsreader), Newsreader, serif", color: "var(--text)" }}
        >
          Contact
        </h2>
        <div className="mt-7 grid gap-8 sm:grid-cols-3">
          {contacts.map((item) => (
            <a key={item.email} href={`mailto:${item.email}`} className="group no-underline">
              <p className="text-[13px]" style={{ color: "var(--text-secondary)" }}>
                {item.label}
              </p>
              <p className="mt-2 text-[14.5px] group-hover:underline" style={{ color: "var(--text)" }}>
                {item.email}
              </p>
            </a>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
