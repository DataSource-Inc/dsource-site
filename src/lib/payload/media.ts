import type { Media } from "@/payload-types";

type MediaSize = NonNullable<Media["sizes"]>[keyof NonNullable<Media["sizes"]>];

export function getMediaURL(
  media?: Media | null | string,
  size?: keyof NonNullable<Media["sizes"]>,
): string {
  if (!media || typeof media === "string") return "";

  const sizedMedia = size ? (media.sizes?.[size] as MediaSize) : undefined;
  return sizedMedia?.url || media.url || "";
}

export function getMediaDimensions(
  media?: Media | null | string,
  size?: keyof NonNullable<Media["sizes"]>,
) {
  if (!media || typeof media === "string") return { height: 0, width: 0 };

  const sizedMedia = size ? (media.sizes?.[size] as MediaSize) : undefined;
  return {
    height: sizedMedia?.height || media.height || 0,
    width: sizedMedia?.width || media.width || 0,
  };
}
