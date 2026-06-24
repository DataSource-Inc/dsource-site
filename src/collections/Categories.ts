import type { CollectionConfig } from "payload";

import { isAdmin } from "@/access/isAdmin";
import { slugField } from "@/fields/slug";

export const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: () => true,
    update: isAdmin,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    slugField(),
    {
      name: "description",
      type: "textarea",
    },
  ],
};
