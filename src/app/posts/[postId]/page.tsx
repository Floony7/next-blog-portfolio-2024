import Link from "next/link";
import type { Element } from "hast";
import { MarkdownAsync } from "react-markdown";
import { rehypePrettyCode } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import getFormattedDate from "@/lib/format-date";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReturnLink from "@/components/return-link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({ postId: post.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
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

export default async function Post({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const posts = getSortedPostsData();
  const { postId } = await params;

  if (!posts.find((post) => post.id === postId)) {
    notFound();
  }

  const { title, date, content, tags } = await getPostData(postId);

  const published = getFormattedDate(date);

  return (
    <section className="site-width mb-16 mt-14">
      <header className="glass-panel rounded-[1.75rem] p-6 sm:p-10">
        <p className="text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
          {published}
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold sm:text-6xl">
          {title}
        </h1>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags
            ? tags.map((tag, i) => (
                <span key={i} className="soft-tag">
                  {tag}
                </span>
              ))
            : null}
        </div>
      </header>
      <article className="prose prose-xl prose-strong:text-[var(--clr-text)] mt-10 max-w-none text-[var(--clr-muted)]">
        <MarkdownAsync
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            [
              rehypePrettyCode,
              {
                theme: "one-dark-pro",
                onVisitLine(node: Element) {
                  if (node.children.length === 0) {
                    node.children = [{ type: "text", value: " " }];
                  }
                },
              },
            ],
          ]}
        >
          {content}
        </MarkdownAsync>
        <ReturnLink href="/blog" text="Back to blog" />
      </article>
    </section>
  );
}
