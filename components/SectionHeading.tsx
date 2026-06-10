type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-clay">{eyebrow}</p>
      <h2 className="font-serif text-4xl font-semibold text-ink md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-ink/70 md:text-lg">{description}</p>
    </div>
  );
}
