/* Clean restart: minimal Next.js page using only Tailwind (no shadcn) */
"use client";

import { useEffect } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

const AMAZON_AUTHOR_URL =
  "https://www.amazon.com/stores/Sebastien-Studer/author/B0FWD1YYGS?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true&ccs_id=d1d7f8d8-5d07-4cda-bbae-f4fdec7eebd0";

const copy = {
  hero: {
    kicker: "Author · Entrepreneur · Creator",
    title: "Sébastien Studer",
    subtitle:
      "Writing at the intersection of love, money, and a life aligned. Essays and books that blend personal stories with practical frameworks.",
  },
  about: {
    heading: "About the author",
    bio: `Sébastien Studer has lived many lives in one. Entrepreneur, husband, father, investor, and writer — he has built, failed, rebuilt, and learned that success without peace is just noise.

Born in France and living between the United States and Brazil, Sébastien has spent years balancing work, health, and family across different worlds and time zones. Through his career in energy and real estate, and his ventures in personal development, he discovered one universal truth: peace begins with awareness — in our health, our habits, and our hearts.

After years of chasing results, Sébastien began simplifying everything — his routines, his priorities, his mindset. He realized that balance doesn’t come from doing more, but from doing less of what doesn’t matter and more of what makes you feel alive. His first priority is peace of mind. He takes time to observe, analyze, and act toward a healthier, happier, and freer life — guided by awareness, action, and peace, the three quiet pillars that hold a meaningful life together.

With clarity, transparency, and alignment, Sébastien continues to humbly improve his relationships, his mind, his health, and his finances — proving that harmony is not found, but created.

When he’s not writing or working, Sébastien enjoys tennis, traveling with his family, and long conversations about life, simplicity, and freedom.

“I don’t write to teach. I write to remember — and to share what balance really feels like when you finally stop chasing it.”

— Sébastien Studer`,
    highlights: ["Miami-based", "Non‑fiction & fiction", "YouTube & podcasts", "EN/FR/PT"],
  },
  books: {
    heading: "Books",
    items: [
      {
        title: "Love Exposure: The Hidden Financial Risks of Marriage",
        tag: "Personal Finance · Relationships",
        blurb:
          "A clear‑eyed guide to protecting love, assets, and peace of mind—with score‑style assessments and real‑world tools.",
        img: "/covers/love-exposure.jpg",
        store: AMAZON_AUTHOR_URL,
      },
      {
        title: "Aligned: The Small Steps to a Healthier, Happier Life",
        tag: "Habits · Health · Clarity",
        blurb: "Tiny, compounding habits for energy, focus, and a calmer brain.",
        img: "/covers/aligned.jpg",
        store: AMAZON_AUTHOR_URL,
      },
      {
        title: "Açaí (Novel)",
        tag: "Fiction · Family · Tech",
        blurb:
          "A modern fable about a boy, a family, and the cost of ‘fixing’ what makes us human.",
        img: "/covers/acai.png",
        store: AMAZON_AUTHOR_URL,
      },
      {
        title: "Instinct: The Animal Inside You",
        tag: "Mindset · Purpose",
        blurb: "A sharp meditation on place, nature, and the inner compass.",
        img: "/covers/instinct.jpg",
        store: AMAZON_AUTHOR_URL,
      },
      {
        title: "AI FIRST",
        tag: "Technology · Society",
        blurb:
          "How we handed our humanity to machines, one decision at a time.",
        img: "/covers/ai-first.jpg",
        store: AMAZON_AUTHOR_URL,
      },
    ],
  },
};

export default function Page() {
  // JSON-LD Person
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sébastien Studer",
      url: "https://sebastienstuder.com",
      jobTitle: "Author",
      sameAs: [AMAZON_AUTHOR_URL],
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.innerHTML = JSON.stringify(data);
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);

  return (
    <main className="bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold">Sébastien Studer</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#books" className="hover:text-slate-700">Books</a>
            <a href="#about" className="hover:text-slate-700">About</a>
            <a
              href={AMAZON_AUTHOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
            >
              Amazon <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-10 items-center">
          {/* Text */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {copy.hero.kicker}
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
              {copy.hero.title}
            </h1>
            <p className="mt-3 text-lg text-slate-700 max-w-prose">
              {copy.hero.subtitle}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#books" className="inline-flex items-center rounded-2xl px-5 py-2.5 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800">
                Explore Books <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center rounded-2xl px-5 py-2.5 text-sm font-medium border border-slate-300 hover:bg-slate-50">
                About
              </a>
            </div>
          </div>

          {/* Photo card (fixed small) */}
          <aside className="w-full">
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <img
                src="/author.jpg"
                alt="Sébastien Studer"
                className="w-full h-[220px] object-cover"
              />
            </div>
            {/* Newsletter (Netlify form) */}
            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              className="mt-4 flex gap-2"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <input
                required
                name="email"
                type="email"
                placeholder="Your email"
                className="flex-1 h-10 rounded-xl border border-slate-300 px-3 text-sm"
              />
              <button type="submit" className="h-10 rounded-xl px-4 text-sm bg-slate-900 text-white hover:bg-slate-800">
                Subscribe
              </button>
            </form>
          </aside>
        </div>
      </section>

      {/* Books */}
      <section id="books" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{copy.books.heading}</h2>
            <p className="text-slate-600 mt-1">Non‑fiction that feels like a conversation. Fiction that lingers.</p>
          </div>
          <a
            href={AMAZON_AUTHOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm inline-flex items-center gap-1 hover:underline"
          >
            View all on Amazon <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {copy.books.items.map((b, i) => (
            <div key={i} className="w-full max-w-[210px]">
              <div className="aspect-[2/3] w-full overflow-hidden rounded-xl bg-slate-100">
                <img src={b.img} alt={`${b.title} cover`} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-3 text-sm font-semibold leading-snug">{b.title}</h3>
              <p className="mt-1 text-xs text-slate-600">{b.tag}</p>
              <p className="mt-2 text-sm text-slate-700 line-clamp-2">{b.blurb}</p>
              <div className="mt-3">
                <a href={b.store} target="_blank" rel="noopener noreferrer" className="inline-block text-sm px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50">
                  Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">About</h2>
        <div className="mt-3 text-slate-700 whitespace-pre-line leading-relaxed">
          {copy.about.bio}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="mt-4 grid gap-3 max-w-xl"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" placeholder="Your name" className="h-10 rounded-xl border border-slate-300 px-3 text-sm" />
          <input name="email" type="email" placeholder="Your email" className="h-10 rounded-xl border border-slate-300 px-3 text-sm" />
          <textarea name="message" rows={5} placeholder="How can I help?" className="rounded-xl border border-slate-300 px-3 py-2 text-sm" />
          <button type="submit" className="h-10 rounded-xl px-4 text-sm bg-slate-900 text-white hover:bg-slate-800 w-fit">
            Send Message
          </button>
        </form>
      </section>

      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col gap-3 md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Sébastien Studer. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#books">Books</a>
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href={AMAZON_AUTHOR_URL} target="_blank" rel="noopener noreferrer">Amazon</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
