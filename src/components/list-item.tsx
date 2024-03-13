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
    <li className="my-6 text-2xl text-white/90 bg-slate-800 p-3 rounded-md">
      <Link className="hover:text-cyan-400 font-semibold" href={`/posts/${id}`}>
        {title}
      </Link>
      <p className="text-sm uppercase text-teal-500 my-1">{formattedDate}</p>
      {displayPrecis ? <p className="text-base">{precis}</p> : null}
      <p>
        <Link
          className="hover:text-orange-500 text-cyan-400 text-sm transition-all duration-200"
          href={`/posts/${id}`}
        >
          Read More &#10148;
        </Link>
      </p>
    </li>
  );
}
