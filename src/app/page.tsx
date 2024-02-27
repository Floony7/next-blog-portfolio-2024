import { Hero } from "@/components/hero";
import { Posts } from "@/components/posts";

export default function Home() {
  return (
    <section>
      <Hero />
      <div className="site-width p-4">
        <h2 className="text-4xl font-bold dark:text-white/90 font-mono">
          Recent Posts
        </h2>
        <Posts limit={3} />
      </div>
    </section>
  );
}
