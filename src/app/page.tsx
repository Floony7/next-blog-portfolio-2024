import { Hero } from "@/components/home/hero";
import RecentWriting from "@/components/home/recent-writing";
import SelectedWork from "@/components/home/selected-work";
import TechAreas from "@/components/home/tech-areas";

export default function Home() {
  return (
    <section className="pb-16">
      <Hero />
      <TechAreas />
      <SelectedWork />
      <RecentWriting />
    </section>
  );
}
