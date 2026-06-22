import type { CollectionConfig } from "payload";

import { isAdmin } from "@/access/isAdmin";
import { publishedOnly } from "@/access/publishedOnly";
import { richTextField } from "@/fields/richText";
import { slugField } from "@/fields/slug";
import { revalidateInsight } from "@/lib/payload/revalidate";
import { formatPreviewURL } from "@/utilities/formatPreviewURL";

export const Insights: CollectionConfig = {
  slug: "insights",
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
  },
  admin: {
    livePreview: {
      url: ({ data }) => formatPreviewURL("insights", data),
    },
    preview: (doc) => formatPreviewURL("insights", doc),
    useAsTitle: "title",
  },
  defaultPopulate: {
    cardIcon: true,
    excerpt: true,
    featuredImage: true,
    publishedAt: true,
    slug: true,
    title: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    slugField(),
    {
      name: "excerpt",
      type: "textarea",
      required: true,
    },
    richTextField(),
    {
      name: "cardIcon",
      type: "upload",
      admin: {
        description: "Icon or small illustration used by insight cards.",
      },
      relationTo: "media",
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "displayOrder",
      type: "number",
      admin: {
        position: "sidebar",
      },
      defaultValue: 0,
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
      required: true,
    },
    {
      name: "relatedInsights",
      type: "relationship",
      filterOptions: ({ id }) => ({
        id: {
          not_equals: id,
        },
      }),
      hasMany: true,
      relationTo: "insights",
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, previousDoc }) => {
        revalidateInsight(doc.slug);
        if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
          revalidateInsight(previousDoc.slug);
        }
      },
    ],
    afterDelete: [
      ({ doc }) => {
        revalidateInsight(doc.slug);
      },
    ],
  },
  versions: {
    drafts: true,
  },
};
