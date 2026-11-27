import { PhotoGallery } from "@/components/mdx/photo-gallery";
import { galleryCollections } from "@/data/gallery";

export function ProjectMemories({ slug }: { slug: string }) {
  const collection = galleryCollections.find((item) => item.slug === slug);
  return collection ? <PhotoGallery photos={collection.photos} /> : null;
}
