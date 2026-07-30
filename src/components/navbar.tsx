import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./social-links";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="navbar-glass sticky top-0 z-10">
      <div className="site-width flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="grid place-content-center text-2xl font-bold lg:text-3xl">
          <Link
            href="/"
            className="flex items-center gap-3 text-[var(--clr-text)] no-underline transition hover:text-[var(--clr-sky-accent)]"
          >
            <Image
              className="mx-auto drop-shadow-xl"
              src="/images/floony-initials-logo.svg"
              alt="Fred Lunjevich"
              width="54"
              height="54"
              priority={true}
            />
            <span className="hidden sm:inline">Fred Lunjevich</span>
          </Link>
        </h1>
        <section className="flex flex-wrap items-center justify-center gap-5 text-lg lg:justify-end">
          <Link
            href="/portfolio"
            className="text-[var(--clr-muted)] no-underline transition hover:text-[var(--clr-sky-accent)]"
          >
            Work
          </Link>
          <Link
            href="/blog"
            className="text-[var(--clr-muted)] no-underline transition hover:text-[var(--clr-sky-accent)]"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-[var(--clr-muted)] no-underline transition hover:text-[var(--clr-sky-accent)]"
          >
            About
          </Link>
          <SocialLinks iconSize={2} />
          <ThemeToggle />
        </section>
      </div>
    </nav>
  );
}
