import type { MiniLeagueManagerGameweekRow } from "./types";

export async function getMiniLeagueGameweekAnalysis(
  gameweek: number
): Promise<MiniLeagueManagerGameweekRow[]> {
  const leagueId = Number(process.env.FPL_MINI_LEAGUE_ID);

  if (!leagueId) {
    throw new Error("Missing FPL_MINI_LEAGUE_ID");
  }

  console.info(
    `Mini league analysis requested for league ${leagueId}, gameweek ${gameweek}`
  );

  return [];
}
