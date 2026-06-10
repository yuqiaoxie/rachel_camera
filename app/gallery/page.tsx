import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="A soft visual direction for the first collection"
            description="A collection for travelers, couples, families, and creative people who want portraits with atmosphere, movement, and a strong sense of place."
          />
          <GalleryGrid />
          <div className="mt-10 text-center">
            <Link
              href="/#booking"
              className="inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink"
            >
              Request a Session
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
