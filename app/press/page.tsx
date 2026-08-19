import type { Metadata } from "next";
import Image from "next/image";
import { SiteChrome } from "../site-chrome";

export const metadata: Metadata = {
  title: "Press — Spencer Applebaum",
  description:
    "Press and speaking for Spencer Applebaum, General Partner and Co-Head of Venture at Multicoin Capital.",
};

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

export default function Press() {
  return (
    <SiteChrome>
      <div className="relative mb-8 inline-block">
        <Image
          src="/spencer.jpg"
          alt="Spencer Applebaum"
          width={700}
          height={700}
          priority
          className="h-[148px] w-[148px] rounded-[4px] object-cover object-top"
        />
        <a
          href="/spencer.jpg"
          download="spencer-applebaum.jpg"
          aria-label="Download headshot"
          title="Download headshot"
          className="absolute bottom-1.5 right-1.5 flex h-7 w-7 items-center justify-center rounded-full no-underline shadow-sm"
          style={{ background: "rgba(255,255,255,0.94)", color: "#1a1a1a" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>

      <section>
        <p className="mb-4">
          Spencer Applebaum is General Partner and Co-Head of Venture at
          Multicoin Capital. He joined in 2018 as one of the firm’s first
          hires and helped grow the firm’s AUM into the billions.
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

      <section>
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

      <section className="mt-16 border-t pt-10" style={{ borderColor: "var(--border)" }}>
        <h2
          className="text-[1.35rem] font-medium tracking-tight"
          style={{ fontFamily: "var(--font-newsreader), Newsreader, serif", color: "var(--text)" }}
        >
          Contact
        </h2>
        <div className="mt-7 grid gap-8 sm:grid-cols-3">
          <a href="mailto:johnrobert@multicoin.capital" className="group no-underline">
            <p className="text-[13px]" style={{ color: "var(--text-secondary)" }}>
              Press and speaking
            </p>
            <p className="mt-2 text-[14.5px] group-hover:underline" style={{ color: "var(--text)" }}>
              johnrobert@multicoin.capital
            </p>
          </a>
        </div>
      </section>
    </SiteChrome>
  );
}
