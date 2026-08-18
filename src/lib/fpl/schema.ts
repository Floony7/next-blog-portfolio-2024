import { z } from 'zod';

export const FplMiniLeagueStandingSchema = z.object({
    entry: z.number(),
    entry_name: z.string(),
    player_name: z.string(),
    rank: z.number(),
    last_rank: z.number(),
    total: z.number(),
});

export const FplMiniLeagueNewEntrySchema = z.object({
    entry: z.number(),
    entry_name: z.string(),
    joined_time: z.string(),
    player_first_name: z.string(),
    player_last_name: z.string(),
});

export const FplMiniLeaguePageSchema = <T extends z.ZodTypeAny>(item: T) => z.object({
    has_next: z.boolean(),
    page: z.number(),
    results: z.array(item),
});

export const FplMiniLeagueSchema = z.object({
    id: z.number(),
    name: z.string(),
    created: z.string(),
    closed: z.boolean(),
    max_entries: z.number().nullable(),
    league_type: z.string(),
    scoring: z.string(),
    admin_entry: z.number().nullable(),
    start_event: z.number(),
    code_privacy: z.string(),
    has_cup: z.boolean(),
    cup_league: z.number().nullable(),
    rank: z.number().nullable(),
});

export const FplMiniLeagueStandingsResponseSchema = z.object({
    new_entries: FplMiniLeaguePageSchema(FplMiniLeagueNewEntrySchema),
    last_updated_data: z.string().nullable(),
    league: FplMiniLeagueSchema,
    standings: FplMiniLeaguePageSchema(FplMiniLeagueStandingSchema).partial(),
});

export const FplClassicLeagueSchema = z.object({
    name: z.string(),
    entry_rank: z.number(),
    entry_last_rank: z.number(),
});

export const FplEntryResponseSchema = z.object({
    leagues: z.object({
        classic: z.array(FplClassicLeagueSchema).optional(),
    }).optional(),
});

export const FplGameweekLiveElementSchema = z.object({
    id: z.number(),
    stats: z.object({ total_points: z.number() })
});

export const FplGameweekLiveResponseSchema = z.object({
    elements: z.array(FplGameweekLiveElementSchema),
});

export const FplBootstrapElementSchema = z.object({
    id: z.number(),
    first_name: z.string(),
    second_name: z.string(),
    web_name: z.string(),
    element_type: z.number(),
    team: z.number(),
});

export const FplBootstrapEventSchema = z.object({
    id: z.number(),
    name: z.string(),
    is_current: z.boolean(),
    is_next: z.boolean(),
    is_finished: z.boolean(),
    finished: z.boolean(),
});

export const FplBootstrapResponseSchema = {
  elements: z.array(FplBootstrapElementSchema),
  events: z.array(FplBootstrapEventSchema),
};

export const FplManagerPickSchema = z.object({
  element: z.number(),
  position: z.number(),
  multiplier: z.number(),
  is_captain: z.boolean(),
  is_vice_captain: z.boolean(),
});

export const FplManagerPicksResponseSchema = z.object({
  active_chip: z.string().nullable(),
  entry_history: {
    points: z.number(),
    total_points: z.number(),
    event_transfers: z.number(),
    event_transfers_cost: z.number(),
    points_on_bench: z.number(),
  },
  picks: z.array(FplManagerPickSchema),
});

export const FplManagerTransferSchema = {
  element_in: z.number(),
  element_in_cost: z.number(),
  element_out: z.number(),
  element_out_cost: z.number(),
  entry: z.number(),
  event: z.number(),
  time: z.string(),
};

export const PlayerGameweekScoreSchema = z.object({
  id: z.number(),
  name: z.string(),
  points: z.number(),
});

export const MiniLeagueManagerGameweekRowSchema = {
  entryId: z.number(),
  teamName: z.string(),
  playerName: z.string(),
  transferredIn: z.array(PlayerGameweekScoreSchema),
  transferredOut: z.array(PlayerGameweekScoreSchema),
  transferPointsDelta: z.number(),
  transferCost: z.number(),
  bench: z.array(PlayerGameweekScoreSchema),
  chipUsed: z.string().nullable(),
  captain: PlayerGameweekScoreSchema.nullable(),
  captainPoints: z.number(),
  gameweekPoints: z.number(),
  totalPoints: z.number(),
  benchPoints: z.number(),
};
