// app/page.jsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, BookOpenText } from "lucide-react";

const books = [
  // ... your books array here (same as before)
];

function Container({ children, className = "" }) {
  return <div className={`mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
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
      {/* … the rest of the homepage markup you already have … */}
    </main>
  );
}
