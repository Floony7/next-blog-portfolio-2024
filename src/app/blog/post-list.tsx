import { BlogPost } from "@/lib/posts";
import PostListItem from "./post-list-item";

export const PostList = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className="mt-6">
      <ul className="w-full list-none">
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};
