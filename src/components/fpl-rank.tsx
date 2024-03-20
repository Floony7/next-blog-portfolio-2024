"use client";

import { useState, useEffect, useMemo, Suspense, useCallback } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const getFplStats = async () => {
  const result = await fetch("/api/fpl");
  const data = await result.json();
  return data;
};

export default function FplRank() {
  const { rank, oldRank } = useSetFPLData();

  const rankChange = useMemo(() => {
    const percent = (rank / oldRank) * 100;
    const delta = Math.round(percent) - 100;
    if (delta > 0) {
      return -delta;
    }
    return delta;
  }, [rank, oldRank]);

  return (
    <section className="bg-gradient-to-r from-cyan-400 to-green-500 text-white p-3">
      <div className="flex justify-center">
        FPL Rank: {rank} | Change:&nbsp;
        <span className="mx-1">
          {rankChange < 0 ? (
            <FaChevronDown className="mt-2" />
          ) : (
            <FaChevronUp className="mt-2" />
          )}
        </span>
        {isNaN(rankChange) ? 0 : `${Math.abs(rankChange)}%`}
      </div>
    </section>
  );
}

function useSetFPLData() {
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

  return { rank: ranks.rank, oldRank: ranks.oldRank };
}

// function useFetch(endpoint: string) {
//   const [data, setData] = useState<any>();

//   const getData = useCallback(async () => {
//     try {
//       const result = await fetch(endpoint);
//       const returnedData = await result.json();
//       return returnedData;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }, [endpoint]);

//   useEffect(() => {
//     const data = getData();
//     data.then((s) => setData(data));
//   }, [getData]);

//   return data;
// }
