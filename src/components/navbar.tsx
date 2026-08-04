import Link from "next/link";
import SocialLinks from "./social-links";
import { ThemeToggle } from "./theme-toggle";
import { siteLinks } from "@/data";
import { brunoAceSC } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="navbar-glass sticky top-0 z-10">
      <div className="site-width flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="grid place-content-center text-2xl font-bold lg:text-3xl">
          <Link href="/" className="site-logo" aria-label="Fred Lunjevich home">
            <span className="css-logo" aria-hidden="true">
              {/* <span className="css-logo__spark" /> */}
            </span>
            <span className={`${brunoAceSC.className} css-logo__word`}>
              Fred Lunjevich
            </span>
          </Link>
        </h1>
        <section className="flex flex-wrap items-center justify-center gap-5 text-lg lg:justify-end">
          {siteLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--clr-muted)] no-underline transition hover:text-[var(--clr-sky-accent)]"
            >
              {link.name}
            </Link>
          ))}
          <SocialLinks iconSize={2} />
          <ThemeToggle />
        </section>
      </div>
    </nav>
  );
}
