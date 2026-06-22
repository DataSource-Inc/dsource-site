import { describe, expect, it } from "vitest";

import { formatSlugValue } from "./formatSlug";

describe("formatSlugValue", () => {
  it("normalizes titles into lowercase URL slugs", () => {
    expect(formatSlugValue("Trusted Workforce Productivity")).toBe(
      "trusted-workforce-productivity",
    );
  });

  it("removes punctuation and collapses repeated separators", () => {
    expect(formatSlugValue("The benefits of Integration!!")).toBe(
      "the-benefits-of-integration",
    );
  });
});
