'use client';

import { useState } from "react";

interface VideoEmbedProps {
  videoId: string;
  title: string;
}

export default function VideoEmbed({ videoId, title }: VideoEmbedProps) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="overflow-hidden rounded-2xl">
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Play video: ${title}`}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-black"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 m-auto flex h-16 w-24 items-center justify-center rounded-xl bg-black/70 transition group-hover:bg-red-600"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
