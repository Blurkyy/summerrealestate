import Image from "next/image";
import type { SiteMedia } from "@/lib/sites-data";

interface MediaDisplayProps {
  media: SiteMedia;
  alt: string;
  className?: string;
  fill?: boolean;
}

export default function MediaDisplay({ media, alt, className = "", fill = true }: MediaDisplayProps) {
  if (media.type === "video") {
    return (
      <video
        src={media.src}
        autoPlay
        loop
        muted
        playsInline
        className={`object-cover ${fill ? 'absolute inset-0 w-full h-full' : 'w-full h-auto'} ${className}`}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={media.src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={alt}
      width={800}
      height={600}
      className={`object-cover w-full h-auto ${className}`}
    />
  );
}
