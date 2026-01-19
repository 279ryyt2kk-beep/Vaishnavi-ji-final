"use client";

const songs = [
  { title: "Waalian", line: "Some feelings feel calm and deep 💗" },
  { title: "Lag Jaa Gale", line: "Because closeness matters 🤍" },
  { title: "Billionera", line: "When emotions say more than words 💞" }
];

export default function SongPage() {
  return (
    <div className="wrap">
      <div className="card">
        <h1>For Vaishnavi ji 🎶</h1>
        <p className="small">Just some songs that feel like you 💗</p>

        <div className="hr" />

        {songs.map((s, i) => (
          <div
            key={i}
            style={{
              padding: 12,
              borderRadius: 16,
              border: "1px solid rgba(0,0,0,0.08)",
              marginBottom: 10
            }}
          >
            <b>{s.title}</b>
            <p style={{ margin: "6px 0 0" }}>{s.line}</p>
          </div>
        ))}

        <div className="hr" />

        <a className="linkBtn" href="/games">Next ✨ →</a>
      </div>
    </div>
  );
}