import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks({ iconSize = 1 }: { iconSize?: number }) {
  const size = iconSize.toString();

  return (
    <section className="flex flex-row justify-center gap-3 text-4xl lg:text-5xl">
      <Link
        className="text-[var(--clr-muted)] transition hover:text-[var(--clr-sky-accent)]"
        href="https://www.linkedin.com/in/fred-lunjevich/"
        target="_blank"
        aria-label="Fred Lunjevich on LinkedIn"
      >
        <FaLinkedin size={`${size}rem`} />
      </Link>
      <Link
        className="text-[var(--clr-muted)] transition hover:text-[var(--clr-sky-accent)]"
        href="https://github.com/Floony7"
        target="_blank"
        aria-label="Fred Lunjevich on GitHub"
      >
        <FaGithub size={`${size}rem`} />
      </Link>
      {/* <Link className="text-white/90 hover:text-cyan-300" href="">
        <FaTwitter size={`${size}rem`} />
      </Link> */}
    </section>
  );
}
