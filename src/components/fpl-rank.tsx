"use client";

import { useState, useEffect, useMemo } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function FplRank() {
  const [ranks, setRanks] = useState({ rank: 0, oldRank: 0 });

  const getFplStats = async () => {
    const result = await fetch("/api/fpl");
    const data = await result.json();
    return data;
  };

  useEffect(() => {
    const allStats = getFplStats();
    allStats.then((s) =>
      setRanks({ rank: s.entry_rank, oldRank: s.entry_last_rank })
    );
  }, []);

  const rankChange = useMemo(() => {
    const percent = (ranks.rank / ranks.oldRank) * 100;
    const delta = Math.round(percent) - 100;
    if (delta > 0) {
      return -delta;
    }
    return delta;
  }, [ranks.oldRank, ranks.rank]);

  console.log(rankChange);

  return (
    <section className="bg-gradient-to-r from-cyan-400 to-green-500 text-white p-3">
      <div className="flex justify-center">
        FPL Rank: {ranks.rank} change:&nbsp;
        <span className="mx-1">
          {rankChange < 0 ? (
            <FaChevronDown className="mt-2" />
          ) : (
            <FaChevronUp className="mt-2" />
          )}
        </span>
        {Math.abs(rankChange)}
      </div>
    </section>
  );
}
