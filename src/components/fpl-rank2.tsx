import { getFplStats } from "@/actions/fpl";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default async function FplRank2({ fplId }: { fplId: number }) {
  const allStats = await getFplStats(fplId);
  const overallEntry = allStats?.leagues?.classic?.find(
    (entry) => entry.name === "Overall"
  );

  if (!overallEntry) {
    return (
      <section className="flex justify-center border-t border-[var(--clr-border)] p-3 text-[var(--clr-muted)]">
        <h4 className="m-0 p-0 flex justify-center">
          Fantasy Premier League rank unavailable
        </h4>
      </section>
    );
  }

  const rankChange = () => {
    const percentChange =
      ((overallEntry.entry_last_rank - overallEntry.entry_rank) /
        overallEntry.entry_last_rank) *
      100;
    return Math.round(percentChange);
  };

  const change = rankChange();

  return (
    <section className="flex justify-center border-t border-[var(--clr-border)] p-3 text-[var(--clr-muted)]">
      <div>
        <h4 className="m-0 flex justify-center p-0 text-[var(--clr-text)]">
          My Fantasy Premier League
        </h4>
        <div className="flex md:justify-center font-mono">
          Rank: {formatNumber(overallEntry.entry_rank)} |
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
    </section>
  );
}

function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}
