import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/data/siteContent";

export default function GalleryPage() {
  const gallery = siteContent.galleryPage;

  return (
    <>
      <Header />
      <main className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={gallery.eyebrow}
            title={gallery.title}
            description={gallery.description}
          />
          <GalleryGrid />
          <div className="mt-10 text-center">
            <Link
              href="/#booking"
              className="inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink"
            >
              {gallery.button}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
