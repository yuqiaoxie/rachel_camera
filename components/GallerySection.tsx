import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/data/siteContent";

export function GallerySection() {
  const gallery = siteContent.gallerySection;

  return (
    <section id="gallery" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          description={gallery.description}
        />
        <GalleryGrid limit={3} />
        <div className="mt-9 text-center">
          <Link
            href="/gallery"
            className="inline-flex rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold transition hover:border-forest hover:text-forest"
          >
            {gallery.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
