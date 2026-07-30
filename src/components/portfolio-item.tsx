import { Project } from "@/data";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioItem(props: { project: Project }) {
  const {
    id,
    shortName,
    img,
    title,
    subtitle,
    tech,
    description,
    url,
    repo,
    hasVideo,
  } = props.project;
  const techItems = tech.split("/").map((item) => item.trim());

  return (
    <article
      key={id}
      className="group grid gap-8 border-t border-[var(--clr-border)] py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center"
    >
      <Link
        href={`/portfolio/${shortName}`}
        className="relative block overflow-hidden rounded-[1.75rem] border border-[var(--clr-border)] bg-[var(--clr-surface)] p-3 transition duration-300 group-hover:-translate-y-1 group-hover:border-[var(--clr-sky-accent)]"
      >
        <Image
          className="aspect-[4/3] w-full rounded-[1.25rem] object-cover shadow-2xl shadow-slate-950/20"
          src={`/images/portfolio/${img}`}
          alt={title}
          width="600"
          height="400"
          priority={true}
        />
        <span className="absolute right-6 top-6 rounded-full bg-[var(--clr-teal-accent)] px-3 py-1 text-sm font-semibold text-slate-950">
          Work
        </span>
      </Link>
      <div className="space-y-5">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--clr-muted)]">
            {subtitle}
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        <ul className="flex list-none flex-wrap gap-2 p-0">
          {techItems.map((item) => (
            <li key={item} className="soft-tag">
              {item}
            </li>
          ))}
        </ul>
        {description !== "" ? (
          <p className="max-w-2xl leading-relaxed text-[var(--clr-muted)]">
            {description}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/portfolio/${shortName}`}
            className="font-semibold text-[var(--clr-teal-accent)] no-underline transition hover:text-[var(--clr-sky-accent)]"
          >
            View project notes
          </Link>
          {url !== "" ? (
            <Link
              href={url}
              target="_blank"
              className="font-semibold text-[var(--clr-sky-accent)] no-underline transition hover:text-[var(--clr-pink-accent)]"
            >
              {hasVideo === true ? "View video" : "View live project"}
            </Link>
          ) : (
            <span className="text-[var(--clr-muted)]">Not currently live</span>
          )}
          {repo !== "" ? (
            <Link
              href={repo}
              target="_blank"
              className="font-semibold text-[var(--clr-pink-accent)] no-underline transition hover:text-[var(--clr-sky-accent)]"
            >
              GitHub repo
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
