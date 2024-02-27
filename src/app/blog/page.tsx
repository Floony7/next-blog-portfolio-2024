import { Posts } from "@/components/posts";
import { PostList } from "./post-list";
import { getSortedPostsData } from "@/lib/posts";
import { TagSearch } from "./tag-search";

export default function Blog() {
  // Todo: Dynamically source posts based on tag or get all posts
  // May need to use conetxt to serve this data
  const posts = getSortedPostsData();

  return (
    <section className="site-width p-6 mt-10 mb-6">
      <h1 className="page-title">Dev Blog</h1>
      <section className="grid-2-1">
        <Posts />
        <aside className="bg-slate-800 p-4 rounded-xl">
          <h2 className="text-4xl font-bold dark:text-white/90 font-mono">
            Topics
          </h2>
          {/* <PostList posts={posts} /> */}
          <TagSearch />
        </aside>
      </section>
    </section>
  );
}
