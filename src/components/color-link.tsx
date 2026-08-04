import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type LinkColor = "pink" | "teal" | "sky";

const linkColorClasses: Record<LinkColor, string> = {
  pink: "text-[var(--clr-pink-accent)]",
  teal: "text-[var(--clr-teal-accent)]",
  sky: "text-[var(--clr-sky-accent)]",
};

type Props = {
  href: string;
  color: LinkColor;
  text: string;
  isExternal?: boolean;
};

export default function ColorLink({ href, color, text, isExternal }: Props) {
  const colorClass = linkColorClasses[color];

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-semibold ${colorClass} no-underline transition hover:text-[var(--clr-purple-hover)]`}
    >
      {isExternal ? <FaArrowUpRightFromSquare className="h-4 w-4" /> : null}
      {text}
    </Link>
  );
}
