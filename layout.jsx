// app/layout.jsx
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Sebastien Studer",
  description: "Author & projects",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
