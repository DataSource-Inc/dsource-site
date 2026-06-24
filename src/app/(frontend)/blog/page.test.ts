import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("Blog page heading", () => {
  it("includes the news icon, requested subheader, and filled read-more links", () => {
    const source = readFileSync(resolve(__dirname, "page.tsx"), "utf8");

    expect(source).toContain('aria-label="News discussion"');
    expect(source).toContain("What&apos;s Happening In:");
    expect(source).toContain(
      "Personnel Security Operations, Federal Workforce Technology, and",
    );
    expect(source).toContain(
      "The Systems that keep Agencies Running Smoothly...",
    );
    expect(source).toContain("bg-primary-80");
    expect(source).toContain("text-white");
  });
});
