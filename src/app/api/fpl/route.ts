import { NextResponse } from "next/server";

const ENDPOINT = 'https://fantasy.premierleague.com/api/entry/15590/';

export async function GET() {
const res = await fetch(ENDPOINT);
const data = await res.json();

const overallEntry = data.leagues.classic.find((e: { name: string; }) => e.name === "Overall");

return NextResponse.json(overallEntry);
}