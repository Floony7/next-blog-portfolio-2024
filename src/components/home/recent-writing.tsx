import Link from "next/link";
import { Posts } from "@/components/posts";

export default function RecentWriting() {
  return (
    <section className="site-width mt-20 grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
      <div>
        <p className="text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
          Recent writing
        </p>
        <h2 className="mt-2 text-4xl font-semibold sm:text-5xl">
          i think, therefore <br />I write
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--clr-muted)]">
          I post about being a developer, React, Next.js, TypeScript, AI and
          other topics that interest me.
        </p>
        <Link className="fancy-anchor mt-5 inline-block" href="/blog">
          View more posts
        </Link>
      </div>
      <div className="glass-panel rounded-[1.75rem] p-5 sm:p-7">
        <Posts limit={4} />
      </div>
    </section>
  );
}
