import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ベトナム事業提案書 | Familia Energy - ハウディ株式会社",
  description: "Horison Tower実証実験を起点としたベトナムスマートビル市場展開戦略。CBREとZEBHubを通じた確実な市場参入計画。",
  keywords: "ベトナム, スマートビル, BMS, 省エネ, Familia Energy, CBRE, ZEBHub, ハウディ",
  authors: [{ name: "ハウディ株式会社" }],
  openGraph: {
    title: "ベトナム事業提案書 | Familia Energy",
    description: "100万円の投資で数千億円規模の市場機会へ",
    type: "website",
    locale: "ja_JP",
    siteName: "ベトナム事業提案書",
  },
  twitter: {
    card: "summary_large_image",
    title: "ベトナム事業提案書 | Familia Energy",
    description: "100万円の投資で数千億円規模の市場機会へ",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        <div className="progress-bar" id="progressBar" />
        {children}
      </body>
    </html>
  );
}