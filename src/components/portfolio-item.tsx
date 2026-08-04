import { Project } from "@/data";
import Link from "next/link";
import Image from "next/image";
import ColorLink from "./color-link";
import type { ReactNode } from "react";

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
      <ProjectNotesLink shortName={shortName}>
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
      </ProjectNotesLink>
      <div className="space-y-5">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--clr-muted)]">
            {subtitle}
          </p>
          <ProjectNotesLink shortName={shortName}>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              {title}
            </h2>
          </ProjectNotesLink>
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
          <ColorLink
            href={`/portfolio/${shortName}`}
            color="teal"
            text="View project notes"
            isExternal={false}
          />
          {url !== "" ? (
            <ColorLink
              href={url}
              color="sky"
              text={hasVideo ? "View video" : "View live project"}
              isExternal={true}
            />
          ) : (
            <span className="text-[var(--clr-muted)]">Not currently live</span>
          )}
          {repo !== "" ? (
            <ColorLink
              href={repo}
              color="pink"
              text="GitHub repo"
              isExternal={true}
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}

type ProjectNotesLinkProps = {
  shortName: string;
  children: ReactNode;
};

const ProjectNotesLink = ({ shortName, children }: ProjectNotesLinkProps) => {
  return <Link href={`/portfolio/${shortName}`}>{children}</Link>;
};
