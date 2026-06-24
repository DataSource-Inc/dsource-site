import Image from "next/image";

import type { Media } from "@/payload-types";
import {
  getMediaDimensions,
  getMediaURL,
} from "@/lib/payload/media";

type CMSImageProps = {
  className?: string;
  media?: Media | null | string;
  priority?: boolean;
  size?: keyof NonNullable<Media["sizes"]>;
};

export default function CMSImage({
  className,
  media,
  priority = false,
  size,
}: CMSImageProps) {
  if (!media || typeof media === "string") return null;

  const src = getMediaURL(media, size);
  if (!src) return null;

  const { height, width } = getMediaDimensions(media, size);

  if (!height || !width) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={media.alt || ""} className={className} src={src} />;
  }

  return (
    <Image
      alt={media.alt || ""}
      className={className}
      height={height}
      priority={priority}
      src={src}
      width={width}
    />
  );
}
