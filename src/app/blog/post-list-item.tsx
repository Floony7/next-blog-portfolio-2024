import Link from "next/link";
import { BlogPost } from "@/lib/posts";
import getFormattedDate from "@/lib/format-date";

type Props = {
  post: BlogPost;
};

export default function PostListItem({ post }: Props) {
  const { id, title, date, precis } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="border-t border-[var(--clr-border)] py-4 text-xl text-[var(--clr-text)] first:border-t-0">
      <Link
        className="font-semibold no-underline transition hover:text-[var(--clr-sky-accent)]"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <p className="my-1 text-sm uppercase tracking-[0.18em] text-[var(--clr-muted)]">
        {formattedDate}
      </p>
    </li>
  );
}
