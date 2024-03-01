import { Hero } from "@/components/hero";
import { Posts } from "@/components/posts";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Hero />
      <div className="site-width p-4">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold dark:text-white/90 font-mono">
            Recent Posts
          </h2>
          <Link className="mt-4 fancy-anchor" href="/blog">
            View more posts &#10148;
          </Link>
        </div>
        <Posts limit={4} />
      </div>
    </section>
  );
}
