import { Check } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";
import MediaDisplay from "@/components/MediaDisplay";
import SiteMap from "@/components/SiteMap";
import DeliveredSites from "@/components/DeliveredSites";
import { sites } from "@/lib/sites-data";

export const metadata = {
  title: "Our Projects — Summer Real Estate",
  description:
    "Summer Bulgaria (Behind AU) and Summer Abtes (British Embassy) — two premium residential developments in Addis Ababa.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="contour-field" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <span className="font-body text-xs uppercase tracking-widest2 text-sand">
            Where We Build
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ivory sm:text-5xl">
            Our Projects
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted">
            Every Summer Real Estate site is chosen for one priority: giving
            diaspora homeowners a secure, valuable, and connected place to
            live. &ldquo;ባላገር በሃገር&rdquo; guides every development.
          </p>
        </div>
      </section>

      {sites.map((site, i) => (
        <section
          key={site.slug}
          id={site.slug}
          className="scroll-mt-20 border-b border-hairline"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-sm text-sand-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="rounded-sm border border-sand/30 px-3 py-1 font-body text-[11px] uppercase tracking-widest2 text-sand">
                {site.statusTag}
              </span>
              <span className="font-body text-[11px] uppercase tracking-widest2 text-muted">
                {site.status}
              </span>
            </div>

            <h2 className="mt-5 font-display text-3xl text-ivory sm:text-4xl">
              {site.name}
            </h2>
            <p className="mt-2 font-body text-sm text-sand-dim">
              {site.location}
            </p>

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
              {/* Gallery */}
              <div className="lg:col-span-7">
                {site.heroMedia ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-hairline bg-raised">
                    <MediaDisplay media={site.heroMedia} alt={`${site.name} Hero`} />
                  </div>
                ) : (
                  <PlaceholderImage
                    label={site.heroImagePlaceholder}
                    aspect="aspect-[16/10]"
                  />
                )}

                {site.galleryMedia && site.galleryMedia.length > 0 ? (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {site.galleryMedia.map((media, idx) => (
                      <div key={idx} className="relative aspect-square w-full overflow-hidden rounded-sm border border-hairline bg-raised">
                        <MediaDisplay media={media} alt={`${site.name} Gallery ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                      <PlaceholderImage
                        key={idx}
                        label={`Gallery ${idx + 1}`}
                        aspect="aspect-square"
                      />
                    ))}
                  </div>
                )}

                {site.hasMap && site.mapEmbedSrc && (
                  <div className="mt-8">
                    <h3 className="mb-4 font-body text-xs uppercase tracking-widest2 text-sand">
                      Location
                    </h3>
                    <SiteMap
                      embedSrc={site.mapEmbedSrc}
                      locationLabel={site.location}
                    />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="lg:col-span-5">
                <p className="font-body text-[15px] leading-relaxed text-muted">
                  {site.longDescription}
                </p>

                {(site.totalUnits > 0 || site.typologies > 0) && (
                  <div className="mt-8 grid grid-cols-2 gap-6 border-y border-hairline py-6">
                    {site.totalUnits > 0 && (
                      <div>
                        <span className="font-display text-2xl text-ivory">
                          {site.totalUnits}
                        </span>
                        <p className="font-body text-xs uppercase tracking-widest2 text-muted">
                          Total Units
                        </p>
                      </div>
                    )}
                    {site.typologies > 0 && (
                      <div>
                        <span className="font-display text-2xl text-ivory">
                          {site.typologies}
                        </span>
                        <p className="font-body text-xs uppercase tracking-widest2 text-muted">
                          Typologies
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-8">
                  <h3 className="font-body text-xs uppercase tracking-widest2 text-sand">
                    Premium Features
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {site.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 font-body text-sm text-muted"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/251974747450"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sand px-7 py-3.5 font-body text-sm uppercase tracking-widest2 text-ink transition-colors hover:bg-ivory"
                  >
                    Register Interest
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-hairline px-7 py-3.5 font-body text-sm uppercase tracking-widest2 text-ivory transition-colors hover:border-sand hover:text-sand"
                  >
                    Schedule Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <DeliveredSites />
    </>
  );
}
