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

type FplServiceOptions = {
  revalidate?: number;
  cache?: RequestCache;
};

export function getFplEntry(entryId: number, options: FplServiceOptions = {}) {
  return fetchFpl<FplEntryResponse>(getEntryEndpoint(entryId), {
    cache: options.cache,
    revalidate: options.revalidate ?? 60 * 60,
  });
}

export function getBootstrapStatic(options: FplServiceOptions = {}) {
  return fetchFpl<FplBootstrapResponse>(getBootstrapStaticEndpoint(), {
    cache: options.cache,
    revalidate: options.revalidate ?? 60 * 60 * 6,
  });
}

export function getGameweekLiveData(
  gameweek: number,
  options: FplServiceOptions = {}
) {
  return fetchFpl<FplGameweekLiveResponse>(
    getGameweekLiveEndpoint(gameweek),
    {
      cache: options.cache,
      revalidate: options.revalidate ?? 60 * 15,
    }
  );
}

export function getMiniLeagueStandings(
  leagueId: number,
  page = 1,
  options: FplServiceOptions = {}
) {
  return fetchFpl<FplMiniLeagueStandingsResponse>(
    getMiniLeagueStandingsEndpoint(leagueId, page),
    {
      cache: options.cache,
      revalidate: options.revalidate ?? 60 * 30,
    }
  );
}

export function getManagerGameweekPicks(
  entryId: number,
  gameweek: number,
  options: FplServiceOptions = {}
) {
  return fetchFpl<FplManagerPicksResponse>(
    getManagerGameweekPicksEndpoint(entryId, gameweek),
    {
      cache: options.cache,
      revalidate: options.revalidate ?? 60 * 30,
    }
  );
}

export function getManagerTransfers(
  entryId: number,
  options: FplServiceOptions = {}
) {
  return fetchFpl<FplManagerTransfer[]>(getManagerTransfersEndpoint(entryId), {
    cache: options.cache,
    revalidate: options.revalidate ?? 60 * 30,
  });
}
