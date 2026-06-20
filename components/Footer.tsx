import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "@/lib/sites-data";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-display text-xl text-ivory">
              Summer Real Estate
            </span>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-muted">
              Premium residential developments designed for modern living —
              built on trust, driven by connection.
            </p>
            <p className="mt-4 font-display text-sm italic text-sand-dim">
              &ldquo;ባላገር በሃገር&rdquo;
            </p>
          </div>

          <div>
            <h3 className="font-body text-xs uppercase tracking-widest2 text-sand">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/projects"
                  className="font-body text-sm text-muted transition-colors hover:text-ivory"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-body text-sm text-muted transition-colors hover:text-ivory"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm text-muted transition-colors hover:text-ivory"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs uppercase tracking-widest2 text-sand">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sand-dim" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-body text-sm text-muted transition-colors hover:text-ivory"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sand-dim" />
                <a
                  href={contactInfo.phoneHref}
                  className="font-body text-sm text-muted transition-colors hover:text-ivory"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand-dim" />
                <span className="font-body text-sm text-muted">
                  {contactInfo.address.join(", ")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 sm:flex-row">
          <p className="font-body text-xs text-muted">
            © {new Date().getFullYear()} Summer Real Estate. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
