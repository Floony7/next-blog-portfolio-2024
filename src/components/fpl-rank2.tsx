import { revalidatePath } from "next/cache";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

async function getFplStats(fplId: number) {
  const res = await fetch(
    `https://fantasy.premierleague.com/api/entry/${fplId}/`,
    { cache: "default" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  revalidatePath("/about");
  return res.json();
}

export default async function FplRank2({ fplId }: { fplId: number }) {
  const allStats = await getFplStats(fplId);
  const overallEntry = allStats.leagues.classic.find(
    (e: { name: string }) => e.name === "Overall"
  );

  const rankChange = () => {
    const percentChange =
      ((overallEntry.entry_last_rank - overallEntry.entry_rank) /
        overallEntry.entry_last_rank) *
      100;
    return Math.round(percentChange);
  };

  function Rank() {
    const change = rankChange();
    return (
      <div>
        <h4 className="m-0 p-0 flex justify-center">
          My Fantasy Premier League
        </h4>
        <div className="flex md:justify-center font-mono">
          Rank: {overallEntry.entry_rank} |
          <span className="mx-1 flex flex-nowrap">
            Change:
            {change < 0 ? (
              <FaChevronDown className="mt-2 mx-1" />
            ) : (
              <FaChevronUp className="mt-2" />
            )}
          </span>
          {isNaN(change) ? 0 : `${Math.abs(change)}%`}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-r from-cyan-500 to-green-600 text-white p-3 flex justify-center">
      <Rank />
    </section>
  );
}
