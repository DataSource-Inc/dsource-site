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

function isValidCustomWidth(width?: number | null) {
  return (
    typeof width === "number" &&
    Number.isFinite(width) &&
    width >= 320 &&
    width <= 1200
  );
}

export function getFeaturedImageDisplay(
  size: FeaturedImageSize | null | undefined = "wide",
  customMaxWidth?: number | null,
): FeaturedImageDisplay {
  if (size === "custom") {
    if (!isValidCustomWidth(customMaxWidth)) return featuredImageDisplays.wide;

    return {
      className: `${baseClassName} w-full overflow-hidden rounded-lg bg-beige`,
      imageSize: "hero",
      style: { maxWidth: `${customMaxWidth}px` },
    };
  }

  return featuredImageDisplays[size || "wide"] || featuredImageDisplays.wide;
}
