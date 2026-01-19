"use client";
import { useState } from "react";

const name = "Vaishnavi ji";

const noLines = [
  "No? 😭",
  "Are you sure? 🥺",
  "Sach me no? 😔",
  "Ek chance? 😭💗",
  "Pleaseeee 🫂",
  "Vaishnavi ji… maan jao na 🥹",
  "Last time puch raha hu 😭",
  "Okay okay… YES kar do 😭💘"
];

export default function Home() {
  const [step, setStep] = useState("ask");
  const [noIndex, setNoIndex] = useState(0);

  const onYes = () => setStep("yes");
  const onNo = () => setNoIndex((p) => (p + 1) % noLines.length);

  return (
    <div className="wrap">
      <div className="card">
        {step === "ask" && (
          <>
            <h1>{name}, Will You Be My Valentine? 💗</h1>
            <p className="small">(Warning: “No” dabane pe main emotional ho jaunga 😭)</p>

            <div className="btnRow">
              <button className="yes" onClick={onYes}>Yes 💘</button>
              <button className="no" onClick={onNo}>{noLines[noIndex]}</button>
            </div>

            <div className="hr" />
            <p><b>Bonus:</b> Yes karte hi surprise unlock 😌✨</p>
          </>
        )}

        {step === "yes" && (
          <>
            <h1>YAYYYY!! 😭💗✨</h1>
            <p>Hey {name} 🫂<br />Thank youuu for saying YES 💘</p>

            <div className="hr" />

            <p><a className="linkBtn" href="/letter">Read Letter 💌</a></p>
            <p><a className="linkBtn" href="/song">Open Song 🎶</a></p>
            <p><a className="linkBtn" href="/games">Play Games 🎮</a></p>
          </>
        )}
      </div>
    </div>
  );
}