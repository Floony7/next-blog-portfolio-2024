"use server";

import { getFplEntry } from "@/lib/fpl/service";
import type { FplEntryResponse } from "@/lib/fpl/types";

export type { FplClassicLeague } from "@/lib/fpl/types";

export async function getFplStats(
  fplId: number
): Promise<FplEntryResponse | null> {
  return getFplEntry(fplId);
}
