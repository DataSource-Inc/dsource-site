import type { CollectionConfig } from "payload";

import { isAdmin } from "@/access/isAdmin";
import { publishedOnly } from "@/access/publishedOnly";
import { richTextField } from "@/fields/richText";
import { slugField } from "@/fields/slug";
import { revalidateBlogPost } from "@/lib/payload/revalidate";
import { formatPreviewURL } from "@/utilities/formatPreviewURL";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
  },
  admin: {
    livePreview: {
      url: ({ data }) => formatPreviewURL("blog-posts", data),
    },
    preview: (doc) => formatPreviewURL("blog-posts", doc),
    useAsTitle: "title",
  },
  defaultPopulate: {
    category: true,
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
    richTextField(),
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "authors",
      type: "relationship",
      hasMany: true,
      relationTo: "users",
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
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
      name: "relatedPosts",
      type: "relationship",
      filterOptions: ({ id }) => ({
        id: {
          not_equals: id,
        },
      }),
      hasMany: true,
      relationTo: "blog-posts",
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, previousDoc }) => {
        revalidateBlogPost(doc.slug);
        if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
          revalidateBlogPost(previousDoc.slug);
        }
      },
    ],
    afterDelete: [
      ({ doc }) => {
        revalidateBlogPost(doc.slug);
      },
    ],
  },
  versions: {
    drafts: true,
  },
};
