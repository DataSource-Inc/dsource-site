import type { CollectionConfig } from "payload";

import { isAdmin } from "@/access/isAdmin";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: () => true,
    update: isAdmin,
  },
  admin: {
    useAsTitle: "filename",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "text",
    },
  ],
  upload: {
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
      },
      {
        name: "card",
        width: 800,
      },
      {
        name: "hero",
        width: 1600,
      },
    ],
    mimeTypes: ["image/*"],
  },
};
