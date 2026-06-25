import type { CSSProperties } from "react";

import type { Media } from "@/payload-types";

export type FeaturedImageSize = "wide" | "standard" | "compact" | "custom";

type FeaturedImageDisplay = {
  className: string;
  imageSize: keyof NonNullable<Media["sizes"]>;
  style?: CSSProperties;
};

const baseClassName = "mx-auto mt-12";

const featuredImageDisplays = {
  wide: {
    className: `${baseClassName} max-w-[920px] overflow-hidden rounded-lg bg-beige`,
    imageSize: "hero",
    style: undefined,
  },
  standard: {
    className: `${baseClassName} max-w-[760px] overflow-hidden rounded-lg bg-beige`,
    imageSize: "hero",
    style: undefined,
  },
  compact: {
    className: `${baseClassName} max-w-[560px] overflow-hidden rounded-lg bg-beige`,
    imageSize: "card",
    style: undefined,
  },
} satisfies Record<Exclude<FeaturedImageSize, "custom">, FeaturedImageDisplay>;

type CustomMaxWidth = number | string | null | undefined;

function normalizeCustomWidth(width?: CustomMaxWidth) {
  if (typeof width === "string" && width.trim() === "") return null;
  const parsedWidth = Number(width);

  if (
    !Number.isFinite(parsedWidth) ||
    parsedWidth < 320 ||
    parsedWidth > 1200
  ) {
    return null;
  }

  return parsedWidth;
}

export function getFeaturedImageDisplay(
  size: FeaturedImageSize | null | undefined = "wide",
  customMaxWidth?: CustomMaxWidth,
): FeaturedImageDisplay {
  if (size === "custom") {
    const width = normalizeCustomWidth(customMaxWidth);
    if (width === null) return featuredImageDisplays.wide;

    return {
      className: `${baseClassName} w-full overflow-hidden rounded-lg bg-beige`,
      imageSize: "hero",
      style: { maxWidth: `${width}px` },
    };
  }

  return featuredImageDisplays[size || "wide"] || featuredImageDisplays.wide;
}
