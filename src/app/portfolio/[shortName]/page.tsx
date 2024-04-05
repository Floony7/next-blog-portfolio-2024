import { projectsData } from "@/data/mock";
export default async function ProjectPage({
  params,
}: {
  params: { shortName: string };
}) {
  const { shortName } = params;
  const project = projectsData.find((p) => p.shortName === shortName);
  console.log(params);
  return (
    <section className="site-width p-6 mt-10 mb-6">
      <article className="prose prose-xl max-w-none text-gray-200">
        {project ? (
          <div>
            <h1 className="text-5xl">{project?.title}</h1>
            {project ? <p>{project.description}</p> : <p>No such project</p>}
          </div>
        ) : (
          <h1>No such project</h1>
        )}
      </article>
    </section>
  );
}
