import Link from "next/link";
import PortfolioItem from "@/components/portfolio-item";
import { projectsData } from "@/data";

export default function SelectedWork() {
  const featuredProjects = projectsData.slice(0, 3);
  return (
    <section className="site-width mt-20">
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
            Selected work
          </p>
          <h2 className="mt-2 text-4xl font-semibold sm:text-5xl">
            Proof over promises.
          </h2>
        </div>
        <Link className="fancy-anchor" href="/portfolio">
          View all work
        </Link>
      </div>
      <div>
        {featuredProjects.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
