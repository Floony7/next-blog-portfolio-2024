import { getSortedPostsData } from "../lib/posts";
import ListItem from "./list-item";

export const Posts = () => {
  const posts = getSortedPostsData(3);
  return (
    <section className="mt-6 p-4">
      <h2 className="text-4xl font-bold dark:text-white/90 font-mono">
        Recent Posts
      </h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};
