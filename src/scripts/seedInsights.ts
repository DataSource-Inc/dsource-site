import config from "@payload-config";
import { getPayload } from "payload";

import { insights } from "@/data/insights";

type LexicalNode =
  | {
      children: LexicalNode[];
      direction: "ltr";
      format: "";
      indent: 0;
      type: "heading";
      version: 1;
      tag: "h2";
    }
  | {
      children: LexicalNode[];
      direction: "ltr";
      format: "";
      indent: 0;
      type: "paragraph";
      version: 1;
    }
  | {
      detail: 0;
      format: 0;
      mode: "normal";
      style: "";
      text: string;
      type: "text";
      version: 1;
    };

const textNode = (text: string): LexicalNode => ({
  detail: 0,
  format: 0,
  mode: "normal",
  style: "",
  text,
  type: "text",
  version: 1,
});

const paragraphNode = (text: string): LexicalNode => ({
  children: [textNode(text)],
  direction: "ltr",
  format: "",
  indent: 0,
  type: "paragraph",
  version: 1,
});

const headingNode = (text: string): LexicalNode => ({
  children: [textNode(text)],
  direction: "ltr",
  format: "",
  indent: 0,
  tag: "h2",
  type: "heading",
  version: 1,
});

function sectionsToLexical(sections: (typeof insights)[number]["sections"]) {
  return {
    root: {
      children: sections.flatMap((section) => [
        headingNode(section.heading),
        ...(section.body ? [paragraphNode(section.body)] : []),
      ]),
      direction: "ltr" as const,
      format: "" as const,
      indent: 0,
      type: "root",
      version: 1,
    },
  };
}

const payload = await getPayload({ config });

for (const [index, insight] of insights.entries()) {
  const existing = await payload.find({
    collection: "insights",
    depth: 0,
    limit: 1,
    where: {
      slug: {
        equals: insight.slug,
      },
    },
  });

  const data = {
    _status: "published" as const,
    content: sectionsToLexical(insight.sections),
    displayOrder: index,
    excerpt: insight.excerpt,
    publishedAt: new Date().toISOString(),
    slug: insight.slug,
    title: insight.title,
  };

  if (existing.docs[0]) {
    await payload.update({
      id: existing.docs[0].id,
      collection: "insights",
      data,
    });
    payload.logger.info(`Updated insight: ${insight.slug}`);
  } else {
    await payload.create({
      collection: "insights",
      data,
    });
    payload.logger.info(`Created insight: ${insight.slug}`);
  }
}
