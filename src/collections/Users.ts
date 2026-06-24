import type { CollectionConfig } from "payload";

import { isAdmin, isAdminFieldLevel } from "@/access/isAdmin";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: () => true,
    update: isAdmin,
  },
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "firstName",
      type: "text",
    },
    {
      name: "lastName",
      type: "text",
    },
    {
      name: "roles",
      type: "select",
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      defaultValue: ["admin"],
      hasMany: true,
      options: [
        {
          label: "Admin",
          value: "admin",
        },
      ],
      required: true,
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
    },
  ],
};
