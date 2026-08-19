import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

const investments = [
  {
    name: "Hyperliquid",
    href: "https://multicoin.capital/2026/06/25/hyperliquid-hype-analysis-and-valuation/",
    text: "HYPE is a large position in Multicoin’s liquid fund. Applebaum was the primary champion of the investment. He published a public analysis on June 25, 2026.",
  },
  {
    name: "Solana",
    href: "https://multicoin.capital/2025/01/22/the-solana-thesis-internet-capital-markets/",
    text: "Multicoin has been investing in SOL and the Solana ecosystem since the seed round in May 2018. Applebaum was instrumental in the investment.",
  },
  {
    name: "Dune",
    href: "https://multicoin.capital/2021/08/12/dune-series-a/",
    text: "On August 12, 2021, Multicoin invested in Dune Analytics’ $8 million Series A, after participating in the seed. Applebaum was instrumental in the investment.",
  },
  {
    name: "fun.xyz",
    href: "https://www.gunder.com/en/news-insights/client-news/multicoin-capital-co-leads-funs-dollar72-million-series-a",
    text: "On May 1, 2026, Multicoin co-led a $72 million Series A. As Applebaum noted at the time, Multicoin has led two rounds in fun.xyz.",
  },
  {
    name: "BAXUS",
    href: "https://multicoin.capital/2024/05/03/unbundling-sothebys/",
    text: "On May 3, 2024, Multicoin led a $5 million seed. Applebaum announced the round.",
  },
  {
    name: "Jito",
    href: "https://multicoin.capital/2025/03/04/jito-asset-report/",
    text: "Multicoin has a significant position in JTO across its hedge and venture funds. Applebaum was instrumental in the investment.",
  },
];

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

const speaking = [
  {
    title: "Value Capture and Defensibility in DeFi",
    detail: "Multicoin Summit, October 10, 2023",
    href: "https://multicoin.capital/2023/10/06/discussions-from-the-2023-multicoin-summit/",
  },
  {
    title: "Improving Capital Efficiency in DeFi",
    detail: "Multicoin Summit, November 2024",
    href: "https://multicoin.capital/2024/12/13/highlights-from-the-2024-multicoin-summit/",
  },
  {
    title: "The Opportunities for Specialized Stablecoin Fintechs",
    detail: "Multicoin Summit, December 11, 2025",
    href: "https://www.confbase.com/speakers/spencer-applebaum",
  },
  {
    title: "Crypto’s Rebirth Moment",
    detail: "Lightspeed, March 10, 2026",
    href: "https://solana.com/es/podcasts/lightspeed/episodes/crypto-s-rebirth-moment-tushar-shayon-and-spencer-2026-03-10",
  },
  {
    title: "Multicoin’s Crypto Mega Thesis 2.0",
    detail: "DAS New York, March 26, 2026",
    href: "https://www.confbase.com/speakers/spencer-applebaum",
  },
  {
    title: "Bermuda Digital Finance Forum",
    detail: "Hamilton, May 14, 2026",
    href: "https://www.royalgazette.com/international-business/business/article/20260514/applebaum-digital-assets-reshaping-capital-markets/",
  },
  {
    title: "Digital Assets’ Next Big Move",
    detail: "SALT Digital Finance Forum, June 3, 2026",
    href: "https://www.youtube.com/watch?v=78NJ66koFHk",
  },
  {
    title: "Multicoin’s HYPE Thesis",
    detail: "Hyperliquid Summit, 2026",
    href: "https://www.youtube.com/watch?v=hK55k4ob5AA",
  },
  {
    title: "Out East Summit",
    detail: "The TIE, July 20, 2026",
    href: "https://www.confbase.com/speakers/spencer-applebaum",
  },
  {
    title: "TOKEN2049 Dubai",
    detail: "April 21, 2027, upcoming",
    href: "https://www.confbase.com/speakers/spencer-applebaum",
  },
];

const contacts = [
  {
    label: "Press and speaking",
    email: "johnrobert@multicoin.capital",
  },
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
    <div>
      <header className="mb-12 flex items-center justify-between border-b pb-4" style={{ borderColor: "var(--border)" }}>
        <span
          className="text-[1.1rem] font-medium leading-none"
          style={{ fontFamily: "var(--font-newsreader), Newsreader, serif", color: "var(--text)" }}
        >
          Spencer Applebaum
        </span>
        <nav className="flex flex-wrap items-center justify-end gap-5 text-[0.9rem]" style={{ color: "var(--text-secondary)" }}>
          <a href="#writing" className="no-underline hover:text-[var(--text)]">
            Writing
          </a>
          <a href="#speaking" className="no-underline hover:text-[var(--text)]">
            Speaking
          </a>
          <a href="#contact" className="no-underline hover:text-[var(--text)]">
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

      <Image
        src="/spencer.jpg"
        alt="Spencer Applebaum"
        width={700}
        height={700}
        priority
        className="mb-8 h-[148px] w-[148px] rounded-[4px] object-cover object-top"
      />

      <section>
        <p className="mb-4">
          Spencer Applebaum is General Partner and Co-Head of Venture at
          Multicoin Capital. One of the firm’s first hires, he joined in early
          2018. He was named Investment Partner in March 2023 and promoted to
          General Partner and Co-Head of Venture in March 2026.
        </p>
        <p className="mb-4">
          He works across public and private markets. In public markets he
          drives thesis formation, asset coverage, and on-chain diligence. In
          private markets he drives underwriting and negotiating for the
          firm’s funds, and leads deals across DeFi, DePIN infrastructure,
          and crypto-consumer applications. He was one of the key architects
          of the firm’s updated 2026 investment thesis.
        </p>
        <p className="mb-4">
          He studied Accounting and Economics at Miami University. He lives
          and works in New York City, speaks regularly on podcasts and at
          industry events, and contributes to various industry groups.
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

      <section>
        <p
          className="mb-4 mt-10 text-[0.85rem] font-semibold uppercase tracking-[0.05em]"
          style={{ color: "var(--text-secondary)" }}
        >
          Selected investments
        </p>
        <ul>
          {investments.map((item) => (
            <li key={item.name} className="mb-6">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.1rem] font-medium no-underline"
                style={{ fontFamily: "var(--font-newsreader), Newsreader, serif" }}
              >
                {item.name}
              </a>
              <p className="mt-1 text-[0.9rem]" style={{ color: "var(--text-secondary)" }}>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-[0.9rem]" style={{ color: "var(--text-secondary)" }}>
          The firm’s full list of investments is on the{" "}
          <a
            href="https://multicoin.capital/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            portfolio page
          </a>
          .
        </p>
      </section>

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

      <section id="speaking">
        <p
          className="mb-4 mt-10 text-[0.85rem] font-semibold uppercase tracking-[0.05em]"
          style={{ color: "var(--text-secondary)" }}
        >
          Speaking
        </p>
        <ul>
          {speaking.map((item) => (
            <li key={item.title} className="mb-6">
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
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact">
        <p
          className="mb-4 mt-10 text-[0.85rem] font-semibold uppercase tracking-[0.05em]"
          style={{ color: "var(--text-secondary)" }}
        >
          Contact
        </p>
        <div className="space-y-5">
          {contacts.map((item) => (
            <div key={item.email}>
              <p className="text-[0.85rem]" style={{ color: "var(--text-secondary)" }}>
                {item.label}
              </p>
              <a href={`mailto:${item.email}`}>{item.email}</a>
            </div>
          ))}
        </div>
      </section>

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
