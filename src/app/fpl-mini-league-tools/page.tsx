import { getMiniLeagueStandings } from "@/lib/fpl/service";

export default async function MiniLeagueTools() {
  const standings = await getMiniLeagueStandings(120307, 1);
  console.log("standings", standings?.league);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">FPL Mini League Tools</h1>
      <p className="text-lg text-center">
        Welcome to the FPL Mini League Tools!
      </p>
    </div>
  );
}
