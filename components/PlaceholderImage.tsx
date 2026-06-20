import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  label: string;
  aspect?: string;
  className?: string;
}

export default function PlaceholderImage({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-sm border border-hairline bg-raised ${className}`}
    >
      <div className="contour-field" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
        <ImageIcon className="h-6 w-6 text-sand-dim" strokeWidth={1.25} />
        <span className="font-body text-xs uppercase tracking-widest2 text-muted">
          {label}
        </span>
      </div>
    </div>
  );
}
