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
  title: "Ferrox Engine | High-Frequency Order Matching",
  description:
    "A low-latency order matching engine in Rust. 500ns P99 latency, 4.7M orders/sec, zero heap allocation on the hot path.",
  keywords: [
    "Rust",
    "Matching Engine",
    "HFT",
    "Low Latency",
    "Systems Engineering",
  ],
  authors: [{ name: "Anh Tran" }],
  openGraph: {
    title: "Ferrox Engine | High-Frequency Order Matching",
    description:
      "Sub-microsecond determinism. 500ns P99 latency and 4.7M orders/sec.",
    type: "website",
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
