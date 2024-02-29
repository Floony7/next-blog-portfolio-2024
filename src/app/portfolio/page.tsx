import PortfolioItem from "@/components/portfolio-item";
import { projectsData } from "@/data/mock";

export default function Portfolio() {
  return (
    <section className="site-width p-6 mt-10 mb-6">
      <section className="prose prose-xl max-w-none text-gray-200">
        <h1 className="text-5xl">Portfolio</h1>
        {projectsData.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
}
