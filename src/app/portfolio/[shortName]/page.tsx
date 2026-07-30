import { projectsData } from "@/data/mock";

export default async function ProjectPage({
  params,
}: {
  params: { shortName: string };
}) {
  const { shortName } = params;
  const project = projectsData.find((p) => p.shortName === shortName);

  return (
    <section className="site-width mb-16 mt-14">
      <article className="glass-panel max-w-none rounded-[1.75rem] p-6 sm:p-10">
        {project ? (
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
              Project notes
            </p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-6xl">
              {project?.title}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-relaxed text-[var(--clr-muted)]">
              {project.description}
            </p>
          </div>
        ) : (
          <h1>No such project</h1>
        )}
      </article>
    </section>
  );
}
