import type { Metadata } from "next";
import { Geist, Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spencerapplebaum.com"),
  title: "Spencer Applebaum — General Partner, Co-Head of Venture, Multicoin Capital",
  description:
    "Spencer Applebaum is General Partner and Co-Head of Venture at Multicoin Capital. He specializes in DeFi protocols, DePIN infrastructure, and crypto-consumer applications.",
  openGraph: {
    title: "Spencer Applebaum",
    description: "General Partner, Co-Head of Venture, Multicoin Capital",
    type: "website",
    images: [{ url: "/spencer.jpg", width: 700, height: 700 }],
  },
  twitter: {
    card: "summary",
    title: "Spencer Applebaum",
    description: "General Partner, Co-Head of Venture, Multicoin Capital",
    images: ["/spencer.jpg"],
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${inter.variable} ${newsreader.variable} ${geist.variable} antialiased`}>
        <div className="new-shell">
          <div className="new-shell-inner">{children}</div>
        </div>
      </body>
    </html>
  );
}
