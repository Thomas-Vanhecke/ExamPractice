import { useNavigate } from "react-router-dom";

const SUBJECTS = [
  {
    id: "networks",
    title: "Computer Networks",
    sub: "Cisco ITN · OSI · IPv4 · CLI",
    icon: "🌐",
    color: "#0ea5e9",
    accent: "#38bdf8",
    route: "/networks",
    tags: ["Subnetting", "OSI Model", "CLI Commands", "IPv4"],
  },
  {
    id: "programming2",
    title: "Programming 2",
    sub: "Python · OO · Testing · Pandas",
    icon: "🐍",
    color: "#10b981",
    accent: "#34d399",
    route: "/programming2",
    tags: ["OOP", "Lambda", "pytest", "Matplotlib"],
  },
  {
    id: "backend",
    title: "Back-end",
    sub: "Java · Spring Boot · JPA · H2",
    icon: "☕",
    color: "#f59e0b",
    accent: "#fbbf24",
    route: "/backend",
    tags: ["Spring Boot", "JPA", "H2", "REST API"],
  },
  {
    id: "itbusiness",
    title: "IT & Business",
    sub: "Theory · Open questions · Strategy",
    icon: "💼",
    color: "#8b5cf6",
    accent: "#a78bfa",
    route: "/itbusiness",
    tags: ["Strategy", "Frameworks", "Open questions"],
  },
];

export default function ExamHub() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -5%, #0ea5e918 0%, transparent 60%)," +
          "radial-gradient(ellipse 40% 30% at 90% 90%, #8b5cf611 0%, transparent 50%)",
        padding: "3rem 1.5rem",
        fontFamily: "'Sora', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button:focus { outline: none; }
      `}</style>

      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              display: "inline-block",
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: 99,
              padding: "4px 16px",
              color: "#475569",
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              letterSpacing: 2,
              marginBottom: 16,
            }}
          >
            APPLIED COMPUTER SCIENCE · 2025–2026
          </div>

          <h1
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#f1f5f9",
              letterSpacing: -2,
              lineHeight: 1.1,
              marginBottom: 12,
            }}
          >
            Exam Practice Hub
          </h1>

          <p
            style={{
              color: "#475569",
              fontFamily: "'Sora', sans-serif",
              fontSize: "1rem",
              maxWidth: 420,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Kies een vak om te oefenen. Vragen worden elke keer opnieuw geschud.
          </p>
        </div>

        {/* Subject cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(380px, 100%), 1fr))",
            gap: 18,
          }}
        >
          {SUBJECTS.map((s) => (
            <button
              key={s.id}
              onClick={() => navigate(s.route)}
              style={{
                background: "linear-gradient(135deg, #0f172a 0%, #0f1f35 100%)",
                border: `1.5px solid ${s.color}33`,
                borderRadius: 18,
                padding: "1.8rem",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = s.color;
                e.currentTarget.style.boxShadow = `0 0 40px ${s.color}33`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${s.color}33`;
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Glow blob */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: `${s.color}11`,
                  pointerEvents: "none",
                }}
              />

              {/* Icon */}
              <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>

              {/* Title */}
              <h2
                style={{
                  color: "#f1f5f9",
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  marginBottom: 4,
                }}
              >
                {s.title}
              </h2>

              <p
                style={{
                  color: "#475569",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  marginBottom: 16,
                }}
              >
                {s.sub}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: `${s.color}18`,
                      border: `1px solid ${s.color}33`,
                      borderRadius: 6,
                      padding: "2px 8px",
                      color: s.accent,
                      fontSize: 10,
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.8rem",
                  right: "1.8rem",
                  color: `${s.color}66`,
                  fontSize: 20,
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                →
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}