import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";
import SiteCard from "@/components/SiteCard";
import DeliveredSites from "@/components/DeliveredSites";
import { sites, companyStats } from "@/lib/sites-data";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="contour-field" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-16 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-28 lg:pt-24">
          {/* Vertical Amharic strapline */}
          <div className="hidden lg:col-span-1 lg:flex lg:items-start lg:justify-center">
            <span
              className="font-display text-sm italic tracking-widest text-sand-dim"
              style={{ writingMode: "vertical-rl" }}
            >
              ባላገር በሃገር
            </span>
          </div>

          <div className="fade-up lg:col-span-6">
            <span className="font-body text-xs uppercase tracking-widest2 text-sand">
              Premium Residential Developments
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-[3.4rem]">
              Own Your Home
              <br />
              in Addis Ababa
            </h1>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-muted">
              Away from home, but your home is always here, waiting for you.
              Two developments. One promise: transparent, structured, and
              built for the diaspora.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-sand px-7 py-3.5 font-body text-sm uppercase tracking-widest2 text-ink transition-colors hover:bg-ivory"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-hairline px-7 py-3.5 font-body text-sm uppercase tracking-widest2 text-ivory transition-colors hover:border-sand hover:text-sand"
              >
                Get in Touch
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-hairline pt-8 sm:max-w-md">
              <div>
                <span className="font-display text-3xl text-ivory">
                  {companyStats.unitsDelivered}
                </span>
                <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-muted">
                  Units Delivered
                </p>
              </div>
              <div>
                <span className="font-display text-3xl text-ivory">6</span>
                <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-muted">
                  Units Remaining
                </p>
              </div>
              <div>
                <span className="font-display text-3xl text-ivory">
                  {companyStats.premiumProjects}
                </span>
                <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-muted">
                  Premium Projects
                </p>
              </div>
            </div>
          </div>

          <div className="fade-up grid grid-cols-2 gap-4 lg:col-span-5">
            <div className="relative min-h-[300px] w-full rounded-sm overflow-hidden">
              <Image
                src="/images/B1.jpg"
                alt="Summer Bulgaria site 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative min-h-[300px] w-full rounded-sm overflow-hidden">
              <Image
                src="/images/B2.jpg"
                alt="Summer Bulgaria site 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Sites */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col gap-3">
            <span className="font-body text-xs uppercase tracking-widest2 text-sand">
              Two Active Sites
            </span>
            <h2 className="font-display text-3xl text-ivory sm:text-4xl">
              Our Projects
            </h2>
            <p className="max-w-xl font-body text-[15px] leading-relaxed text-muted">
              Each site is selected for its location, structured for
              transparency, and built to the same standard that delivered our
              completed developments.
            </p>
          </div>

          <div className="mt-4">
            {sites.map((site, i) => (
              <SiteCard key={site.slug} site={site} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Delivered Sites */}
      <DeliveredSites />

      {/* Promise / About teaser */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <span className="font-body text-xs uppercase tracking-widest2 text-sand">
                Our Promise
              </span>
              <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
                Why Summer Real Estate
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-body text-[15px] leading-relaxed text-muted">
                Founded by diaspora professionals in Dallas, USA, we bring
                decades of international real estate experience to create a
                bridge between you and home. Every property is built with
                your trust in mind — transparent pricing, proven delivery,
                and a genuine connection to Ethiopian culture and
                opportunity.
              </p>
              <p className="mt-6 font-display text-lg italic text-sand-dim">
                &ldquo;ባላገር በሃገር&rdquo; — Your home has always been waiting
                for you.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex w-fit items-center gap-2 border-b border-sand/40 pb-1 font-body text-sm uppercase tracking-widest2 text-sand transition-colors hover:border-sand"
              >
                Learn About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
