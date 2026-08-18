import { getMiniLeagueStandings } from "@/lib/fpl/service";

type PlayerPoints = {
  name: string;
  points: number;
};

type TransferSummary = {
  teamName: string;
  userName: string;
  transferredIn: PlayerPoints[];
  transferredOut: PlayerPoints[];
  transferPointsResult: number;
  pointsHit: number;
  benchPlayers: PlayerPoints[];
  chipUsed: string;
  captain: PlayerPoints;
};

const transferSummaries: TransferSummary[] = [
  {
    teamName: "Mighty Reds",
    userName: "Alex Carter",
    transferredIn: [
      { name: "Bukayo Saka", points: 9 },
      { name: "Ollie Watkins", points: 6 },
    ],
    transferredOut: [
      { name: "Phil Foden", points: 2 },
      { name: "Darwin Nunez", points: 1 },
    ],
    transferPointsResult: 12,
    pointsHit: -4,
    benchPlayers: [
      { name: "Joao Pedro", points: 5 },
      { name: "Ezri Konsa", points: 2 },
      { name: "Bernd Leno", points: 1 },
    ],
    chipUsed: "WC",
    captain: { name: "Erling Haaland", points: 14 },
  },
  {
    teamName: "Expected Toulouse",
    userName: "Sam Morgan",
    transferredIn: [{ name: "Cole Palmer", points: 11 }],
    transferredOut: [{ name: "Bruno Fernandes", points: 4 }],
    transferPointsResult: 7,
    pointsHit: 0,
    benchPlayers: [
      { name: "Anthony Gordon", points: 3 },
      { name: "Pervis Estupinan", points: 1 },
      { name: "Alphonse Areola", points: 0 },
    ],
    chipUsed: "None",
    captain: { name: "Mohamed Salah", points: 18 },
  },
  {
    teamName: "Ctrl Alt De Ligt",
    userName: "Priya Shah",
    transferredIn: [
      { name: "Son Heung-min", points: 8 },
      { name: "Dominic Solanke", points: 2 },
    ],
    transferredOut: [
      { name: "Martin Odegaard", points: 3 },
      { name: "Alexander Isak", points: 9 },
    ],
    transferPointsResult: -6,
    pointsHit: -8,
    benchPlayers: [
      { name: "Levi Colwill", points: 6 },
      { name: "Morgan Rogers", points: 2 },
      { name: "Matt Turner", points: 0 },
    ],
    chipUsed: "TC",
    captain: { name: "Son Heung-min", points: 8 },
  },
];

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
  const standings = await getMiniLeagueStandings(120307, 1);
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
                  Net
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Hits
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
                    <span className="font-mono font-semibold">
                      {summary.pointsHit === 0 ? "0" : `${summary.pointsHit}`}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <PlayerPointsList players={summary.benchPlayers} />
                  </td>
                  <td className="px-2 py-4">
                    <span className="inline-flex rounded-full border border-[var(--clr-border)] px-3 py-1 text-xs font-semibold text-[var(--clr-muted)]">
                      {summary.chipUsed}
                    </span>
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
