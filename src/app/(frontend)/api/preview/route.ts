import config from "@payload-config";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getPayload, type PayloadRequest } from "payload";

export async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  const secret = searchParams.get("secret");

  if (!url) {
    return new Response("No URL provided", { status: 404 });
  }

  if (secret !== process.env.NEXT_PRIVATE_DRAFT_SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }

  const payload = await getPayload({ config });
  let user;

  try {
    user = await payload.auth({
      headers: req.headers,
      req: req as unknown as PayloadRequest,
    });
  } catch {
    return new Response("You are not allowed to preview this page", {
      status: 403,
    });
  }

  const draft = await draftMode();

  if (!user) {
    draft.disable();
    return new Response("You are not allowed to preview this page", {
      status: 403,
    });
  }

  draft.enable();
  redirect(url);
}
