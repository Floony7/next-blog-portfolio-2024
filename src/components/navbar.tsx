import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";
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
            Fred Lunjevich
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
