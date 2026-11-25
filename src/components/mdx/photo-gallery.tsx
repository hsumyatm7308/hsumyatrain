"use client";

import { useEffect, useRef, useState } from "react";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";

type Photo = {
  src: string;
  alt: string;
  caption?: string;
  captionPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

const captionPositions = {
  "top-left": "items-start justify-start",
  "top-right": "items-start justify-end",
  "bottom-left": "items-end justify-start",
  "bottom-right": "items-end justify-end",
};

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [cursorEnabled, setCursorEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(any-hover: hover) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setCursorEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!photos.length) return null;

  return (
    <>
      {cursorEnabled && <SmoothCursor scopeRef={galleryRef} />}
      <div ref={galleryRef} className={`not-prose grid grid-cols-3 gap-2 min-[480px]:grid-cols-4 ${cursorEnabled ? "gallery-smooth-cursor" : ""}`}>
        {photos.map((photo) => (
          <figure key={photo.src} tabIndex={0} aria-label={photo.caption || photo.alt} className="group relative m-0 overflow-hidden rounded-xl bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              data-gallery-photo
              className="m-0 block aspect-square w-full object-cover transition-[filter] duration-300 hover:brightness-110 motion-reduce:transition-none"
            />
            <figcaption className={`pointer-events-none absolute inset-0 flex p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100 motion-reduce:transition-none ${captionPositions[photo.captionPosition || "bottom-left"]}`}>
              <span className="relative max-w-full rounded-2xl rounded-bl-md border border-black/5 bg-white/95 px-2.5 py-1.5 text-center text-xs font-medium leading-snug text-neutral-800 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm after:absolute after:-bottom-1.5 after:left-4 after:h-3 after:w-3 after:rotate-45 after:rounded-[2px] after:bg-white/95 sm:px-3 sm:py-2">
                <span className="line-clamp-3 break-words">{photo.caption || photo.alt}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
