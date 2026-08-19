import Image from "next/image";

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
    <div className="classic-shell min-h-screen">
      <div className="h-px bg-gold" />

      <div className="mx-auto max-w-[760px] px-6 pb-20 pt-12 sm:px-8 sm:pt-16">
        <header className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-12">
          <Image
            src="/spencer.jpg"
            alt="Spencer Applebaum"
            width={700}
            height={700}
            priority
            className="h-[200px] w-[200px] shrink-0 border border-rule object-cover object-top"
          />
          <div className="pb-0.5">
            <h1 className="font-serif text-[2.15rem] font-medium leading-[1.15] tracking-tight text-ink sm:text-[2.55rem]">
              Spencer Applebaum
            </h1>
            <p className="mt-4 font-serif text-[1.25rem] font-normal leading-snug text-ink">
              General Partner &amp; Co-Head of Venture
            </p>
            <p className="mt-1 font-serif text-[1.05rem] font-normal text-mute">
              Multicoin Capital
            </p>
          </div>
        </header>

        <section className="mt-14 space-y-5 border-t border-rule pt-10 text-[16.5px] leading-[1.65] text-ink sm:mt-16">
          <p>
            Spencer Applebaum is General Partner and Co-Head of Venture at
            Multicoin Capital. One of the firm’s first hires, he joined in early
            2018. He was named Investment Partner in March 2023 and promoted to
            General Partner and Co-Head of Venture in March 2026.
          </p>
          <p>
            He works across public and private markets. In public markets he
            drives thesis formation, asset coverage, and on-chain diligence. In
            private markets he drives underwriting and negotiating for the
            firm’s funds, and leads deals across DeFi, DePIN infrastructure,
            and crypto-consumer applications. He was one of the key architects
            of the firm’s updated 2026 investment thesis.
          </p>
          <p>
            He studied Accounting and Economics at Miami University. He lives
            and works in New York City, speaks regularly on podcasts and at
            industry events, and contributes to various industry groups.
          </p>
        </section>

        <section className="mt-16 border-t border-rule pt-10">
          <h2 className="font-serif text-[1.35rem] font-medium tracking-tight text-ink">
            Selected investments
          </h2>
          <ul className="mt-7 space-y-7">
            {investments.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-ink hover:text-navy"
                >
                  {item.name}
                </a>
                <p className="mt-1.5 text-[15px] leading-relaxed text-mute">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[14.5px] leading-relaxed text-mute">
            He was instrumental in several of the firm’s investments, including
            Fuse, Geodnet, Helium, Jito, Kamino, Render, and Sei.
            The firm’s full list of investments is on
            the{" "}
            <a
              href="https://multicoin.capital/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-rule underline-offset-[0.18em] hover:text-navy"
            >
              portfolio page
            </a>
            .
          </p>
        </section>

        <section className="mt-16 border-t border-rule pt-10">
          <h2 className="font-serif text-[1.35rem] font-medium tracking-tight text-ink">
            Writing
          </h2>
          <ul className="mt-5">
            {writing.map((item) => (
              <li key={item.href} className="border-b border-rule first:border-t">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline justify-between gap-6 py-3.5 text-[15px] text-ink hover:text-navy"
                >
                  <span className="leading-snug">{item.title}</span>
                  <span className="shrink-0 tabular-nums text-mute">
                    {item.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-rule pt-10">
          <h2 className="font-serif text-[1.35rem] font-medium tracking-tight text-ink">
            Speaking
          </h2>
          <ul className="mt-5">
            {speaking.map((item) => (
              <li
                key={item.title}
                className="border-b border-rule first:border-t"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="text-[15px] leading-snug text-ink hover:text-navy">
                    {item.title}
                  </span>
                  <span className="shrink-0 text-[13.5px] text-mute">
                    {item.detail}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-rule pt-10">
          <h2 className="font-serif text-[1.35rem] font-medium tracking-tight text-ink">
            Contact
          </h2>
          <div className="mt-7 grid gap-8 sm:grid-cols-3">
            {contacts.map((item) => (
              <a key={item.email} href={`mailto:${item.email}`} className="group">
                <p className="text-[13px] text-mute">
                  {item.label}
                </p>
                <p className="mt-2 text-[14.5px] text-ink group-hover:underline">
                  {item.email}
                </p>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t border-rule pt-8">
          <div className="flex items-center justify-between text-[13.5px] text-mute">
            <a
              href="https://multicoin.capital/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy"
            >
              Multicoin Capital
            </a>
            <div className="flex gap-6">
              <a
                href="https://x.com/SpencerApplebau"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy"
              >
                X
              </a>
              <a
                href="https://www.linkedin.com/in/spencer-applebaum-bb6466108/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="mt-4 flex gap-4 text-[12px] text-mute/70">
            <a
              href="https://multicoin.capital/terms/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mute"
            >
              Terms
            </a>
            <a
              href="https://multicoin.capital/disclosures/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mute"
            >
              Disclosures
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
