import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spencer-applebaum.vercel.app"),
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
