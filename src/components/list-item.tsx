import Link from "next/link";
import { BlogPost } from "../lib/posts";
import getFormattedDate from "@/lib/format-date";

type Props = {
  post: BlogPost;
  displayPrecis: boolean;
};

export default function ListItem({ post, displayPrecis }: Props) {
  const { id, title, date, precis } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="group border-t border-[var(--clr-border)] py-6 text-[var(--clr-text)] transition first:border-t-0">
      <article className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-8">
        <p className="text-sm uppercase tracking-[0.18em] text-[var(--clr-muted)]">
          {formattedDate}
        </p>
        <div className="space-y-3">
          <Link
            className="text-2xl font-semibold no-underline transition group-hover:text-[var(--clr-sky-accent)]"
            href={`/posts/${id}`}
          >
            {title}
          </Link>
          {displayPrecis ? (
            <p className="max-w-2xl text-base leading-relaxed text-[var(--clr-muted)]">
              {precis}
            </p>
          ) : null}
          <p>
            <Link
              className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--clr-teal-accent)] transition hover:text-[var(--clr-pink-accent)]"
              href={`/posts/${id}`}
            >
              Read article
            </Link>
          </p>
        </div>
      </article>
    </li>
  );
}
