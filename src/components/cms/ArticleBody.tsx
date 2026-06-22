import type { DefaultTypedEditorState } from "@payloadcms/richtext-lexical";

import RichText from "./RichText";

type ArticleBodyProps = {
  content?: DefaultTypedEditorState | null;
};

export default function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <RichText
      className="
        text-body-1 text-gray-100 leading-[1.7]
        [&_a]:text-primary-80 [&_a]:underline
        [&_blockquote]:border-l-4 [&_blockquote]:border-primary-80 [&_blockquote]:pl-5
        [&_h2]:mt-10 [&_h2]:text-h5 [&_h2]:text-primary-80
        [&_h3]:mt-8 [&_h3]:text-big [&_h3]:text-primary-80
        [&_li]:ml-6 [&_li]:list-disc
        [&_p]:mb-6
        [&_ul]:mb-6
      "
      content={content}
    />
  );
}
