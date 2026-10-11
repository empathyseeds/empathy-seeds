"use client";

import { useEffect, useState } from "react";

type LikeState = {
  count: number;
  liked: boolean;
};

type LikeButtonProps = {
  itemId: string;
};

export default function LikeButton({ itemId }: LikeButtonProps) {
  const [state, setState] = useState<LikeState | null>(null);
  const [busy, setBusy] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`/api/likes?id=${encodeURIComponent(itemId)}`, { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Likes unavailable");
        return (await response.json()) as LikeState;
      })
      .then((result) => {
        if (active) setState(result);
      })
      .catch(() => {
        if (active) setUnavailable(true);
      });
    return () => {
      active = false;
    };
  }, [itemId]);

  async function toggleLike() {
    if (busy || !state) return;
    setBusy(true);
    try {
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId }),
      });
      if (!response.ok) throw new Error("Likes unavailable");
      setState((await response.json()) as LikeState);
      setUnavailable(false);
    } catch {
      setUnavailable(true);
    } finally {
      setBusy(false);
    }
  }

  if (unavailable) {
    return (
      <p className="mt-4 text-sm text-gray-500" role="status">
        Likes are temporarily unavailable.
      </p>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleLike}
      disabled={!state || busy}
      aria-pressed={state?.liked ?? false}
      aria-label={state ? `${state.liked ? "Unlike" : "Like"}; ${state.count} likes` : "Loading likes"}
      className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-full border border-rose-200 px-4 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-50 disabled:cursor-wait disabled:opacity-60"
    >
      <span aria-hidden="true">{state?.liked ? "♥" : "♡"}</span>
      <span>{state ? state.count : "…"}</span>
      <span>{state?.count === 1 ? "Like" : "Likes"}</span>
    </button>
  );
}
