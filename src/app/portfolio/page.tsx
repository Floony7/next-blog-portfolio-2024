import ColorLink from "@/components/color-link";
import PortfolioItem from "@/components/portfolio-item";
import { projectsData } from "@/data";

export default function Portfolio() {
  return (
    <section className="site-width mb-16 mt-14">
      <section className="max-w-none">
        <p className="text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
          Selected work
        </p>
        <h1 className="mt-3 text-5xl font-semibold sm:text-7xl">
          Work and Projects
        </h1>
        <p className="mt-5 max-w-3xl text-xl leading-relaxed text-[var(--clr-muted)]">
          Selected frontend and product engineering work across React,
          TypeScript, Next.js, ecommerce, CMS integrations and interface-heavy
          software.
        </p>
        <p className="mt-5">
          <ColorLink
            href="https://github.com/Floony7/next-blog-portfolio-2024"
            color="pink"
            text="View Github Repo for this Portfolio Site"
            isExternal={true}
          />
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
