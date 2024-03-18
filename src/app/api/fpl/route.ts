import { NextResponse } from "next/server";

const ENDPOINT = 'https://fantasy.premierleague.com/api/entry/9348/';

export async function GET() {
const res = await fetch(ENDPOINT);
const data = await res.json();

// const entries = Object.entries(data);
const overallEntry = data.leagues.classic.find(e => e.name === "Overall");

return NextResponse.json(overallEntry);
}