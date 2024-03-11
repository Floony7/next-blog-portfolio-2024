import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./social-links";

export default function Navbar() {
  return (
    <nav className="bg-teal-500 p-4 sticky top-0 z-10">
      <div className="site-width flex flex-col lg:flex-row items-center lg:justify-between">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white hover:text-amber-200 no-underline"
          >
            <Image
              className="drop-shadow-xl shadow-black mx-auto"
              src="/images/floony-initials-logo.svg"
              alt="Fred Lunjevich"
              width="80"
              height="80"
              priority={true}
            />
          </Link>
        </h1>
        <section className="flex justify-evenly lg:justify-between min-w-96 mt-1 text-xl">
          <Link
            href="/portfolio"
            className="text-white no-underline hover:text-amber-200"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-white no-underline hover:text-amber-200"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-white no-underline hover:text-amber-200"
          >
            About
          </Link>
          <SocialLinks iconSize={2} />
        </section>
      </div>
    </nav>
  );
}
