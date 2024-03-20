import Link from "next/link";
import getFormattedDate from "@/lib/format-date";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({ postId: post.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = params;
  const posts = getSortedPostsData();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.precis,
    keywords: post.tags.join(", "),
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    notFound();
  }

  const { title, date, contentHtml, tags } = await getPostData(postId);

  const published = getFormattedDate(date);

  return (
    <section className="site-width p-6 mt-10 mb-6 prose prose-xl prose-strong:text-gray-200 max-w-none">
      <h1 className="text-4xl text-white mt-4 mb-0">{title}</h1>
      <p className="uppercase text-sm text-teal-500">{published}</p>
      <p className="text-base">
        <strong>Tags:&nbsp;</strong>
        {tags
          ? tags.map((tag, i) => (
              <button
                key={i}
                className="rounded-full bg-cyan-700 text-white px-2 py-1 mx-1"
                disabled={true}
              >
                {tag}
              </button>
            ))
          : null}
      </p>
      <article className="text-gray-200 text-base">
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link className="fancy-anchor" href="/blog">
            ← Back to blog
          </Link>
        </p>
      </article>
    </section>
  );
}
