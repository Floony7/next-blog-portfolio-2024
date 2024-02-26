import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks({ iconSize = 1 }: { iconSize?: number }) {
  const size = iconSize.toString();

  return (
    <section className="flex flex-row justify-center gap-2 text-white text-4xl lg:text-5xl">
      <Link
        className="text-white/85 hover:text-white"
        href="https://www.linkedin.com/in/fred-lunjevich/"
        target="_blank"
      >
        <FaLinkedin size={`${size}rem`} />
      </Link>
      <Link
        className="text-white/85 hover:text-white"
        href="https://github.com/Floony7"
        target="_blank"
      >
        <FaGithub size={`${size}rem`} />
      </Link>
      {/* <Link className="text-white/90 hover:text-cyan-300" href="">
        <FaTwitter size={`${size}rem`} />
      </Link> */}
    </section>
  );
}
