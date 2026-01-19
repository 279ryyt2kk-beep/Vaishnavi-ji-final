"use client";
import { useEffect, useMemo, useState } from "react";

const EMOJIS = ["💗", "🌹", "🍫", "🎀", "🧸", "✨"];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function GamesPage() {
  const [deck, setDeck] = useState([]);
  const [flipped, setFlipped] = useState([]); // indexes
  const [matched, setMatched] = useState([]); // indexes
  const [moves, setMoves] = useState(0);

  const totalPairs = useMemo(() => EMOJIS.length, []);

  const newGame = () => {
    const cards = shuffle([...EMOJIS, ...EMOJIS]).map((emoji, idx) => ({
      id: idx + "-" + emoji,
      emoji
    }));
    setDeck(cards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  useEffect(() => {
    newGame();
  }, []);

  const onCardClick = (i) => {
    if (matched.includes(i)) return;
    if (flipped.includes(i)) return;
    if (flipped.length === 2) return;

    const next = [...flipped, i];
    setFlipped(next);

    if (next.length === 2) {
      setMoves((m) => m + 1);

      const a = deck[next[0]];
      const b = deck[next[1]];

      if (a?.emoji === b?.emoji) {
        setMatched((m) => [...m, next[0], next[1]]);
        setTimeout(() => setFlipped([]), 450);
      } else {
        setTimeout(() => setFlipped([]), 650);
      }
    }
  };

  const matchedPairs = Math.floor(matched.length / 2);

  return (
    <div className="wrap">
      <div className="card">
        <h1>Memory Match 🧠💗</h1>
        <p className="small">Tap 2 cards and match the emojis ✨</p>

        <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
          <div style={{ flex: 1, padding: 12, borderRadius: 16, border: "1px solid rgba(0,0,0,0.08)" }}>
            <b>Moves</b>
            <div style={{ fontSize: 22 }}>{moves}</div>
          </div>

          <div style={{ flex: 1, padding: 12, borderRadius: 16, border: "1px solid rgba(0,0,0,0.08)" }}>
            <b>Matched</b>
            <div style={{ fontSize: 22 }}>
              {matchedPairs}/{totalPairs}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 10,
            marginTop: 16
          }}
        >
          {deck.map((card, i) => {
            const isOpen = flipped.includes(i) || matched.includes(i);
            return (
              <button
                key={card.id}
                onClick={() => onCardClick(i)}
                style={{
                  padding: 18,
                  borderRadius: 16,
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "white",
                  fontSize: 22,
                  minHeight: 54
                }}
              >
                {isOpen ? card.emoji : "?"}
              </button>
            );
          })}
        </div>

        <div className="btnRow" style={{ marginTop: 16 }}>
          <button className="no" onClick={newGame}>New Game 🔄</button>
          <a className="linkBtn" href="/">Back 💗</a>
        </div>

        {matchedPairs === totalPairs && (
          <>
            <div className="hr" />
            <p><b>Yayyy Vaishnavi ji! 🎉💗</b> You completed the game ✨</p>
          </>
        )}
      </div>
    </div>
  );
}