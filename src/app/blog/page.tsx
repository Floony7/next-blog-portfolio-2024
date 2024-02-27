import { Posts } from "@/components/posts";
import { PostList } from "./post-list";
import { getSortedPostsData } from "@/lib/posts";

export default function Blog() {
  // Todo: Dynamically source posts based on tag or get all posts
  // May need to use conetxt to serve this data
  const posts = getSortedPostsData();

  return (
    <section className="site-width p-6 mt-10 mb-6">
      <h1 className="page-title">Blog</h1>
      <section className="grid-2-1">
        <Posts />
        <aside className="bg-slate-700 p-4">
          <h3>Blogroll</h3>
          <PostList posts={posts} />
        </aside>
      </section>
    </section>
  );
}
