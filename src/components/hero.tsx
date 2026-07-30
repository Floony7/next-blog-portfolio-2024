import Link from "next/link";

export const Hero = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <article className="site-width grid gap-12 lg:grid-cols-[minmax(0,0.96fr)_minmax(320px,0.82fr)] lg:items-center">
        <div className="flex flex-col gap-7">
          <p className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--clr-pink-accent)]" />
            Senior frontend engineer
          </p>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-normal sm:text-6xl lg:text-7xl">
              React systems with{" "}
              <span className="gradient-text">product judgment.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-[var(--clr-muted)] sm:text-2xl">
              I build production React, TypeScript and Next.js applications for
              ecommerce, headless CMS and API-heavy product work.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--clr-muted)]">
              I&apos;m expanding deeper into Node.js, API design and backend
              architecture so I can own more of the product from interface to
              release.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="rounded-full bg-[var(--clr-teal-accent)] px-5 py-3 font-semibold text-slate-950 no-underline transition hover:bg-[var(--clr-sky-accent)]"
            >
              View selected work
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[var(--clr-border)] bg-[var(--clr-surface)] px-5 py-3 font-semibold text-[var(--clr-text)] no-underline transition hover:border-[var(--clr-sky-accent)] hover:text-[var(--clr-sky-accent)]"
            >
              About Fred
            </Link>
          </div>

          <ul className="flex list-none flex-wrap gap-2 p-0">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "Headless commerce",
              "APIs",
              "Technical leadership",
            ].map((skill) => (
              <li key={skill} className="soft-tag">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <aside className="relative min-h-[430px]" aria-label="Portfolio visual">
          <div className="absolute inset-x-4 top-4 h-[380px] rounded-[42%_58%_54%_46%/44%_41%_59%_56%] border border-[var(--clr-border)] bg-[linear-gradient(140deg,var(--clr-glow-teal),transparent_38%),radial-gradient(circle_at_70%_22%,var(--clr-glow-sky),transparent_34%),radial-gradient(circle_at_62%_78%,var(--clr-glow-pink),transparent_36%),var(--clr-surface)]" />
          <div className="glass-panel relative mx-auto mt-16 grid w-[min(92%,420px)] rotate-[-2deg] gap-5 rounded-3xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--clr-muted)]">
                  Featured signal
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                  Product-minded frontend delivery
                </h2>
              </div>
              <span className="h-16 w-16 rounded-[35%_65%_48%_52%/52%_36%_64%_48%] bg-[linear-gradient(135deg,var(--clr-teal-accent),var(--clr-sky-accent),var(--clr-pink-accent))]" />
            </div>
            <div className="grid gap-3" aria-hidden="true">
              <span className="h-3 w-10/12 rounded-full bg-[var(--clr-teal-accent)]" />
              <span className="h-3 w-8/12 rounded-full bg-[var(--clr-sky-accent)]" />
              <span className="h-3 w-6/12 rounded-full bg-[var(--clr-pink-accent)]" />
              <span className="h-3 w-9/12 rounded-full bg-[var(--clr-border)]" />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="soft-tag">Commerce</span>
              <span className="soft-tag">CMS</span>
              <span className="soft-tag">GraphQL</span>
            </div>
          </div>
          <div className="glass-panel relative ml-auto mr-4 mt-[-24px] max-w-[280px] rounded-2xl p-4">
            <p className="font-semibold text-[var(--clr-text)]">
              Open to senior frontend and product-focused full-stack roles.
            </p>
            <p className="mt-2 text-sm text-[var(--clr-muted)]">
              Remote-first, UK-friendly teams.
            </p>
          </div>
        </aside>
      </article>
    </section>
  );
};
