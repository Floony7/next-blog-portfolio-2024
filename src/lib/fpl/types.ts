import { z } from 'zod';
import { FplGameweekLiveElementSchema, FplClassicLeagueSchema, FplBootstrapElementSchema, FplMiniLeaguePageSchema, FplGameweekLiveResponseSchema, FplMiniLeagueNewEntrySchema, FplMiniLeagueStandingSchema, FplMiniLeagueStandingsResponseSchema, FplEntryResponseSchema, FplBootstrapEventSchema, FplBootstrapResponseSchema, FplMiniLeagueSchema, FplManagerPickSchema, FplManagerPicksResponseSchema, FplManagerTransferSchema, PlayerGameweekScoreSchema, MiniLeagueManagerGameweekRowSchema } from './schema';

// FPL Classic
export type FplClassicLeague = z.infer<typeof FplClassicLeagueSchema>;
export type FplEntryResponse = z.infer<typeof FplEntryResponseSchema>;

// FPL Bootstrap
export type FplBootstrapElement = z.infer<typeof FplBootstrapElementSchema>;
export type FplBootstrapEvent = z.infer<typeof FplBootstrapEventSchema>;
export type FplBootstrapResponse = z.infer<typeof FplBootstrapResponseSchema>;

// FPL Gameweek live
export type FplGameweekLiveElement = z.infer<typeof FplGameweekLiveElementSchema>;
export type FplGameweekLiveResponse = z.infer<typeof FplGameweekLiveResponseSchema>;

// FPL Mini League
export type FplMiniLeagueStanding = z.infer<typeof FplMiniLeagueStandingSchema>;
export type FplMiniLeagueNewEntry = z.infer<typeof FplMiniLeagueNewEntrySchema>;
export type FplMiniLeaguePage<TResult> = z.infer<ReturnType<typeof FplMiniLeaguePageSchema<z.ZodType<TResult>>>>;
export type FplMiniLeague = z.infer<typeof FplMiniLeagueSchema>;
export type FplMiniLeagueStandingsResponse = z.infer<typeof FplMiniLeagueStandingsResponseSchema>;

// FPL Manager
export type FplManagerPick = z.infer<typeof FplManagerPickSchema>;
export type FplManagerPicksResponse = z.infer<typeof FplManagerPicksResponseSchema>;
export type FplManagerTransfer = z.infer<typeof FplManagerTransferSchema>;
export type PlayerGameweekScore = z.infer<typeof PlayerGameweekScoreSchema>;
export type MiniLeagueManagerGameweekRow = z.infer<typeof MiniLeagueManagerGameweekRowSchema>;
