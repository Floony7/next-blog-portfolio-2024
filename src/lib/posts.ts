import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import { rehypePrettyCode } from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  precis: string;
};

const postsDirectory = path.join(process.cwd(), "/src/blogposts");

export function getSortedPostsData(limit?: number) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: matterResult.data.tags ?? [],
      precis: matterResult.data.precis
    };

    // Combine the data with the id
    return blogPost;
  });
  // Sort posts by date
  const length = allPostsData.length;
  return allPostsData.slice(0, limit ?? length).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

 const processedContent = await remark()
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypePrettyCode, {
    theme: 'one-dark-pro',
    onVisitLine(node) {
      if (node.children.length === 0) {
        node.children = [{ type: 'text', value: ' ' }]
      }
    },
  })
  .use(rehypeStringify)
  .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
    tags: matterResult.data.tags,
    precis: matterResult.data.precis
  };

  return blogPostWithHTML;
}
