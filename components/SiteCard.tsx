import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import MediaDisplay from "./MediaDisplay";
import type { ProjectSite } from "@/lib/sites-data";

interface SiteCardProps {
  site: ProjectSite;
  index: number;
}

export default function SiteCard({ site, index }: SiteCardProps) {
  return (
    <div className="group grid grid-cols-1 gap-8 border-t border-hairline py-12 first:border-t-0 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-1">
        <span className="font-display text-sm text-sand-dim">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <div className="md:col-span-5">
        {site.heroMedia ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-hairline bg-raised">
            <MediaDisplay media={site.heroMedia} alt={`${site.name} Hero`} />
          </div>
        ) : (
          <PlaceholderImage
            label={site.heroImagePlaceholder}
            aspect="aspect-[4/3]"
          />
        )}
      </div>

      <div className="flex flex-col justify-between md:col-span-6">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-sm border border-sand/30 px-3 py-1 font-body text-[11px] uppercase tracking-widest2 text-sand">
              {site.statusTag}
            </span>
            <span className="font-body text-[11px] uppercase tracking-widest2 text-muted">
              {site.status}
            </span>
          </div>

          <h3 className="mt-4 font-display text-2xl text-ivory sm:text-3xl">
            {site.name}
          </h3>
          <p className="mt-1 font-body text-sm text-sand-dim">
            {site.location}
          </p>

          <p className="mt-5 max-w-xl font-body text-[15px] leading-relaxed text-muted">
            {site.description}
          </p>

          {(site.totalUnits > 0 || site.typologies > 0) && (
            <div className="mt-6 flex gap-8">
              {site.totalUnits > 0 && (
                <div>
                  <span className="font-display text-xl text-ivory">
                    {site.totalUnits}
                  </span>
                  <p className="font-body text-xs uppercase tracking-widest2 text-muted">
                    Units
                  </p>
                </div>
              )}
              {site.typologies > 0 && (
                <div>
                  <span className="font-display text-xl text-ivory">
                    {site.typologies}
                  </span>
                  <p className="font-body text-xs uppercase tracking-widest2 text-muted">
                    Typologies
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <Link
          href={`/projects#${site.slug}`}
          className="mt-8 inline-flex w-fit items-center gap-2 border-b border-sand/40 pb-1 font-body text-sm uppercase tracking-widest2 text-sand transition-colors hover:border-sand"
        >
          View Site
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
