"use server";


import { BlogPost, getSortedPostsData } from "@/lib/posts";
export async function getPostsByTag(formData: FormData) {
    const tag = formData.get('tag');
    if (!tag) {
        return;
    }
    console.log("TAG: ", tag);
    const postsFilteredByTag = getSortedPostsData();

   return postsFilteredByTag.filter(p => p.tags.includes(tag as string));
  }
