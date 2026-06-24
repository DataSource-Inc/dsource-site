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
});
