import { projectsData } from "@/data";
import ReturnLink from "@/components/return-link";

export default async function ProjectPage({
  params,
}: {
  params: { shortName: string };
}) {
  const { shortName } = params;
  const project = projectsData.find((p) => p.shortName === shortName);
  const { title, description, paragraphs } = project || {};

  return (
    <section className="site-width mb-16 mt-14 project-details">
      <ReturnLink href="/portfolio" text="Back to portfolio" />
      <article className="glass-panel max-w-none rounded-[1.75rem] p-6 sm:p-10">
        {project ? (
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
              Project notes
            </p>
            <h1 className="mb-4 mt-3 text-4xl font-semibold sm:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-[var(--clr-muted)]">
              {description}
            </p>
            {paragraphs
              ? paragraphs?.map((paragraph, index) => (
                  <p key={`${project.shortName}-paragraph-${index}`}>
                    {paragraph}
                  </p>
                ))
              : null}
          </div>
        ) : (
          <h1>No such project</h1>
        )}
      </article>
    </section>
  );
}
