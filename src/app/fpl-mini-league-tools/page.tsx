import { getMiniLeagueGameweekAnalysis } from "@/lib/fpl/mini-league-analysis";
import { Metadata } from "next";
import type {
  MiniLeagueManagerGameweekRow,
  PlayerGameweekScore,
} from "@/lib/fpl/types";

export const metadata: Metadata = {
  title: "FPL Mini-league Tools",
  description: "See Fantasy Premier League mini-league details at a glance.",
};

function PlayerPointsList({ players }: { players: PlayerGameweekScore[] }) {
  if (!players.length) {
    return <span className="text-[var(--clr-muted)]">-</span>;
  }

  return (
    <ul className="space-y-1">
      {players.map((player) => (
        <li
          key={`${player.id}-${player.name}`}
          className="flex min-w-36 justify-between gap-3 md:min-w-0 md:flex-col md:gap-0 xl:flex-row xl:gap-3"
        >
          <span>
            {player.name}
            {player.position ? (
              <span className="ml-1 text-xs text-[var(--clr-muted)]">
                {player.position}
              </span>
            ) : null}
          </span>
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

function getBenchRegretSummary(
  summaries: MiniLeagueManagerGameweekRow[],
): MiniLeagueManagerGameweekRow | null {
  return summaries.reduce<MiniLeagueManagerGameweekRow | null>(
    (highestBenchTotal, summary) => {
      if (
        !highestBenchTotal ||
        summary.benchPoints > highestBenchTotal.benchPoints
      ) {
        return summary;
      }

      return highestBenchTotal;
    },
    null,
  );
}

type BestCaptainSummary = {
  playerName: string;
  points: number;
  managerNames: string[];
};

function getBestCaptainSummary(
  summaries: MiniLeagueManagerGameweekRow[],
): BestCaptainSummary | null {
  const bestCaptain = summaries.reduce<MiniLeagueManagerGameweekRow | null>(
    (highestCaptainTotal, summary) => {
      if (!summary.captain) {
        return highestCaptainTotal;
      }

      if (
        !highestCaptainTotal ||
        summary.captainPoints > highestCaptainTotal.captainPoints
      ) {
        return summary;
      }

      return highestCaptainTotal;
    },
    null,
  );

  if (!bestCaptain?.captain) {
    return null;
  }

  return {
    playerName: bestCaptain.captain.name,
    points: bestCaptain.captain.points * 2,
    managerNames: summaries
      .filter((summary) => summary.captain?.id === bestCaptain.captain?.id)
      .map((summary) => summary.playerName),
  };
}

// function formatName(name: string): string {
//   if (!name) return "";
//   const nameArray = name.split(/\s+/);
//   const first = nameArray[0].charAt(0);
//   const rest = nameArray.slice(1).join(" ");

//   return `${first}. ${rest}`;
// }

export default async function MiniLeagueTools() {
  const { gameweek, summaries: gameweekSummary } =
    await getMiniLeagueGameweekAnalysis();
  const benchRegretSummary = getBenchRegretSummary(gameweekSummary);
  const bestCaptainSummary = getBestCaptainSummary(gameweekSummary);
  const gameweekLabel = gameweek?.name ?? "the current gameweek";

  return (
    <main className="site-width py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--clr-teal-accent)]">
          Mini league: Kiwi Premier League
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          FPL Mini League Tools
        </h1>
        <p className="mt-4 text-lg text-[var(--clr-muted)]">
          Transfer, bench, chip and captain summary for {gameweekLabel}.
        </p>
      </div>

      <div className="mb-8 overflow-hidden rounded-lg border border-[var(--clr-border)] bg-[var(--clr-surface)] shadow-xl shadow-slate-950/5 backdrop-blur">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] divide-y divide-[var(--clr-border)] text-left text-sm">
            <colgroup>
              <col className="md:w-[16%]" />
              <col className="md:w-[42%]" />
              <col className="md:w-[42%]" />
            </colgroup>
            <caption className="sr-only">
              Mini league gameweek key facts
            </caption>
            <thead className="bg-white/60 text-xs uppercase tracking-wide text-[var(--clr-muted)] dark:bg-white/5">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Stat
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Summary
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--clr-border)]">
              <tr className="align-top">
                <th
                  scope="row"
                  className="px-4 py-4 font-semibold text-[var(--clr-text)]"
                >
                  Bench Regrets
                </th>
                {benchRegretSummary ? (
                  <>
                    <td className="px-4 py-4">
                      {benchRegretSummary.playerName} left{" "}
                      <span>{benchRegretSummary.benchPoints}</span> pts on the
                      bench
                    </td>
                    <td className="px-4 py-4 text-[var(--clr-muted)]">-</td>
                  </>
                ) : (
                  <td colSpan={2} className="px-4 py-4 text-[var(--clr-muted)]">
                    No bench regret data available yet.
                  </td>
                )}
              </tr>
              <tr className="align-top">
                <th
                  scope="row"
                  className="px-4 py-4 font-semibold text-[var(--clr-text)]"
                >
                  Best Captain
                </th>
                {bestCaptainSummary ? (
                  <>
                    <td className="px-4 py-4 font-semibold">
                      {bestCaptainSummary.playerName} (
                      {bestCaptainSummary.points})
                    </td>
                    <td className="px-4 py-4 text-[var(--clr-muted)]">
                      {bestCaptainSummary.managerNames.join(", ")}
                    </td>
                  </>
                ) : (
                  <td colSpan={2} className="px-4 py-4 text-[var(--clr-muted)]">
                    No captain data available yet.
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-[var(--clr-border)] bg-[var(--clr-surface)] shadow-xl shadow-slate-950/5 backdrop-blur">
        <div className="overflow-x-auto md:overflow-x-visible">
          <table className="w-full min-w-[1180px] divide-y divide-[var(--clr-border)] text-left text-sm md:min-w-0 md:table-fixed">
            <colgroup>
              <col className="md:w-[16%]" />
              <col className="md:w-[12%]" />
              <col className="md:w-[12%]" />
              <col className="md:w-[12%]" />
              <col className="md:w-[5%]" />
              <col className="md:w-[5%]" />
              <col className="md:w-[14%]" />
              <col className="md:w-[5%]" />
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
                  Captain
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--clr-border)]">
              {gameweekSummary.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    className="px-4 py-8 text-center text-[var(--clr-muted)]"
                  >
                    No gameweek summary data available yet.
                  </td>
                </tr>
              ) : null}
              {gameweekSummary.map((summary) => (
                <tr
                  key={summary.entryId}
                  className="align-top transition-colors hover:bg-white/50 dark:hover:bg-white/5"
                >
                  <th
                    scope="row"
                    className="px-4 py-4 font-semibold text-[var(--clr-text)]"
                  >
                    {summary.teamName}
                    <br />
                    <div className="flex flex-col align-middle font-normal gap-2">
                      <span>
                        <span className="font-bold">
                          {summary.gameweekPoints}
                        </span>{" "}
                        ({summary.totalPoints})
                      </span>
                      <span>
                        <ChipPill chip={summary.chipUsed} />
                      </span>
                    </div>
                  </th>
                  <td className="px-4 py-4 text-[var(--clr-muted)]">
                    {summary.playerName}
                  </td>
                  <td className="px-4 py-4">
                    <PlayerPointsList players={summary.transferredIn} />
                  </td>
                  <td className="px-4 py-4">
                    <PlayerPointsList players={summary.transferredOut} />
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-mono font-semibold">
                      {summary.transferCost === 0
                        ? "0"
                        : formatPointsDelta(-summary.transferCost)}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={
                        summary.transferPointsDelta >= 0
                          ? "font-mono font-semibold text-[var(--clr-green)]"
                          : "font-mono font-semibold text-[var(--clr-red)]"
                      }
                    >
                      {formatPointsDelta(summary.transferPointsDelta)}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <PlayerPointsList players={summary.bench} />
                  </td>
                  <td className="px-4 py-4">
                    {summary.captain ? (
                      <>
                        <span className="font-semibold">
                          {summary.captain.name}
                        </span>
                        <span className="ml-2 font-mono text-sm text-[var(--clr-muted)]">
                          {summary.captainPoints}
                        </span>
                      </>
                    ) : (
                      <span className="text-[var(--clr-muted)]">-</span>
                    )}
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

const colorMap: Record<string, string> = {
  FH: "var(--clr-blue-dark)",
  WC: "var(--clr-green-dark)",
  BB: "var(--clr-purple-dark)",
  TC: "var(--clr-red-dark)",
};

function getColor(chip: string): string {
  return colorMap[chip] ?? "var(--clr-blue-dark)";
}

function ChipPill({ chip }: { chip: string | null }) {
  if (!chip) return null;

  return (
    <span
      style={{ backgroundColor: getColor(chip) }}
      className="inline-flex rounded-full border border-[var(--clr-border)] px-3 py-1 text-xs font-semibold text-white"
    >
      {chip}
    </span>
  );
}
