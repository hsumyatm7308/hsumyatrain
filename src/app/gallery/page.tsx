import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PhotoGallery } from "@/components/mdx/photo-gallery";
import { galleryCollections } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Memories from projects, hackathons, and the people I build with.",
};

export default function GalleryPage() {
  return (
    <section aria-labelledby="gallery-title">
      <header className="mb-10">
        <h1 id="gallery-title" className="mb-2 text-2xl font-semibold tracking-tight">Gallery</h1>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Moments from projects, hackathons, and the people I build with.
        </p>
      </header>
      <div className="space-y-10">
        {galleryCollections.map((collection) => (
          <section key={collection.slug} aria-labelledby={`${collection.slug}-gallery`}>
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="mb-1 text-xs text-muted-foreground">{collection.description}</p>
                <h2 id={`${collection.slug}-gallery`} className="text-lg font-semibold tracking-tight">{collection.title}</h2>
              </div>
              <Link href={`/projects/${collection.slug}`} className="inline-flex min-h-10 items-center gap-1.5 rounded-md text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                View project <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
            <PhotoGallery photos={collection.photos} layout="masonry" blurFade />
            <p className="mt-3 text-xs tabular-nums text-muted-foreground">{collection.photos.length} photos</p>
          </section>
        ))}
      </div>
    </section>
  );
}
