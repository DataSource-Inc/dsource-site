import { describe, expect, it } from "vitest";

import { blogPostPath, insightPath } from "./paths";

describe("CMS public paths", () => {
  it("builds insight detail paths", () => {
    expect(insightPath("personnel-security-hub")).toBe(
      "/insights/personnel-security-hub",
    );
  });

  it("builds blog detail paths", () => {
    expect(blogPostPath("first-post")).toBe("/blog/first-post");
  });
});
