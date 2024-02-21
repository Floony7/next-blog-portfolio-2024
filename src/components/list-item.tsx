import Link from "next/link";
import { BlogPost } from "../lib/posts";
import getFormattedDate from "@/lib/format-date";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="mt-4 text-2xl text-white/90">
      <Link
        className="underline underline-offset-4 hover:text-cyan-400"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm uppercase text-teal-500 mt-1">{formattedDate}</p>
    </li>
  );
}
