import { CheckCircle2 } from "lucide-react";
import { deliveredSites } from "@/lib/sites-data";

export default function DeliveredSites() {
  return (
    <section className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col gap-3">
          <span className="font-body text-xs uppercase tracking-widest2 text-sand">
            Track Record
          </span>
          <h2 className="font-display text-3xl text-ivory sm:text-4xl">
            Delivered Sites
          </h2>
          <p className="max-w-xl font-body text-[15px] leading-relaxed text-muted">
            Completed developments, fully handed over to their owners — the
            standard every current project is held to.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {deliveredSites.map((site) => (
            <div key={site.name} className="group">
              <div className="relative grid grid-cols-2 gap-2">
                {site.videos.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-hairline bg-raised"
                  >
                    <video
                      src={src}
                      className="absolute inset-0 h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                ))}
                <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-sm bg-ink/85 px-3 py-1.5 backdrop-blur-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sand" />
                  <span className="font-body text-[11px] uppercase tracking-widest2 text-sand">
                    Delivered
                  </span>
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl text-ivory">
                {site.name}
              </h3>
              <p className="mt-1 font-body text-sm text-sand-dim">
                {site.location}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                {site.description}
              </p>

              <div className="mt-5 flex gap-8 border-t border-hairline pt-5">
                <div>
                  <span className="font-display text-lg text-ivory">
                    {site.units}
                  </span>
                  <p className="font-body text-xs uppercase tracking-widest2 text-muted">
                    Units
                  </p>
                </div>
                <div>
                  <span className="font-display text-lg text-ivory">
                    {site.typologies}
                  </span>
                  <p className="font-body text-xs uppercase tracking-widest2 text-muted">
                    Typologies
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder slot so the section reads as ongoing, not closed */}
          <div className="flex min-h-[280px] flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-hairline px-6 text-center">
            <span className="font-display text-3xl text-sand-dim">+</span>
            <p className="font-body text-xs uppercase tracking-widest2 text-muted">
              Next Delivery In Progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}