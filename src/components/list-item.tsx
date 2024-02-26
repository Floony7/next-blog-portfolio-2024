import Link from "next/link";
import { BlogPost } from "../lib/posts";
import getFormattedDate from "@/lib/format-date";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, precis } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="my-6 text-2xl text-white/90">
      <Link className="hover:text-cyan-400 font-mono" href={`/posts/${id}`}>
        {title}
      </Link>
      <p className="text-sm uppercase text-teal-500 my-1">{formattedDate}</p>
      <p className="text-base">
        {precis}
        <br />
        <Link
          className="underline underline-offset-2 hover:text-orange-500 text-cyan-400 transition-all duration-200"
          href={`/posts/${id}`}
        >
          Read More &gt;&gt;
        </Link>
      </p>
    </li>
  );
}
