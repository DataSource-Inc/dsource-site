import {
  defaultJSXConverters,
  RichText as PayloadRichText,
  type JSXConvertersFunction,
} from "@payloadcms/richtext-lexical/react";

import type { DefaultTypedEditorState } from "@payloadcms/richtext-lexical";

import CMSImage from "./CMSImage";

type RichTextProps = {
  className?: string;
  content?: DefaultTypedEditorState | null;
};

const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  upload: ({ node }) => {
    const value = "value" in node ? node.value : null;
    if (!value || typeof value !== "object") return null;

    return (
      <figure className="my-8">
        <CMSImage
          className="h-auto w-full rounded-lg"
          media={value as Parameters<typeof CMSImage>[0]["media"]}
          size="hero"
        />
      </figure>
    );
  },
});

export default function RichText({ className, content }: RichTextProps) {
  if (!content) return null;

  return (
    <PayloadRichText
      className={className}
      converters={converters}
      data={content}
    />
  );
}

export { defaultJSXConverters };
