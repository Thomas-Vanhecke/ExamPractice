export default function ScoreScreen({
  correct,
  total,
  chapterTitle,
  color,
  accent,
  onRetry,
  onHome,
}) {
  const pct = Math.round((correct / total) * 100);

  let emoji = "😬";
  let grade = "Try again";
  if (pct >= 90) { emoji = "🏆"; grade = "Excellent!"; }
  else if (pct >= 75) { emoji = "🎉"; grade = "Great work!"; }
  else if (pct >= 60) { emoji = "👍"; grade = "Good effort!"; }
  else if (pct >= 50) { emoji = "📚"; grade = "Keep studying"; }

  const barColor =
    pct >= 60
      ? `linear-gradient(90deg, ${color}, ${accent})`
      : "linear-gradient(90deg, #b91c1c, #ef4444)";

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 60, marginBottom: 14 }}>{emoji}</div>

      <h2
        style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 800,
          fontSize: "2rem",
          color: accent,
          marginBottom: 4,
        }}
      >
        {grade}
      </h2>

      <p
        style={{
          color: "#64748b",
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          marginBottom: 24,
        }}
      >
        {chapterTitle}
      </p>

      {/* Score card */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          border: `1.5px solid ${color}55`,
          borderRadius: 16,
          padding: "2rem",
          marginBottom: 24,
          boxShadow: `0 0 40px ${color}22`,
        }}
      >
        <div
          style={{
            fontSize: "3.5rem",
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            color: "#f1f5f9",
            lineHeight: 1,
          }}
        >
          {correct}
          <span style={{ color: "#334155" }}>/{total}</span>
        </div>

        <div
          style={{
            fontSize: "1.4rem",
            fontFamily: "'Space Mono', monospace",
            color: pct >= 60 ? accent : "#ef4444",
            marginTop: 8,
          }}
        >
          {pct}%
        </div>

        {/* Progress bar */}
        <div
          style={{
            margin: "1.5rem 0 0",
            background: "#1e293b",
            borderRadius: 99,
            height: 8,
          }}
        >
          <div
            style={{
              width: `${pct}%`,
              background: barColor,
              height: "100%",
              borderRadius: 99,
              transition: "width 1s ease",
              boxShadow: `0 0 10px ${color}88`,
            }}
          />
        </div>
      </div>

      {/* Action buttons */}
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={onRetry}
          style={{
            background: `${color}22`,
            border: `1.5px solid ${color}`,
            borderRadius: 10,
            padding: "0.7rem 1.5rem",
            color: accent,
            fontFamily: "'Sora', sans-serif",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "0.95rem",
          }}
        >
          🔄 Retry
        </button>
        <button
          onClick={onHome}
          style={{
            background: "#1e293b",
            border: "1.5px solid #334155",
            borderRadius: 10,
            padding: "0.7rem 1.5rem",
            color: "#94a3b8",
            fontFamily: "'Sora', sans-serif",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "0.95rem",
          }}
        >
          🏠 Home
        </button>
      </div>
    </div>
  );
}