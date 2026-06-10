import { siteContent } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink px-5 py-10 text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-xl">{siteContent.brand.name}</p>
        <p className="text-paper/70">{siteContent.footer.description}</p>
      </div>
    </footer>
  );
}
