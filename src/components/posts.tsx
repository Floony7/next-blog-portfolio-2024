import { getSortedPostsData } from "../lib/posts";
import ListItem from "./list-item";

export const Posts = (props: { limit?: number }) => {
  const posts = getSortedPostsData(props.limit);
  return (
    <section className="mt-2">
      <h2 className="text-4xl font-bold dark:text-white/90 font-mono">
        Recent Posts
      </h2>
      <ul className="w-full space-y-6">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} displayPrecis={true} />
        ))}
      </ul>
    </section>
  );
};
