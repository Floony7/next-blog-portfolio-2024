import { unstable_cache } from "next/cache";

import {
  getBootstrapStatic,
  getGameweekLiveData,
  getManagerGameweekPicks,
  getManagerTransfers,
  getMiniLeagueStandings,
} from "./service";
import type {
  FplBootstrapElement,
  FplBootstrapResponse,
  FplGameweekLiveResponse,
  FplManagerPicksResponse,
  FplManagerTransfer,
  FplMiniLeagueStanding,
  MiniLeagueManagerGameweekRow,
  PlayerGameweekScore,
} from "./types";

const DAY_IN_SECONDS = 60 * 60 * 24;
const ACTIVE_GAMEWEEK_REVALIDATE_SECONDS = 60 * 15;

// type PlayerPosition = "GK" | "DEF" | "MID" | "FWD";

// const playerPositions: Record<number, PlayerPosition> = {
//   1: "GK",
//   2: "DEF",
//   3: "MID",
//   4: "FWD",
// };

type PlayerLookup = {
  players: Map<number, FplBootstrapElement>;
  points: Map<number, number>;
};

type BuildGameweekSummaryParams = {
  bootstrap: FplBootstrapResponse;
  gameweekLive: FplGameweekLiveResponse;
  managerData: {
    standing: FplMiniLeagueStanding;
    picks: FplManagerPicksResponse;
    previousPicks: FplManagerPicksResponse | null;
    transfers: FplManagerTransfer[];
  }[];
  gameweek: number;
};

export type MiniLeagueGameweekAnalysis = {
  gameweek: FplBootstrapResponse["events"][number] | null;
  summaries: MiniLeagueManagerGameweekRow[];
};

const getCachedMiniLeagueBootstrap = unstable_cache(
  async () => {
    const bootstrap = await getBootstrapStatic({ cache: "no-store" });

    if (!bootstrap) {
      return null;
    }

    return {
      elements: bootstrap.elements.map((player) => ({
        id: player.id,
        first_name: player.first_name,
        second_name: player.second_name,
        web_name: player.web_name,
        element_type: player.element_type,
        team: player.team,
      })),
      events: bootstrap.events.map((event) => ({
        id: event.id,
        name: event.name,
        is_current: event.is_current,
        is_next: event.is_next,
        is_finished: event.is_finished,
        finished: event.finished,
      })),
    } satisfies FplBootstrapResponse;
  },
  ["fpl-mini-league-bootstrap"],
  { revalidate: ACTIVE_GAMEWEEK_REVALIDATE_SECONDS }
);

export async function getMiniLeagueGameweekAnalysis(
  gameweek?: number
): Promise<MiniLeagueGameweekAnalysis> {
  const leagueId = Number(process.env.FPL_MINI_LEAGUE_ID ?? 120307);

  if (!leagueId) {
    throw new Error("Missing FPL_MINI_LEAGUE_ID");
  }

  const bootstrap = await getCachedMiniLeagueBootstrap();

  if (!bootstrap) {
    return {
      gameweek: null,
      summaries: [],
    };
  }

  const activeGameweek = getActiveGameweek(bootstrap, gameweek);
  const activeGameweekEvent = bootstrap.events.find(
    (event) => event.id === activeGameweek
  ) ?? null;
  const gameweekDataRevalidate = activeGameweekEvent?.finished
    ? DAY_IN_SECONDS
    : ACTIVE_GAMEWEEK_REVALIDATE_SECONDS;

  console.info(
    `Mini league analysis requested for league ${leagueId}, gameweek ${activeGameweek}`
  );

  const [leagueStandings, gameweekLive] = await Promise.all([
    getMiniLeagueStandingRows(leagueId),
    getGameweekLiveData(activeGameweek, { revalidate: gameweekDataRevalidate }),
  ]);

  if (!leagueStandings || !gameweekLive) {
    return {
      gameweek: activeGameweekEvent,
      summaries: [],
    };
  }

  const managerData = await Promise.all(
    leagueStandings.map(async (standing) => {
      const previousGameweek = activeGameweek - 1;
      const [picks, previousPicks, transfers] = await Promise.all([
        getManagerGameweekPicks(standing.entry, activeGameweek, {
          revalidate: gameweekDataRevalidate,
        }),
        previousGameweek > 0
          ? getManagerGameweekPicks(standing.entry, previousGameweek, {
              revalidate: DAY_IN_SECONDS,
            })
          : Promise.resolve(null),
        getManagerTransfers(standing.entry, { revalidate: DAY_IN_SECONDS }),
      ]);

      if (!picks || !transfers) {
        return null;
      }

      return {
        standing,
        picks,
        previousPicks,
        transfers,
      };
    })
  );

  return {
    gameweek: activeGameweekEvent,
    summaries: buildMiniLeagueGameweekSummary({
      bootstrap,
      gameweekLive,
      managerData: managerData.filter(isManagerGameweekData),
      gameweek: activeGameweek,
    }),
  };
}

async function getMiniLeagueStandingRows(leagueId: number) {
  const standings = await getMiniLeagueStandings(leagueId, 1, {
    revalidate: DAY_IN_SECONDS,
  });

  if (!standings) {
    return null;
  }

  const results = [...(standings.standings.results ?? [])];
  let page = standings.standings.page ?? 1;
  let hasNext = standings.standings.has_next ?? false;

  while (hasNext) {
    page += 1;

    const nextPage = await getMiniLeagueStandings(leagueId, page, {
      revalidate: DAY_IN_SECONDS,
    });

    if (!nextPage) {
      break;
    }

    results.push(...(nextPage.standings.results ?? []));
    hasNext = nextPage.standings.has_next ?? false;
  }

  return results;
}

export function buildMiniLeagueGameweekSummary({
  bootstrap,
  gameweekLive,
  managerData,
  gameweek,
}: BuildGameweekSummaryParams): MiniLeagueManagerGameweekRow[] {
  const lookup = createPlayerLookup(bootstrap, gameweekLive);

  return managerData.map(({ standing, picks, previousPicks, transfers }) => {
    const gameweekTransfers = transfers.filter(
      (transfer) => transfer.event === gameweek
    );
    const { transferredIn, transferredOut } = getGameweekTransferScores(
      picks,
      previousPicks,
      gameweekTransfers,
      lookup
    );
    const transferCost = picks.entry_history.event_transfers_cost;
    const transferPointsDelta =
      sumPlayerPoints(transferredIn) -
      sumPlayerPoints(transferredOut) -
      transferCost;
    const bench = picks.picks
      .filter((pick) => pick.position > 11)
      .map((pick) => createPlayerGameweekScore(pick.element, lookup));
    const captainPick =
      picks.picks.find((pick) => pick.is_captain) ?? null;
    const captain = captainPick
      ? createPlayerGameweekScore(captainPick.element, lookup)
      : null;
    const captainPoints = captain
      ? captain.points * (captainPick?.multiplier ?? 1)
      : 0;

    return {
      entryId: standing.entry,
      teamName: standing.entry_name,
      playerName: standing.player_name,
      transferredIn,
      transferredOut,
      transferPointsDelta,
      transferCost,
      bench,
      chipUsed: formatChip(picks.active_chip),
      captain,
      captainPoints,
      gameweekPoints: picks.entry_history.points,
      totalPoints: picks.entry_history.total_points || standing.total,
      benchPoints: picks.entry_history.points_on_bench,
    };
  });
}

function getGameweekTransferScores(
  picks: FplManagerPicksResponse,
  previousPicks: FplManagerPicksResponse | null,
  gameweekTransfers: FplManagerTransfer[],
  lookup: PlayerLookup
) {
  if (usesFinalSquadTransferDiff(picks.active_chip) && previousPicks) {
    return getSquadDiffTransferScores(previousPicks, picks, lookup);
  }

  return {
    transferredIn: gameweekTransfers.map((transfer) =>
      createPlayerGameweekScore(transfer.element_in, lookup)
    ),
    transferredOut: gameweekTransfers.map((transfer) =>
      createPlayerGameweekScore(transfer.element_out, lookup)
    ),
  };
}

function usesFinalSquadTransferDiff(activeChip: string | null) {
  return activeChip === "wildcard" || activeChip === "freehit";
}

function getSquadDiffTransferScores(
  previousPicks: FplManagerPicksResponse,
  currentPicks: FplManagerPicksResponse,
  lookup: PlayerLookup
) {
  const previousSquad = new Set(
    previousPicks.picks.map((pick) => pick.element)
  );
  const currentSquad = new Set(currentPicks.picks.map((pick) => pick.element));

  return {
    transferredIn: [...currentSquad]
      .filter((playerId) => !previousSquad.has(playerId))
      .map((playerId) => createPlayerGameweekScore(playerId, lookup)),
    transferredOut: [...previousSquad]
      .filter((playerId) => !currentSquad.has(playerId))
      .map((playerId) => createPlayerGameweekScore(playerId, lookup)),
  };
}

function createPlayerLookup(
  bootstrap: FplBootstrapResponse,
  gameweekLive: FplGameweekLiveResponse
): PlayerLookup {
  return {
    players: new Map(bootstrap.elements.map((player) => [player.id, player])),
    points: new Map(
      gameweekLive.elements.map((player) => [
        player.id,
        player.stats.total_points,
      ])
    ),
  };
}

function createPlayerGameweekScore(
  playerId: number,
  lookup: PlayerLookup
): PlayerGameweekScore {
  const player = lookup.players.get(playerId);


  return {
    id: playerId,
    name: player?.web_name ?? `Player ${playerId}`,
    points: lookup.points.get(playerId) ?? 0,
    // position: player ? playerPositions[player.element_type] : undefined,
  };
}

function sumPlayerPoints(players: PlayerGameweekScore[]) {
  return players.reduce((total, player) => total + player.points, 0);
}

function formatChip(activeChip: string | null) {
  const chipMap: Record<string, string> = {
    bboost: "BB",
    "3xc": "TC",
    freehit: "FH",
    wildcard: "WC",
  };

  return activeChip ? chipMap[activeChip] ?? activeChip.toUpperCase() : null;
}

function isManagerGameweekData(
  manager: BuildGameweekSummaryParams["managerData"][number] | null
): manager is BuildGameweekSummaryParams["managerData"][number] {
  return manager !== null;
}

function getActiveGameweek(
  bootstrap: FplBootstrapResponse,
  requestedGameweek?: number
) {
  if (requestedGameweek) {
    return requestedGameweek;
  }

  return (
    bootstrap.events.find((event) => event.is_current)?.id ??
    bootstrap.events.find((event) => event.is_next)?.id ??
    bootstrap.events.find((event) => !event.is_finished)?.id ??
    1
  );
}
