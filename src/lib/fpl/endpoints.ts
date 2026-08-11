const FPL_API_BASE_URL = "https://fantasy.premierleague.com";

export function createFplApiUrl(path: string) {
  return new URL(path, FPL_API_BASE_URL);
}

export function getEntryEndpoint(entryId: number) {
  return `/api/entry/${entryId}/`;
}

export function getBootstrapStaticEndpoint() {
  return "/api/bootstrap-static/";
}

export function getGameweekLiveEndpoint(gameweek: number) {
  return `/api/event/${gameweek}/live/`;
}

export function getMiniLeagueStandingsEndpoint(leagueId: number, page = 1) {
  return `/api/leagues-classic/${leagueId}/standings/?page_standings=${page}`;
}

export function getManagerGameweekPicksEndpoint(
  entryId: number,
  gameweek: number
) {
  return `/api/entry/${entryId}/event/${gameweek}/picks/`;
}

export function getManagerTransfersEndpoint(entryId: number) {
  return `/api/entry/${entryId}/transfers/`;
}
