import type { FieldHook } from "payload";

export function formatSlugValue(value: string): string {
  return value
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

export const formatSlug =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === "string" && value.length > 0) {
      return formatSlugValue(value);
    }

    if (operation === "create" || !data?.slug) {
      const fallbackData = data?.[fallback];
      if (typeof fallbackData === "string") {
        return formatSlugValue(fallbackData);
      }
    }

    return value;
  };
