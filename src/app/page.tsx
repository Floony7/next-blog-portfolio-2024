import { Hero } from "@/components/hero";
import { Posts } from "@/components/posts";
import PortfolioItem from "@/components/portfolio-item";
import { projectsData, areas } from "@/data";
import Link from "next/link";

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="pb-16">
      <Hero />
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

      <section className="site-width mt-20">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
              Selected work
            </p>
            <h2 className="mt-2 text-4xl font-semibold sm:text-5xl">
              Proof over promises.
            </h2>
          </div>
          <Link className="fancy-anchor" href="/portfolio">
            View all work
          </Link>
        </div>
        <div>
          {featuredProjects.map((project) => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="site-width mt-20 grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
            Recent writing
          </p>
          <h2 className="mt-2 text-4xl font-semibold sm:text-5xl">
            Engineering notes with visible judgment.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--clr-muted)]">
            Practical posts about React, Next.js, TypeScript, AI, developer
            culture and the trade-offs behind maintainable product work.
          </p>
          <Link className="fancy-anchor mt-5 inline-block" href="/blog">
            View more posts
          </Link>
        </div>
        <div className="glass-panel rounded-[1.75rem] p-5 sm:p-7">
          <Posts limit={4} />
        </div>
      </section>
    </section>
  );
}
