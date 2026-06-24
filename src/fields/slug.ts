import type { Field } from "payload";

import { formatSlug } from "@/utilities/formatSlug";

export const slugField = (fieldToUse = "title"): Field => ({
  name: "slug",
  type: "text",
  index: true,
  required: true,
  unique: true,
  admin: {
    position: "sidebar",
  },
  hooks: {
    beforeValidate: [formatSlug(fieldToUse)],
  },
});
