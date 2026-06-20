import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-7xl text-sand-dim">404</span>
      <h1 className="mt-4 font-display text-2xl text-ivory">
        This page isn&apos;t built yet.
      </h1>
      <p className="mt-3 max-w-sm font-body text-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-sand px-7 py-3.5 font-body text-sm uppercase tracking-widest2 text-ink transition-colors hover:bg-ivory"
      >
        Back to Home
      </Link>
    </section>
  );
}
