import { useState } from "react";

export default function QuestionCard({
  question,
  questionIndex,
  total,
  onAnswer,
  onToggle,
  onSubmitMulti,
  onAnswerOpen,
  answered,
  selectedOption,
  color,
  accent,
}) {
  const [typedAnswer, setTypedAnswer] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const isOpen = question.type === "open";
  const isMulti = question.multiSelect === true;

  const selectedSet = new Set(Array.isArray(selectedOption) ? selectedOption : []);

  const handleOpenSubmit = () => {
    if (!typedAnswer.trim()) return;
    onAnswerOpen(typedAnswer.trim());
  };

  const handleOptionClick = (i) => {
    if (answered) return;
    if (isMulti) {
      onToggle(i);
    } else {
      onAnswer(i);
    }
  };

  return (
    <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", border: `1px solid ${color}44`, borderRadius: 16, padding: "2rem", boxShadow: `0 0 30px ${color}22` }}>

      {/* Counter badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <span style={{ background: `${color}22`, color: accent, border: `1px solid ${color}44`, borderRadius: 8, padding: "2px 10px", fontSize: 12, fontFamily: "'Space Mono', monospace", letterSpacing: 1 }}>
          {questionIndex + 1} / {total}
        </span>
        {isOpen && (
          <span style={{ background: "#7c3aed22", color: "#a78bfa", border: "1px solid #7c3aed44", borderRadius: 8, padding: "2px 10px", fontSize: 11, fontFamily: "'Space Mono', monospace", letterSpacing: 1 }}>
            OPEN VRAAG
          </span>
        )}
        {isMulti && (
          <span style={{ background: "#0369a122", color: "#38bdf8", border: "1px solid #0369a144", borderRadius: 8, padding: "2px 10px", fontSize: 11, fontFamily: "'Space Mono', monospace", letterSpacing: 1 }}>
            MEERDERE ANTWOORDEN
          </span>
        )}
      </div>

      {/* Question text */}
      <p style={{ color: "#f1f5f9", fontSize: "1.1rem", fontFamily: "'Sora', sans-serif", fontWeight: 600, lineHeight: 1.6, marginBottom: "1.5rem", whiteSpace: "pre-wrap" }}>
        {question.question}
      </p>

      {/* Code block */}
      {question.code && (
        <pre style={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 10, padding: "1rem 1.2rem", color: "#e2e8f0", fontSize: "0.85rem", fontFamily: "'Space Mono', monospace", overflowX: "auto", marginBottom: "1.5rem", whiteSpace: "pre", lineHeight: 1.7, textAlign: "left" }}>
          {question.code}
        </pre>
      )}

      {/* OPEN QUESTION */}
      {isOpen ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <textarea
            disabled={answered}
            value={typedAnswer}
            onChange={(e) => setTypedAnswer(e.target.value)}
            placeholder="Typ hier je antwoord..."
            rows={4}
            style={{ background: "#0f172a", border: `1.5px solid ${answered ? color + "88" : "#334155"}`, borderRadius: 10, padding: "0.8rem 1.1rem", color: "#f1f5f9", fontSize: "0.95rem", fontFamily: "'Sora', sans-serif", resize: "vertical", outline: "none" }}
          />
          {!answered && (
            <button onClick={handleOpenSubmit} style={{ alignSelf: "flex-end", background: `${color}cc`, border: "none", borderRadius: 10, padding: "0.6rem 1.4rem", color: "#0f172a", fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", letterSpacing: 1 }}>
              Controleer →
            </button>
          )}
          {answered && (
            <div style={{ background: `${color}11`, border: `1px solid ${color}33`, borderRadius: 10, padding: "0.9rem 1.2rem", marginTop: 4 }}>
              <div style={{ color: accent, fontWeight: 700, fontSize: "0.88rem", marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>MODELANTWOORD:</div>
              <div style={{ color: "#e2e8f0", fontSize: "0.95rem", fontFamily: "'Sora', sans-serif", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{question.answer}</div>
            </div>
          )}
        </div>
      ) : (
        /* MULTIPLE CHOICE */
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {question.options.map((opt, i) => {
            let bg = "#1e293b";
            let border = "#334155";
            let textColor = "#94a3b8";
            let icon = null;

            const isSelected = isMulti ? selectedSet.has(i) : selectedOption === i;

            if (answered) {
              if (isSelected) {
                bg = `${color}22`; border = color; textColor = accent; icon = "✓";
              }
            } else if (isSelected) {
              bg = `${color}18`; border = color; textColor = "#f1f5f9";
            }

            return (
              <button
                key={i}
                onClick={() => handleOptionClick(i)}
                style={{ background: bg, border: `1.5px solid ${border}`, borderRadius: 10, padding: "0.8rem 1.2rem", cursor: answered ? "default" : "pointer", textAlign: "left", color: textColor, fontSize: "0.95rem", fontFamily: "'Sora', sans-serif", display: "flex", alignItems: "center", gap: 10, transition: "all 0.2s ease" }}
              >
                <span style={{ minWidth: 26, height: 26, borderRadius: 6, background: "#0f172a", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontFamily: "'Space Mono', monospace", color: textColor, flexShrink: 0 }}>
                  {icon || String.fromCharCode(65 + i)}
                </span>
                {opt.text || opt}
              </button>
            );
          })}

          {/* Bevestig knop voor multi-select */}
          {isMulti && !answered && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, marginTop: 6 }}>
              <button
                onClick={onSubmitMulti}
                style={{ background: `${color}cc`, border: "none", borderRadius: 10, padding: "0.6rem 1.4rem", color: "#0f172a", fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", letterSpacing: 1 }}
              >
                Bevestig →
              </button>
            </div>
          )}

          {/* Explanation */}
          {answered && (
            <div style={{ marginTop: "1.2rem", background: `${color}11`, border: `1px solid ${color}33`, borderRadius: 10, padding: "0.8rem 1.2rem", color: "#94a3b8", fontSize: "0.88rem", fontFamily: "'Sora', sans-serif", lineHeight: 1.6 }}>
              <span style={{ color: accent, fontWeight: 600 }}>Explanation: </span>
              {question.explanation}
            </div>
          )}
        </div>
      )}
    </div>
  );
}