import { tags } from "@/data/tags";

export const TagSearch = () => {
  return (
    <section className="mt-6 flex flex-wrap gap-1">
      {tags.length > 0
        ? tags.map((t) => (
            <button
              key="tag"
              className="rounded-full bg-cyan-700 text-white px-2 py-1 mx-1 hover:bg-amber-700 duration-200"
            >
              {t}
            </button>
          ))
        : null}
    </section>
  );
};
