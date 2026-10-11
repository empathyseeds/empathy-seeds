import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { isValidLikeItemId } from "../../lib/like-items";

export const runtime = "nodejs";

const visitorCookie = "empathyseeds_like_visitor";
const maxAge = 60 * 60 * 24 * 365;
const toggleScript = `
local key = KEYS[1]
local visitor = ARGV[1]
local mode = ARGV[2]
if mode == "get" then
  return { redis.call("SCARD", key), redis.call("SISMEMBER", key, visitor) }
end
local liked
if redis.call("SISMEMBER", key, visitor) == 1 then
  redis.call("SREM", key, visitor)
  liked = 0
else
  redis.call("SADD", key, visitor)
  liked = 1
end
return { redis.call("SCARD", key), liked }
`;

function visitorId(request: NextRequest) {
  return request.cookies.get(visitorCookie)?.value || randomUUID();
}

function setVisitorCookie(response: NextResponse, id: string) {
  response.cookies.set(visitorCookie, id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge,
    path: "/",
  });
  return response;
}

async function readLikeState(itemId: string, id: string, mode: "get" | "toggle") {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) throw new Error("Likes storage is not configured");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      "EVAL",
      toggleScript,
      "1",
      `empathyseeds:likes:${itemId}`,
      id,
      mode,
    ]),
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Likes storage request failed");
  const body = (await response.json()) as { result?: [number, number] };
  if (!body.result || body.result.length !== 2) {
    throw new Error("Unexpected likes storage response");
  }
  return { count: Number(body.result[0]), liked: Number(body.result[1]) === 1 };
}

export async function GET(request: NextRequest) {
  const itemId = request.nextUrl.searchParams.get("id") ?? "";
  if (!isValidLikeItemId(itemId)) {
    return NextResponse.json({ error: "Unknown article or story" }, { status: 404 });
  }

  const id = visitorId(request);
  try {
    const state = await readLikeState(itemId, id, "get");
    return setVisitorCookie(NextResponse.json(state), id);
  } catch {
    return setVisitorCookie(
      NextResponse.json({ error: "Likes are temporarily unavailable" }, { status: 503 }),
      id,
    );
  }
}

export async function POST(request: NextRequest) {
  let itemId = "";
  try {
    const body = (await request.json()) as { itemId?: unknown };
    if (typeof body.itemId === "string") itemId = body.itemId;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (!isValidLikeItemId(itemId)) {
    return NextResponse.json({ error: "Unknown article or story" }, { status: 404 });
  }

  const id = visitorId(request);
  try {
    const state = await readLikeState(itemId, id, "toggle");
    return setVisitorCookie(NextResponse.json(state), id);
  } catch {
    return setVisitorCookie(
      NextResponse.json({ error: "Likes are temporarily unavailable" }, { status: 503 }),
      id,
    );
  }
}
