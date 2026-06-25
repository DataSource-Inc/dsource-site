import { describe, expect, it } from "vitest";

import { getFeaturedImageDisplay } from "./featuredImage";

describe("getFeaturedImageDisplay", () => {
  it("keeps the current wide hero treatment by default", () => {
    expect(getFeaturedImageDisplay()).toEqual({
      className: "mx-auto mt-12 max-w-[920px] overflow-hidden rounded-lg bg-beige",
      imageSize: "hero",
      style: undefined,
    });
  });

  it("maps preset sizes to constrained display widths", () => {
    expect(getFeaturedImageDisplay("standard")).toMatchObject({
      className: "mx-auto mt-12 max-w-[760px] overflow-hidden rounded-lg bg-beige",
      imageSize: "hero",
    });
    expect(getFeaturedImageDisplay("compact")).toMatchObject({
      className: "mx-auto mt-12 max-w-[560px] overflow-hidden rounded-lg bg-beige",
      imageSize: "card",
    });
  });

  it("uses a custom max width when the custom preset has a valid value", () => {
    expect(getFeaturedImageDisplay("custom", 680)).toEqual({
      className: "mx-auto mt-12 w-full overflow-hidden rounded-lg bg-beige",
      imageSize: "hero",
      style: { maxWidth: "680px" },
    });
  });

  it("falls back to the wide treatment when a custom width is missing or invalid", () => {
    expect(getFeaturedImageDisplay("custom")).toEqual(getFeaturedImageDisplay("wide"));
    expect(getFeaturedImageDisplay("custom", 200)).toEqual(getFeaturedImageDisplay("wide"));
    expect(getFeaturedImageDisplay("custom", 1300)).toEqual(getFeaturedImageDisplay("wide"));
  });
});
