import { blogPostPath, insightPath } from "@/lib/payload/paths";

type PreviewDocument = {
  slug?: string | null;
};

export function formatPreviewURL(
  collection: "blog-posts" | "insights",
  doc: PreviewDocument,
): string {
  const baseURL =
    process.env.PAYLOAD_PUBLIC_APP_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";
  const secret = process.env.NEXT_PRIVATE_DRAFT_SECRET || "";
  const slug = doc.slug || "";
  const path = collection === "insights" ? insightPath(slug) : blogPostPath(slug);

  return `${baseURL}/api/preview?secret=${encodeURIComponent(
    secret,
  )}&url=${encodeURIComponent(path)}`;
}
