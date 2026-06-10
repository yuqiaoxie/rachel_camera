import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionHeading } from "@/components/SectionHeading";

export function GallerySection() {
  return (
    <section id="gallery" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Gallery"
          title="Travel portraits with quiet atmosphere"
          description="Natural light, simple composition, and a warm editorial feel for portraits shaped by the places they are made in."
        />
        <GalleryGrid limit={3} />
        <div className="mt-9 text-center">
          <Link
            href="/gallery"
            className="inline-flex rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold transition hover:border-forest hover:text-forest"
          >
            Open Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
