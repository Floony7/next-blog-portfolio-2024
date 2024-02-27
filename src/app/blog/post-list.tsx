import { BlogPost } from "@/lib/posts";
import PostListItem from "./post-list-item";

export const PostList = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className="mt-6">
      <h2 className="text-4xl font-bold dark:text-white/90 font-mono">
        Blogroll
      </h2>
      <ul className="w-full list-none">
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};
