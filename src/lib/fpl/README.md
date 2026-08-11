# FPL API Endpoints

The Fantasy Premier League API is not officially documented, so treat these
endpoints as integration details that may change between seasons.

Base URL:

```txt
https://fantasy.premierleague.com
```

## Global Data

### Bootstrap Static

```txt
GET /api/bootstrap-static/
```

Use for:

- Player metadata
- Team metadata
- Position metadata
- Gameweek/event metadata
- Current, next and finished gameweek state

Useful response fields:

- `elements`
- `events`
- `teams`
- `element_types`

### Gameweek Live Data

```txt
GET /api/event/{gameweek}/live/
```

Use for:

- Player gameweek points
- Player gameweek stats
- Live or completed event scoring

Useful response fields:

- `elements`
- `elements[].id`
- `elements[].stats.total_points`

## League Data

### Classic Mini League Standings

```txt
GET /api/leagues-classic/{leagueId}/standings/?page_standings={page}
```

Use for:

- Mini league manager list
- Team names
- Manager names
- Entry IDs
- League rank
- Total points

Useful response fields:

- `standings.has_next`
- `standings.page`
- `standings.results`
- `standings.results[].entry`
- `standings.results[].entry_name`
- `standings.results[].player_name`
- `standings.results[].total`

## Manager Data

### Manager Entry

```txt
GET /api/entry/{entryId}/
```

Use for:

- Manager profile summary
- Overall league rank
- Classic leagues joined by the manager

Useful response fields:

- `leagues.classic`
- `leagues.classic[].name`
- `leagues.classic[].entry_rank`
- `leagues.classic[].entry_last_rank`

### Manager Gameweek Picks

```txt
GET /api/entry/{entryId}/event/{gameweek}/picks/
```

Use for:

- Starting XI
- Bench
- Captain
- Vice captain
- Chip used
- Gameweek points
- Total points
- Transfer cost
- Points on bench

Useful response fields:

- `active_chip`
- `entry_history.points`
- `entry_history.total_points`
- `entry_history.event_transfers`
- `entry_history.event_transfers_cost`
- `entry_history.points_on_bench`
- `picks`
- `picks[].element`
- `picks[].position`
- `picks[].multiplier`
- `picks[].is_captain`
- `picks[].is_vice_captain`

### Manager Transfers

```txt
GET /api/entry/{entryId}/transfers/
```

Use for:

- Transfer history
- Players transferred in
- Players transferred out
- Transfer gameweek

Useful response fields:

- `event`
- `entry`
- `element_in`
- `element_in_cost`
- `element_out`
- `element_out_cost`
- `time`

## Planned Dashboard Mapping

The `/fpl-mini-league-tools` page will combine these endpoints into one row per
manager.

| Dashboard column | Source |
| --- | --- |
| Team Name | Mini league standings |
| User's name | Mini league standings |
| Transferred in players | Manager transfers + bootstrap static + gameweek live |
| Transferred out players | Manager transfers + bootstrap static + gameweek live |
| Points gained / lost from transfers | Manager transfers + gameweek live |
| Points hit | Manager gameweek picks `entry_history.event_transfers_cost` |
| Bench players | Manager gameweek picks + bootstrap static + gameweek live |
| Chip used | Manager gameweek picks `active_chip` |
| Captain | Manager gameweek picks + bootstrap static |
| Captain points | Manager gameweek picks + gameweek live |
| Gameweek points | Manager gameweek picks `entry_history.points` |
| Total points | Manager gameweek picks or mini league standings |
| Bench points | Manager gameweek picks `entry_history.points_on_bench` |

## Notes

- Mini league standings are paginated.
- The first version of this project should use `FPL_MINI_LEAGUE_ID` on the
  server rather than accepting arbitrary league IDs from the client.
- Cache API requests with `fetch(..., { next: { revalidate } })` to avoid
  making unnecessary calls to the FPL API.
- Transfer impact should probably be shown in two ways:
  - Raw transfer player delta: transferred-in points minus transferred-out
    points.
  - Net transfer impact: raw transfer player delta minus transfer cost.
