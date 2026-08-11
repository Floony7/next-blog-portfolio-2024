export type FplClassicLeague = {
  name: string;
  entry_rank: number;
  entry_last_rank: number;
};

export type FplEntryResponse = {
  leagues?: {
    classic?: FplClassicLeague[];
  };
};

export type FplBootstrapElement = {
  id: number;
  first_name: string;
  second_name: string;
  web_name: string;
  element_type: number;
  team: number;
};

export type FplBootstrapEvent = {
  id: number;
  name: string;
  is_current: boolean;
  is_next: boolean;
  is_finished: boolean;
  finished: boolean;
};

export type FplBootstrapResponse = {
  elements: FplBootstrapElement[];
  events: FplBootstrapEvent[];
};

export type FplGameweekLiveElement = {
  id: number;
  stats: {
    total_points: number;
  };
};

export type FplGameweekLiveResponse = {
  elements: FplGameweekLiveElement[];
};

export type FplMiniLeagueStanding = {
  entry: number;
  entry_name: string;
  player_name: string;
  rank: number;
  last_rank: number;
  total: number;
};

export type FplMiniLeagueNewEntry = {
  entry: number;
  entry_name: string;
  joined_time: string;
  player_first_name: string;
  player_last_name: string;
};

export type FplMiniLeaguePage<TResult> = {
  has_next: boolean;
  page: number;
  results: TResult[];
};

export type FplMiniLeague = {
  id: number;
  name: string;
  created: string;
  closed: boolean;
  max_entries: number | null;
  league_type: string;
  scoring: string;
  admin_entry: number | null;
  start_event: number;
  code_privacy: string;
  has_cup: boolean;
  cup_league: number | null;
  rank: number | null;
};

export type FplMiniLeagueStandingsResponse = {
  new_entries: FplMiniLeaguePage<FplMiniLeagueNewEntry>;
  last_updated_data: string | null;
  league: FplMiniLeague;
  standings: FplMiniLeaguePage<FplMiniLeagueStanding>;
};

export type FplManagerPick = {
  element: number;
  position: number;
  multiplier: number;
  is_captain: boolean;
  is_vice_captain: boolean;
};

export type FplManagerPicksResponse = {
  active_chip: string | null;
  entry_history: {
    points: number;
    total_points: number;
    event_transfers: number;
    event_transfers_cost: number;
    points_on_bench: number;
  };
  picks: FplManagerPick[];
};

export type FplManagerTransfer = {
  element_in: number;
  element_in_cost: number;
  element_out: number;
  element_out_cost: number;
  entry: number;
  event: number;
  time: string;
};

export type PlayerGameweekScore = {
  id: number;
  name: string;
  points: number;
};

export type MiniLeagueManagerGameweekRow = {
  entryId: number;
  teamName: string;
  playerName: string;
  transferredIn: PlayerGameweekScore[];
  transferredOut: PlayerGameweekScore[];
  transferPointsDelta: number;
  transferCost: number;
  bench: PlayerGameweekScore[];
  chipUsed: string | null;
  captain: PlayerGameweekScore | null;
  captainPoints: number;
  gameweekPoints: number;
  totalPoints: number;
  benchPoints: number;
};
