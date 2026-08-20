import { getMiniLeagueStandings } from "@/lib/fpl/service";

type PlayerPoints = {
  name: string;
  points: number;
  position?: "GK" | "DEF" | "MID" | "FWD";
};

type Chip = "none" | "FH" | "WC" | "BB" | "TC";

type GameweekSummary = {
  teamName: string;
  userName: string;
  transferredIn: PlayerPoints[];
  transferredOut: PlayerPoints[];
  transferPointsResult: number;
  pointsHit: number;
  benchPlayers: PlayerPoints[];
  chipUsed: Chip;
  captain: PlayerPoints;
};

async function getGameweekSummaries(): Promise<GameweekSummary[]> {
  const { default: gameweekSummaries } =
    await import("@/data/gameweek-summaries.json");

  return gameweekSummaries as GameweekSummary[];
}

function PlayerPointsList({ players }: { players: PlayerPoints[] }) {
  return (
    <ul className="space-y-1">
      {players.map((player) => (
        <li
          key={formatName(player.name)}
          className="flex min-w-36 justify-between gap-3 md:min-w-0 md:flex-col md:gap-0 xl:flex-row xl:gap-3"
        >
          <span>{formatName(player.name)}</span>
          <span className="font-mono text-sm text-[var(--clr-muted)]">
            {player.points}
          </span>
        </li>
      ))}
    </ul>
  );
}

function formatPointsDelta(points: number) {
  return points > 0 ? `+${points}` : `${points}`;
}

function formatName(name: string): string {
  if (!name) return "";
  const nameArray = name.split(/\s+/);
  const first = nameArray[0].charAt(0);
  const rest = nameArray.slice(1).join(" ");

  return `${first}. ${rest}`;
}

export default async function MiniLeagueTools() {
  const [standings, transferSummaries] = await Promise.all([
    getMiniLeagueStandings(120307, 1),
    getGameweekSummaries(),
  ]);
  const leagueName = standings?.league?.name ?? "Mini league";

  return (
    <main className="site-width py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--clr-teal-accent)]">
          {leagueName}
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          FPL Mini League Tools
        </h1>
        <p className="mt-4 text-lg text-[var(--clr-muted)]">
          Starter transfer summary table ready for API populated team data.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-[var(--clr-border)] bg-[var(--clr-surface)] shadow-xl shadow-slate-950/5 backdrop-blur">
        <div className="overflow-x-auto md:overflow-x-visible">
          <table className="w-full min-w-[1180px] divide-y divide-[var(--clr-border)] text-left text-sm md:min-w-0 md:table-fixed">
            <colgroup>
              <col className="md:w-[12%]" />
              <col className="md:w-[12%]" />
              <col className="md:w-[12%]" />
              <col className="md:w-[12%]" />
              <col className="md:w-[6%]" />
              <col className="md:w-[6%]" />
              <col className="md:w-[12%]" />
              <col className="md:w-[7%]" />
              <col className="md:w-[14%]" />
            </colgroup>
            <caption className="sr-only">
              Mini league transfer summaries by team
            </caption>
            <thead className="bg-white/60 text-xs uppercase tracking-wide text-[var(--clr-muted)] dark:bg-white/5">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Team
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  User
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Transfers In
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Transfers Out
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Hits
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Net
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Bench
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Chip?
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Captain
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--clr-border)]">
              {transferSummaries.map((summary) => (
                <tr
                  key={summary.teamName}
                  className="align-top transition-colors hover:bg-white/50 dark:hover:bg-white/5"
                >
                  <th
                    scope="row"
                    className="px-4 py-4 font-semibold text-[var(--clr-text)]"
                  >
                    {summary.teamName}
                  </th>
                  <td className="px-4 py-4 text-[var(--clr-muted)]">
                    {summary.userName}
                  </td>
                  <td className="px-4 py-4">
                    <PlayerPointsList players={summary.transferredIn} />
                  </td>
                  <td className="px-4 py-4">
                    <PlayerPointsList players={summary.transferredOut} />
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-mono font-semibold">
                      {summary.pointsHit === 0 ? "0" : `${summary.pointsHit}`}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={
                        summary.transferPointsResult >= 0
                          ? "font-mono font-semibold text-[var(--clr-green)]"
                          : "font-mono font-semibold text-[var(--clr-red)]"
                      }
                    >
                      {formatPointsDelta(summary.transferPointsResult)}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <PlayerPointsList players={summary.benchPlayers} />
                  </td>
                  <td className="px-2 py-4">
                    <ChipPill chip={summary.chipUsed} />
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-semibold">
                      {formatName(summary.captain.name)}
                    </span>
                    <span className="ml-2 font-mono text-sm text-[var(--clr-muted)]">
                      {summary.captain.points}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

const colorMap: Record<Chip, string> = {
  none: "transparent",
  FH: "var(--clr-blue-dark)",
  WC: "var(--clr-green-dark)",
  BB: "var(--clr-purple-dark)",
  TC: "var(--clr-red-dark)",
};

function getColor(c: Chip): string {
  return colorMap[c];
}

function ChipPill({ chip }: { chip: Chip }) {
  if (chip.toLowerCase() === "none") return "";

  return (
    <span
      style={{ backgroundColor: getColor(chip) }}
      className="inline-flex rounded-full border border-[var(--clr-border)] px-3 py-1 text-xs font-semibold text-white]"
    >
      {chip}
    </span>
  );
}
