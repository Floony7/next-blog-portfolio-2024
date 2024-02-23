import { Hero } from "@/components/hero";
import { Posts } from "@/components/posts";

export default function Home() {
  return (
    <section>
      <Hero />
      <div className="site-width">
        <Posts />
      </div>
    </section>
  );
}
