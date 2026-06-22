import { describe, expect, it } from "vitest";

import { blogPostPath } from "./paths";

describe("CMS public paths", () => {
  it("builds blog detail paths", () => {
    expect(blogPostPath("first-post")).toBe("/blog/first-post");
  });
});
