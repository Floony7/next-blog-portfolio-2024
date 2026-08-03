import Link from "next/link";

export default function ReturnLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <p className="mt-10 text-sm uppercase tracking-[0.18em] text-[var(--clr-teal-accent)] transition hover:text-[var(--clr-sky-accent)]">
      <Link href={href} className="font-semibold no-underline">
        ← {text}
      </Link>
    </p>
  );
}
