"use client";

const pics = [
  { src: "/photos/IMG_4033.jpeg", caption: "Us 💗" },
  { src: "/photos/IMG_4040.jpeg", caption: "My favorite person ✨" },
  { src: "/photos/IMG_4060.jpeg", caption: "Forever vibes 🫂" }
];

export default function PhotosPage() {
  const angles = ["-3deg", "2deg", "-2deg", "3deg"];

  return (
    <div className="wrap">
      <div className="card">
        <h1>Our Polaroids 📸💗</h1>
        <p className="small">Some moments I want to keep forever ✨</p>

        <div className="hr" />

        <div style={{ display: "grid", gap: 16 }}>
          {/* First photo big */}
          <div
            style={{
              background: "white",
              borderRadius: 22,
              padding: 14,
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.16)",
              transform: `rotate(${angles[0]})`
            }}
          >
            <img
              src={pics[0].src}
              alt="polaroid-0"
              style={{
                width: "100%",
                height: 260,
                objectFit: "cover",
                borderRadius: 18
              }}
            />
            <div style={{ paddingTop: 12, textAlign: "center" }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>{pics[0].caption}</div>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>
                — Vaishnavi ji 💗
              </div>
            </div>
          </div>

          {/* Other photos */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16
            }}
          >
            {pics.slice(1).map((p, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: 22,
                  padding: 14,
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.16)",
                  transform: `rotate(${angles[i + 1]})`
                }}
              >
                <img
                  src={p.src}
                  alt={`polaroid-${i + 1}`}
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 18
                  }}
                />

                <div style={{ paddingTop: 12, textAlign: "center" }}>
                  <div style={{ fontWeight: 800, fontSize: 15 }}>{p.caption}</div>
                  <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>
                    — Vaishnavi ji 💗
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hr" />

        <div className="btnRow">
          <a className="linkBtn" href="/">Back 💗</a>
        </div>
      </div>
    </div>
  );
}
