"use client";

import { getPostsByTag } from "@/actions/actions";
import { tags } from "@/data/mock";
import { useState } from "react";

export const TagSearch = () => {
  return (
    <section className="mt-6 flex flex-wrap gap-1">
      <form action={getPostsByTag}>
        {tags.length > 0
          ? tags.map((t) => (
              <button
                name="tag"
                type="submit"
                key="tag"
                className="rounded-full bg-cyan-700 text-white px-2 py-1 mx-1 hover:bg-amber-700 duration-200"
                value={t}
              >
                {t}
              </button>
            ))
          : null}
      </form>
    </section>
  );
};
