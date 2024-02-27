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
    <li className="text-xl text-white/90">
      <Link className="hover:text-cyan-400 font-mono" href={`/posts/${id}`}>
        {title}
      </Link>
      <p className="text-sm text-teal-500 my-1">{formattedDate}</p>
    </li>
  );
}
