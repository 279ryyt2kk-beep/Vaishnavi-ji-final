"use client";
import { useState } from "react";

export default function GamesPage() {
  const [moves, setMoves] = useState(0);
  const [matched, setMatched] = useState(0);

  const reset = () => {
    setMoves(0);
    setMatched(0);
  };

  const tap = () => {
    setMoves((m) => m + 1);
    if (matched < 6) setMatched((x) => x + 1);
  };

  return (
    <div className="wrap">
      <div className="card">
        <h1>Valentine Memory Match 🧠💗</h1>
        <p className="small">Tap cards and match the pairs ✨</p>

        <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
          <div
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 16,
              border: "1px solid rgba(0,0,0,0.08)"
            }}
          >
            <b>Moves</b>
            <div style={{ fontSize: 22 }}>{moves}</div>
          </div>

          <div
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 16,
              border: "1px solid rgba(0,0,0,0.08)"
            }}
          >
            <b>Matched</b>
            <div style={{ fontSize: 22 }}>{matched}/6</div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
            marginTop: 16
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <button
              key={i}
              onClick={tap}
              style={{
                padding: 18,
                borderRadius: 16,
                border: "1px solid rgba(0,0,0,0.08)",
                background: "white",
                fontSize: 18
              }}
            >
              ?
            </button>
          ))}
        </div>

        <div className="btnRow" style={{ marginTop: 16 }}>
          <button className="no" onClick={reset}>
            Reset Game
          </button>
          <a className="linkBtn" href="/">
            Restart 💗
          </a>
        </div>
      </div>
    </div>
  );
}