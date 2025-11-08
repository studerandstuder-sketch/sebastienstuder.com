// app/layout.jsx
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sébastien Studer — Author",
  description:
    "Official website of Sébastien Studer — author, entrepreneur, and creator. Writing at the intersection of love, money, and a life aligned.",
  authors: [{ name: "Sébastien Studer", url: "https://sebastienstuder.com" }],
  openGraph: {
    title: "Sébastien Studer — Author",
    description:
      "Author of Love Exposure, Aligned, and Açaí. Essays and books that blend personal stories with practical frameworks.",
    url: "https://sebastienstuder.com",
    siteName: "Sébastien Studer",
    images: [{ url: "/author.jpg", width: 1200, height: 630, alt: "Sébastien Studer portrait" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sébastien Studer — Author",
    description: "Writing at the intersection of love, money, and a life aligned.",
    images: ["/author.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-white text-slate-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
