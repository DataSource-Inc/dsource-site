import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { seoPlugin } from "@payloadcms/plugin-seo";
import {
  lexicalEditor,
  UploadFeature,
} from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { cloudinaryStorage } from "payload-cloudinary";
import { fileURLToPath } from "url";

import { BlogPosts } from "@/collections/BlogPosts";
import { Categories } from "@/collections/Categories";
import { Insights } from "@/collections/Insights";
import { Media } from "@/collections/Media";
import { Users } from "@/collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: dirname,
    },
    user: Users.slug,
  },
  collections: [Users, Media, Categories, Insights, BlogPosts],
  cors: [
    process.env.PAYLOAD_PUBLIC_APP_URL || "",
    process.env.NEXT_PUBLIC_SITE_URL || "",
  ].filter(Boolean),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "mongodb://127.0.0.1:27017/dsource-site",
  }),
  defaultDepth: 1,
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      UploadFeature({
        collections: {
          media: {
            fields: [],
          },
        },
      }),
    ],
  }),
  plugins: [
    seoPlugin({
      collections: ["insights", "blog-posts"],
      uploadsCollection: "media",
    }),
    cloudinaryStorage({
      collections: {
        media: {
          disableLocalStorage: true,
          disablePayloadAccessControl: true,
        },
      },
      config: {
        api_key: process.env.CLOUDINARY_API_KEY || "",
        api_secret: process.env.CLOUDINARY_API_SECRET || "",
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
      },
      folder: process.env.CLOUDINARY_FOLDER || "dsource-media",
      publicID: {
        enabled: true,
        uniqueFilename: true,
        useFilename: true,
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || "local-development-secret",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
