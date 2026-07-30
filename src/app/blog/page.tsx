import { Posts } from "@/components/posts";
import { tags } from "@/data";

export default function Blog() {
  return (
    <section className="site-width mb-16 mt-14">
      <section className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
        <aside className="lg:sticky lg:top-32">
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
            Dev blog
          </p>
          <h1 className="mt-3 text-5xl font-semibold sm:text-7xl">Writing</h1>
          <p className="mt-5 max-w-xl text-xl leading-relaxed text-[var(--clr-muted)]">
            Practical notes, observations, insights and the odd complaint from
            my journey as a software engineer.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {tags.length > 0
              ? tags.map((tag) => (
                  <span className="soft-tag" key={tag}>
                    {tag}
                  </span>
                ))
              : null}
          </div>
        </aside>
        <div className="glass-panel rounded-[1.75rem] p-5 sm:p-7">
          <Posts />
        </div>
      </section>
    </section>
  );
}
