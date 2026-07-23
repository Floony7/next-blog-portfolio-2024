"use server";

export type FplClassicLeague = {
  name: string;
  entry_rank: number;
  entry_last_rank: number;
};

type FplEntryResponse = {
  leagues?: {
    classic?: FplClassicLeague[];
  };
};

const FPL_API_BASE_URL = "https://fantasy.premierleague.com";

function getFplEntryUrl(fplId: number) {
  return new URL(`/api/entry/${fplId}/`, FPL_API_BASE_URL);
}

export async function getFplStats(
  fplId: number
): Promise<FplEntryResponse | null> {
  try {
    const res = await fetch(getFplEntryUrl(fplId), {
      next: { revalidate: 60 * 60 },
    });

    if (!res.ok) {
      console.error(`FPL API request failed with status ${res.status}`);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("FPL API request failed", error);
    return null;
  }
}
