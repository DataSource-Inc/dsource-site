import { revalidatePath } from "next/cache";

export function revalidateBlogPost(slug?: null | string) {
  revalidatePath("/");
  revalidatePath("/blog");
  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }
}
