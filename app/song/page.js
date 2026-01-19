"use client";

const songs = [
  {
    title: "Tere liye mai mandir jaau",
    line: "Ek feel jo dil se nikalti hai 💗",
    link: "https://open.spotify.com/track/3gixnmepHSsyAuho34rprN?si=Pm3ViZidTayd73I-vGCAYQ"
  },
  {
    title: "Ehsaas",
    line: "Bas tumhara ehsaas hi kaafi hai 🤍",
    link: "https://open.spotify.com/track/5PetOhEX9N0oyBB0Keqobv?si=_I6Q1MvrQveIdHCCSU3R2Q"
  },
  {
    title: "Barbaad",
    line: "Pyaar me thoda sa pagalpan bhi zaroori hai 💞",
    link: "https://open.spotify.com/track/7Csa4PStpuYIfUqNMKQ4V8?si=YXmfjx-xTeuxrP_fnWdw5A"
  }
];

export default function SongPage() {
  return (
    <div className="wrap">
      <div className="card">
        <h1>For Vaishnavi ji 🎶</h1>
        <p className="small">Tap & open in Spotify 💗</p>

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
            <b style={{ fontSize: 16 }}>{s.title}</b>
            <p style={{ margin: "6px 0 10px" }}>{s.line}</p>

            <a
              className="linkBtn"
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open on Spotify ▶️
            </a>
          </div>
        ))}

        <div className="hr" />

        <a className="linkBtn" href="/games">Next ✨ →</a>
      </div>
    </div>
  );
}