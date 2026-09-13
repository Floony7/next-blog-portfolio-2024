import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, limit ?? length);
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const blogPostWithContent: BlogPost & { content: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
    tags: matterResult.data.tags,
    precis: matterResult.data.precis
  };

  return blogPostWithContent;
}
