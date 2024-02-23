import { Posts } from "@/components/posts";
import Image from "next/image";

export default function Blog() {
  return (
    <section className="px-6 grid-2-1">
      <article>
        <Posts />
      </article>
      <aside className="flex flex-col bg-slate-800 min-h-screen">
        Categories
      </aside>
    </section>
  );
}
