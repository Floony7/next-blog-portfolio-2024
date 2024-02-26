import { Posts } from "@/components/posts";

export default function Blog() {
  return (
    <section className="site-width p-6 mt-10 mb-6">
      <h1 className="page-title">Blog</h1>
      <section className="grid-2-1">
        <Posts />
        <aside>
          <h3>Blog tags</h3>
        </aside>
      </section>
    </section>
  );
}
