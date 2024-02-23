import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";
import SocialLinks from "./social-links";

export default function Navbar() {
  return (
    // <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
    <nav className="isolate bg-teal-500/70 shadow-lg ring-1 ring-black/5 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="lg:w-6/12 mx-auto flex justify-between">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Fred Lunjevich
          </Link>
        </h1>
        <section className="flex justify-between min-w-96 mt-1 text-xl">
          <Link
            href="/portfolio"
            className="text-white/85 no-underline hover:text-white"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-white/85 no-underline hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-white/85 no-underline hover:text-white"
          >
            About
          </Link>
          <SocialLinks iconSize={2} />
        </section>
      </div>
    </nav>
  );
}
