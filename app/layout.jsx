import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: {
    default: "Sébastien Studer — Author · Entrepreneur · Creator",
    template: "%s — Sébastien Studer",
  },
  description:
    "Writing at the intersection of love, money, and a life aligned. Essays and books blending personal stories with practical frameworks.",
  metadataBase: new URL("https://sebastienstuder.com"),
  openGraph: {
    title: "Sébastien Studer",
    description: "Writing at the intersection of love, money, and a life aligned.",
    url: "/",
    siteName: "Sébastien Studer",
    images: [{ url: "/og/author-card.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sébastien Studer",
    description: "Writing at the intersection of love, money, and a life aligned.",
    images: ["/og/author-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
