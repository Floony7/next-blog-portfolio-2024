import { Hero } from "@/components/hero";
import { Posts } from "@/components/posts";

export default function Home() {
  return (
    <section>
      <Hero />
      <div className="site-width  p-4">
        <Posts limit={3} />
      </div>
    </section>
  );
}
