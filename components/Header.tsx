"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/70 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-display text-xl tracking-wide text-ivory">
            Summer
          </span>
          <span className="hidden h-4 w-px bg-hairline sm:block" />
          <span className="hidden font-body text-[11px] uppercase tracking-widest2 text-muted sm:block">
            Real Estate
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm uppercase tracking-widest2 text-muted transition-colors hover:text-sand"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://t.me/+251981789498"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-sand/40 px-5 py-2.5 font-body text-sm uppercase tracking-widest2 text-sand transition-colors hover:border-sand hover:bg-sand/10"
          >
            Telegram
          </a>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-ivory md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-ink px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline/60 py-4 font-body text-sm uppercase tracking-widest2 text-muted transition-colors hover:text-sand"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://t.me/+251981789498"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-sm border border-sand/40 px-5 py-3 text-center font-body text-sm uppercase tracking-widest2 text-sand"
            >
              Telegram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
