import { BookingForm } from "@/components/BookingForm";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GallerySection />
        <Pricing />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
