import { fetchFpl } from "./client";
import {
  getBootstrapStaticEndpoint,
  getEntryEndpoint,
  getGameweekLiveEndpoint,
  getManagerGameweekPicksEndpoint,
  getManagerTransfersEndpoint,
  getMiniLeagueStandingsEndpoint,
} from "./endpoints";
import type {
  FplBootstrapResponse,
  FplEntryResponse,
  FplGameweekLiveResponse,
  FplManagerPicksResponse,
  FplManagerTransfer,
  FplMiniLeagueStandingsResponse,
} from "./types";

export function getFplEntry(entryId: number) {
  return fetchFpl<FplEntryResponse>(getEntryEndpoint(entryId), {
    revalidate: 60 * 60,
  });
}

export function getBootstrapStatic() {
  return fetchFpl<FplBootstrapResponse>(getBootstrapStaticEndpoint(), {
    revalidate: 60 * 60 * 6,
  });
}

export function getGameweekLiveData(gameweek: number) {
  return fetchFpl<FplGameweekLiveResponse>(
    getGameweekLiveEndpoint(gameweek),
    {
      revalidate: 60 * 15,
    }
  );
}

export function getMiniLeagueStandings(leagueId: number, page = 1) {
  return fetchFpl<FplMiniLeagueStandingsResponse>(
    getMiniLeagueStandingsEndpoint(leagueId, page),
    {
      revalidate: 60 * 30,
    }
  );
}

export function getManagerGameweekPicks(entryId: number, gameweek: number) {
  return fetchFpl<FplManagerPicksResponse>(
    getManagerGameweekPicksEndpoint(entryId, gameweek),
    {
      revalidate: 60 * 30,
    }
  );
}

export function getManagerTransfers(entryId: number) {
  return fetchFpl<FplManagerTransfer[]>(getManagerTransfersEndpoint(entryId), {
    revalidate: 60 * 30,
  });
}
