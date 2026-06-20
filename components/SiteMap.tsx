import { MapPin } from "lucide-react";

interface SiteMapProps {
  embedSrc: string;
  locationLabel: string;
}

export default function SiteMap({ embedSrc, locationLabel }: SiteMapProps) {
  return (
    <div className="overflow-hidden rounded-sm border border-hairline bg-raised">
      <div className="flex items-center gap-2.5 border-b border-hairline px-5 py-4">
        <MapPin className="h-4 w-4 text-sand" />
        <span className="font-body text-xs uppercase tracking-widest2 text-muted">
          {locationLabel}
        </span>
      </div>
      <div className="aspect-[16/10] w-full">
        <iframe
          src={embedSrc}
          title={`Map showing ${locationLabel}`}
          className="h-full w-full grayscale-[0.3] contrast-[1.05]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="px-5 py-3 font-body text-xs text-muted">
        Map pin is approximate — exact coordinates and directions provided
        upon inquiry.
      </p>
    </div>
  );
}
