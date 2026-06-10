"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Header } from "@/components/Header";
import { useSiteContent } from "@/components/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading";

export default function GalleryPage() {
  const { content } = useSiteContent();
  const gallery = content.galleryPage;

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
