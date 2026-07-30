import { areas } from "@/data";

export default function TechAreas() {
  return (
    <section className="site-width">
      <div className="grid gap-4 border-y border-[var(--clr-border)] py-6 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map(([title, text]) => (
          <article key={title} className="space-y-2">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-[var(--clr-muted)]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
