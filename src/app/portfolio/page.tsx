import PortfolioItem from "@/components/portfolio-item";
import { projectsData } from "@/data/mock";

export default function Portfolio() {
  return (
    <section className="site-width mb-16 mt-14">
      <section className="max-w-none">
        <p className="text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
          Selected work
        </p>
        <h1 className="mt-3 text-5xl font-semibold sm:text-7xl">Work</h1>
        <p className="mt-5 max-w-3xl text-xl leading-relaxed text-[var(--clr-muted)]">
          Selected frontend and product engineering work across React,
          TypeScript, Next.js, ecommerce, CMS integrations and interface-heavy
          software. The strongest examples lead with production frontend depth;
          newer work shows the direction I&apos;m taking into fuller product and
          backend ownership.
        </p>
        <div className="mt-10">
        {projectsData.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
        </div>
      </section>
    </section>
  );
}
