import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("Footer navigation", () => {
  it("includes the News link from the top navigation", () => {
    const source = readFileSync(
      resolve(__dirname, "Footer.tsx"),
      "utf8",
    );

    expect(source).toContain('{ href: "/blog", label: "News" }');
    expect(source).toContain('href="/blog"');
    expect(source).toContain("News");
  });
});
