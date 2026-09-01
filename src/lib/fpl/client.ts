import { createFplApiUrl } from "./endpoints";

type FetchFplOptions = {
  revalidate?: number;
  cache?: RequestCache;
};

export async function fetchFpl<TResponse>(
  path: string,
  options: FetchFplOptions = {}
): Promise<TResponse | null> {
  const { cache, revalidate = 60 * 30 } = options;

  try {
    const res = await fetch(createFplApiUrl(path), {
      ...(cache ? { cache } : { next: { revalidate } }),
    });

    if (!res.ok) {
      console.error(`FPL API request failed: ${path} ${res.status}`);
      return null;
    }

    return res.json() as Promise<TResponse>;
  } catch (error) {
    console.error(`FPL API request failed: ${path}`, error);
    return null;
  }
}
