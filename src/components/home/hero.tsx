import { technicalExpertise } from "@/data";
import Image from "next/image";
import Link from "next/link";
import GlassPanel from "./glass-panel";

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
              <span className="gradient-text">Fred Lunjevich</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-[var(--clr-muted)] sm:text-2xl">
              I build production React, TypeScript and Next.js applications for
              ecommerce, headless CMS and API-heavy product work.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--clr-muted)]">
              I&apos;m working on expanding my expertise withNode.js, API design
              and backend architecture so I can own more of the product from
              interface to release.
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
            {technicalExpertise.map((skill) => (
              <li key={skill} className="soft-tag">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <aside className="relative min-h-[430px]" aria-label="Portfolio visual">
          {/* <div className="absolute inset-x-4 top-4 h-[380px] rounded-[42%_58%_54%_46%/44%_41%_59%_56%] border border-[var(--clr-border)] bg-[linear-gradient(140deg,var(--clr-glow-teal),transparent_38%),radial-gradient(circle_at_70%_22%,var(--clr-glow-sky),transparent_34%),radial-gradient(circle_at_62%_78%,var(--clr-glow-pink),transparent_36%),var(--clr-surface)]" /> */}
          <div className="relative mx-auto mt-12 w-[min(88%,360px)] rotate-[-2deg] rounded-[38%_62%_45%_55%/48%_40%_60%_52%] border border-[var(--clr-border)] bg-[var(--clr-surface)] p-3 shadow-2xl shadow-slate-950/20">
            <Image
              className="aspect-square w-full rounded-[36%_64%_42%_58%/52%_44%_56%_48%] object-cover"
              src="/images/fred.png"
              alt="Fred Lunjevich"
              width={420}
              height={420}
              priority={true}
            />
          </div>
          <GlassPanel />
        </aside>
      </article>
    </section>
  );
};
