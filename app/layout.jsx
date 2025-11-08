// app/page.jsx — drop-in modern landing for your author site
// Uses Tailwind + framer-motion (already in your deps). Replace links/images as noted.

import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, BookOpenText } from "lucide-react";

const books = [
  {
    title: "Love Exposure: The Hidden Financial Risks of Marriage",
    tag: "Personal Finance · Relationships",
    blurb:
      "A clear‑eyed guide to protecting love, assets, and peace of mind—with score‑style assessments and real‑world tools.",
    href: "https://www.amazon.com/dp/B0...", // TODO: real link
    cover: "/covers/love-exposure.jpg", // TODO: place image in public/covers/
  },
  {
    title: "Aligned: The Small Steps to a Healthier, Happier Life",
    tag: "Habits · Health · Clarity",
    blurb: "Tiny, compounding habits for energy, focus, and a calmer brain.",
    href: "https://www.amazon.com/dp/B0...",
    cover: "/covers/aligned.jpg",
  },
  {
    title: "Açaí (Novel)",
    tag: "Fiction · Family · Tech",
    blurb:
      "A modern fable about a boy, a family, and the cost of ‘fixing’ what makes us human.",
    href: "https://www.amazon.com/dp/B0...",
    cover: "/covers/acai.jpg",
  },
  {
    title: "Instinct: The Animal Inside You",
    tag: "Mindset · Purpose",
    blurb: "A sharp meditation on place, nature, and the inner compass.",
    href: "https://www.amazon.com/dp/B0...",
    cover: "/covers/instinct.jpg",
  },
  {
    title: "AI FIRST",
    tag: "Technology · Society",
    blurb:
      "How we handed our humanity to machines, one decision at a time.",
    href: "https://www.amazon.com/dp/B0...",
    cover: "/covers/ai-first.jpg",
  },
];

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
      {children}
    </span>
  );
}

function Button({ as = "a", className = "", children, ...props }) {
  const Comp = as;
  return (
    <Comp
      className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400/40 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/70 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">
            Sébastien <span className="text-slate-500">Studer</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#books" className="hover:text-slate-900">Books</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button href="#subscribe" className="bg-slate-900 text-white">
              Subscribe <Mail className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Pill>
                <BookOpenText className="h-3.5 w-3.5" /> Author · Entrepreneur · Creator
              </Pill>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Writing at the intersection of <span className="underline decoration-slate-300">love</span>,
                <span className="mx-2 underline decoration-slate-300">money</span> & a life aligned.
              </h1>
              <p className="max-w-prose text-lg leading-relaxed text-slate-600">
                Essays and books blending personal stories with practical frameworks. Non‑fiction that feels like a
                conversation. Fiction that lingers.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="#books" className="bg-slate-900 text-white">
                  Explore books <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="#subscribe" className="border border-slate-200 bg-white text-slate-900">
                  Subscribe
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
                <blockquote className="text-lg italic text-slate-700">
                  “I don’t write to teach. I write to remember — and to share what balance really feels like when you
                  finally stop chasing it.”
                </blockquote>
                <div className="mt-4 text-sm text-slate-500">— Sébastien Studer</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* BOOKS */}
      <section id="books" className="border-t border-slate-100 bg-slate-50/60">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Books</h2>
              <p className="mt-2 max-w-prose text-slate-600">
                Clear, concise, and made to be useful.
              </p>
            </div>
            <Button
              href="https://www.amazon.com/stores/author/" // TODO: replace with your Author page
              className="border border-slate-200 bg-white"
            >
              View all on Amazon <ExternalLink className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((b) => (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  {/* Replace with next/image if you prefer */}
                  <img
                    src={b.cover}
                    alt={b.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="text-xs uppercase tracking-wide text-slate-500">{b.tag}</div>
                  <h3 className="text-lg font-semibold leading-snug">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{b.blurb}</p>
                  <div className="pt-1">
                    <Button href={b.href} className="bg-slate-900 text-white">
                      Amazon <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About</h2>
            </div>
            <div className="prose prose-slate max-w-none lg:col-span-2">
              <p>
                Entrepreneur, husband, father, investor, and writer — building across the U.S. and Brazil. I’ve learned
                that success without peace is just noise. My work explores awareness, action, and peace — the quiet
                pillars of a meaningful life.
              </p>
              <p>
                I write simply: clearer minds, calmer bodies, better money decisions. When I’m not writing, you’ll find
                me on a tennis court or sharing long conversations about life, simplicity, and freedom.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SUBSCRIBE */}
      <section id="subscribe" className="border-y border-slate-100 bg-white">
        <Container className="py-14 lg:py-16">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
            <div className="grid items-center gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold">Get new essays and book updates</h3>
                <p className="mt-1 text-sm text-slate-600">No noise. A few thoughtful notes each month.</p>
              </div>
              <form
                className="flex w-full items-center gap-3 md:justify-end"
                action="https://formspree.io/f/yourformid" // TODO: replace or wire to your backend
                method="POST"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/30 md:max-w-xs"
                />
                <Button as="button" type="submit" className="bg-slate-900 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Contact</h2>
              <p className="mt-2 text-slate-600">Speaking, media, rights, consulting, or just say hello.</p>
            </div>
            <div className="lg:col-span-2">
              <form
                action="https://formspree.io/f/yourformid" // TODO: swap with your form endpoint
                method="POST"
                className="grid gap-4 sm:grid-cols-2"
              >
                <input
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/30"
                  placeholder="Your name"
                  name="name"
                  required
                />
                <input
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/30"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  required
                />
                <textarea
                  className="sm:col-span-2 min-h-32 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/30"
                  placeholder="How can I help?"
                  name="message"
                  required
                />
                <div className="sm:col-span-2">
                  <Button as="button" type="submit" className="bg-slate-900 text-white">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-white">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Sébastien Studer. All rights reserved.</p>
          <div className="text-sm text-slate-500">Built with clarity, not noise.</div>
        </Container>
      </footer>
    </main>
  );
}


// ------------------------------
// app/layout.jsx — global HTML shell + metadata
// Drop this in app/layout.jsx (replace existing duplicates) 
// ------------------------------

import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: {
    default: "Sébastien Studer — Author · Entrepreneur · Creator",
    template: "%s — Sébastien Studer",
  },
  description:
    "Writing at the intersection of love, money, and a life aligned. Essays and books blending personal stories with practical frameworks.",
  metadataBase: new URL("https://sebastienstuder.com"), // ← change if different
  openGraph: {
    title: "Sébastien Studer",
    description:
      "Writing at the intersection of love, money, and a life aligned.",
    url: "/",
    siteName: "Sébastien Studer",
    images: [{ url: "/og/author-card.jpg", width: 1200, height: 630 }], // place in /public/og/
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sébastien Studer",
    description:
      "Writing at the intersection of love, money, and a life aligned.",
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
      <body className={`${inter.variable} bg-white text-slate-900 antialiased`}>{children}</body>
    </html>
  );
}
