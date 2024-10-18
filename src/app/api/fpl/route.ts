import { NextResponse } from "next/server";

export async function GET(id: number) {
const res = await fetch(`https://fantasy.premierleague.com/api/entry/${id}`);
const data = await res.json();

const overallEntry = data.leagues.classic.find((e: { name: string; }) => e.name === "Overall");

return NextResponse.json(overallEntry);
}