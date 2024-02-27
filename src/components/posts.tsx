import { getSortedPostsData } from "../lib/posts";
import ListItem from "./list-item";

export const Posts = (props: { limit?: number }) => {
  const posts = getSortedPostsData(props.limit);
  return (
    <section className="mt-2">
      <ul className="w-full space-y-6">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} displayPrecis={true} />
        ))}
      </ul>
    </section>
  );
};
