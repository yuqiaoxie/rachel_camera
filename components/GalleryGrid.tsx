import Image from "next/image";
import { galleryImages } from "@/data/site";

type GalleryGridProps = {
  limit?: number;
};

export function GalleryGrid({ limit }: GalleryGridProps) {
  const images = typeof limit === "number" ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <article key={image.src} className="group overflow-hidden rounded-lg bg-paper shadow-soft">
          <div className="aspect-[4/5] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={720}
              height={900}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between p-5">
            <h3 className="font-serif text-2xl font-semibold">{image.title}</h3>
            <p className="text-sm text-ink/60">{image.location}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
