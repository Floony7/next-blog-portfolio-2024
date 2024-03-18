import { Posts } from "@/components/posts";
import { tags } from "@/data/mock";
import { getSortedPostsData } from "@/lib/posts";

export default function Blog() {
  // Todo: Dynamically source posts based on tag or get all posts
  // May need to use context to serve this data
  const posts = getSortedPostsData();

  return (
    <section className="site-width p-6 mt-10 mb-6">
      <h1 className="page-title">Dev Blog</h1>
      <section className="grid-2-1">
        <Posts />
        <aside className="bg-slate-800 p-4 rounded-xl prose prose-md text-gray-200">
          <h2 className="text-4xl font-bold dark:text-white/90 font-mono">
            Topics
          </h2>
          <p>
            In a former life, I was a writer! A writer writes, so here&apos;s my
            contribution to humanity (well, at least the dev world).
          </p>
          <p>Topics I like to rant about:</p>
          <ul>
            {tags.length > 0 ? tags.map((t) => <li key={t}>{t}</li>) : null}
          </ul>
          <p>
            I plan to make the blog filter based on topic (tag) once this blog
            is large enough.
          </p>
          {/* <PostList posts={posts} /> */}
          {/* <TagSearch /> */}
        </aside>
      </section>
    </section>
  );
}
