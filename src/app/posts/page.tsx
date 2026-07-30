import { Posts } from "@/components/posts";

export default function Blog() {
  return (
    <section className="site-width mb-16 mt-14 grid gap-10 lg:grid-cols-[1fr_280px]">
      <article className="glass-panel rounded-[1.75rem] p-5 sm:p-7">
        <Posts />
      </article>
      <aside className="border-t border-[var(--clr-border)] pt-6 text-[var(--clr-muted)] lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
        <h2 className="text-2xl font-semibold text-[var(--clr-text)]">
          Categories
        </h2>
        <p className="mt-3">
          Topic filtering can slot in here once the blog has enough volume to
          make it genuinely useful.
        </p>
      </aside>
    </section>
  );
}
