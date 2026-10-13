import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ferrox-engine.vercel.app"),
  title: "Ferrox Engine | High-Frequency Order Matching",
  description:
    "A low-latency order matching engine in Rust. Sub-microsecond P99 (0.83–1.06 µs, TSC-timed), 4.4M orders/sec, zero heap allocation on the hot path. Model-checked, fault-injected, sanitized and fuzzed.",
  keywords: [
    "Rust",
    "Matching Engine",
    "HFT",
    "Low Latency",
    "Systems Engineering",
    "Lock-Free",
    "Memory Model",
    "Fault Injection",
    "Verification",
  ],
  authors: [{ name: "Anh Tran" }],
  openGraph: {
    title: "Ferrox Engine | High-Frequency Order Matching",
    description:
      "Sub-microsecond determinism. P99 0.83–1.06 µs and 4.4M orders/sec, verified under loom, Miri, TSan and fault injection.",
    type: "website",
    url: "https://ferrox-engine.vercel.app",
  },
  twitter: {
    card: "summary",
    title: "Ferrox Engine | High-Frequency Order Matching",
    description:
      "Sub-microsecond determinism. P99 0.83–1.06 µs and 4.4M orders/sec, verified under loom, Miri, TSan and fault injection.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-slate-300 selection:bg-blue-900/50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
