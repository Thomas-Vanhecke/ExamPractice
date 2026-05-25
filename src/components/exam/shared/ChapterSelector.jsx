/**
 * ChapterSelector
 * Props:
 *   chapters   – array of chapter objects
 *   onSelect   – fn(chapterId) called when user picks a chapter or "all"
 *   scores     – object { [chapterId]: { correct, total } }
 *   examTitle  – string shown at the top
 *   examSub    – small subtitle string
 */
export default function ChapterSelector({ chapters, onSelect, scores, examTitle, examSub }) {
  return (
    <div>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            color: "#f1f5f9",
            marginBottom: "0.4rem",
            letterSpacing: -1,
          }}
        >
          {examTitle}
        </h1>
        <p
          style={{
            color: "#64748b",
            fontFamily: "'Space Mono', monospace",
            fontSize: 12,
          }}
        >
          {examSub}
        </p>
      </div>

      {/* Chapter grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 14,
          marginBottom: 20,
        }}
      >
        {chapters.map((ch) => {
          const sc = scores?.[ch.id];
          return (
            <button
              key={ch.id}
              onClick={() => onSelect(ch.id)}
              style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                border: `1.5px solid ${ch.color}55`,
                borderRadius: 14,
                padding: "1.4rem",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.25s ease",
                boxShadow: `0 0 20px ${ch.color}11`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = ch.color;
                e.currentTarget.style.boxShadow = `0 0 28px ${ch.color}44`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${ch.color}55`;
                e.currentTarget.style.boxShadow = `0 0 20px ${ch.color}11`;
              }}
            >
              {/* Icon dot */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: `${ch.color}22`,
                  border: `1px solid ${ch.color}55`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.7rem",
                  fontSize: 15,
                }}
              >
                {ch.icon || "📘"}
              </div>

              <h3
                style={{
                  color: ch.accent,
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  marginBottom: 5,
                  lineHeight: 1.3,
                }}
              >
                {ch.title}
              </h3>

              <p
                style={{
                  color: "#475569",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                }}
              >
                {ch.questions.length} questions
              </p>

              {sc !== undefined && (
                <div
                  style={{
                    marginTop: 8,
                    background: `${ch.color}18`,
                    borderRadius: 6,
                    padding: "3px 8px",
                    display: "inline-block",
                    color: ch.accent,
                    fontSize: 10,
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  Last: {sc.correct}/{sc.total} (
                  {Math.round((sc.correct / sc.total) * 100)}%)
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Full exam button */}
      <button
        onClick={() => onSelect("all")}
        style={{
          width: "100%",
          background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          border: "none",
          borderRadius: 12,
          padding: "1rem",
          color: "#fff",
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          cursor: "pointer",
          letterSpacing: 0.5,
        }}
      >
        🎯 Full Exam – All Chapters
      </button>
    </div>
  );
}