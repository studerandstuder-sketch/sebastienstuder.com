"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Ensure form-name matches the one in /public/__forms.html
    if (!formData.get("form-name")) formData.set("form-name", "contact");

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        throw new Error(`HTTP ${res.status}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>
      <form name="contact" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        {/* Honeypot (keep hidden with CSS) */}
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <label className="block mb-2">Name</label>
        <input
          name="name"
          className="w-full border rounded p-2 mb-4"
          required
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border rounded p-2 mb-4"
        />

        <label className="block mb-2">Message</label>
        <textarea
          name="message"
          className="w-full border rounded p-2 mb-4"
          rows={6}
          required
        />

        <button className="rounded bg-black text-white px-4 py-2" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send"}
        </button>

        {status === "ok" && (
          <p className="mt-3 text-green-600">Thanks! We’ll be in touch.</p>
        )}
        {status === "error" && (
          <p className="mt-3 text-red-600">Something went wrong. Try again.</p>
        )}
      </form>
    </div>
  );
}
