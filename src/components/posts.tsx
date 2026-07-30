import { getSortedPostsData } from "../lib/posts";
import ListItem from "./list-item";

export const Posts = (props: { limit?: number }) => {
  const posts = getSortedPostsData(props.limit);
  return (
    <section className="mt-6">
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} displayPrecis={true} />
        ))}
      </ul>
    </section>
  );
};
