import { projectsData } from "@/data";
import ReturnLink from "@/components/return-link";
import ImageView from "@/components/image-view";

export default async function ProjectPage({
  params,
}: {
  params: { shortName: string };
}) {
  const { shortName } = params;
  const project = projectsData.find((p) => p.shortName === shortName);
  const { title, description, paragraphs, img } = project || {};

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
            <div className="mb-4 flex flex-col-reverse gap-4 sm:gap-6 md:flex-row">
              <div className="flex flex-col justify-center">
                <p className="relative max-w-3xl text-xl leading-relaxed text-[var(--clr-muted)] lg:before:absolute lg:before:-left-5 lg:before:-top-12 lg:before:font-serif lg:before:text-9xl lg:before:leading-none lg:before:text-[var(--clr-pink-accent)] lg:before:opacity-50 lg:before:content-['“']">
                  {description}
                </p>
              </div>

              {img && (
                <ImageView filename={img} title={title || "Project Image"} />
              )}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Project details</h3>
              {paragraphs
                ? paragraphs?.map((paragraph, index) => (
                    <p key={`${project.shortName}-paragraph-${index}`}>
                      {paragraph}
                    </p>
                  ))
                : null}
            </div>
          </div>
        ) : (
          <h1>No such project</h1>
        )}
      </article>
    </section>
  );
}
