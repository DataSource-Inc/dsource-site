import { describe, expect, it } from "vitest";

import { BlogPosts } from "./BlogPosts";

describe("BlogPosts collection", () => {
  it("does not require editorial summary fields for news posts", () => {
    const fieldNames = BlogPosts.fields.map((field) => "name" in field ? field.name : "");
    const featuredImage = BlogPosts.fields.find(
      (field) => "name" in field && field.name === "featuredImage",
    );

    expect(fieldNames).not.toContain("excerpt");
    expect(featuredImage).toMatchObject({ name: "featuredImage" });
    expect(
      featuredImage && "required" in featuredImage
        ? featuredImage.required
        : undefined,
    ).not.toBe(true);
  });

  it("lets editors choose preset or custom featured image display sizes", () => {
    const featuredImageSize = BlogPosts.fields.find(
      (field) => "name" in field && field.name === "featuredImageSize",
    );
    const featuredImageMaxWidth = BlogPosts.fields.find(
      (field) => "name" in field && field.name === "featuredImageMaxWidth",
    );

    expect(featuredImageSize).toMatchObject({
      defaultValue: "wide",
      name: "featuredImageSize",
      type: "select",
    });
    expect(
      featuredImageSize && "options" in featuredImageSize
        ? featuredImageSize.options
        : [],
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ label: "Wide", value: "wide" }),
        expect.objectContaining({ label: "Standard", value: "standard" }),
        expect.objectContaining({ label: "Compact", value: "compact" }),
        expect.objectContaining({ label: "Custom", value: "custom" }),
      ]),
    );

    expect(featuredImageMaxWidth).toMatchObject({
      admin: {
        description: "Maximum display width in pixels. Used only when Featured image size is Custom.",
      },
      max: 1200,
      min: 320,
      name: "featuredImageMaxWidth",
      type: "number",
    });
  });
});
