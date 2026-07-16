import PortfolioItem from "@/components/portfolio-item";
import { projectsData } from "@/data/mock";

export default function Portfolio() {
  return (
    <section className="site-width p-6 mt-10 mb-6">
      <section className="prose prose-xl max-w-none text-gray-200">
        <h1 className="text-5xl">Work</h1>
        <p>
          Selected frontend and product engineering work across React,
          TypeScript, Next.js, ecommerce, CMS integrations and interface-heavy
          software. The strongest examples lead with production frontend depth;
          newer work shows the direction I&apos;m taking into fuller product and
          backend ownership.
        </p>
        {projectsData.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
}
