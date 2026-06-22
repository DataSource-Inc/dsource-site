import { revalidatePath } from "next/cache";

export function revalidateInsight(slug?: null | string) {
  revalidatePath("/");
  revalidatePath("/insights");
  if (slug) {
    revalidatePath(`/insights/${slug}`);
  }
}

export function revalidateBlogPost(slug?: null | string) {
  revalidatePath("/");
  revalidatePath("/blog");
  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }
}
