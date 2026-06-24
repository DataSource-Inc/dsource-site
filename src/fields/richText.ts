import type { RichTextField } from "payload";

export const richTextField = (
  overrides: Partial<RichTextField> = {},
): RichTextField => ({
  name: "content",
  type: "richText",
  required: true,
  ...overrides,
});
