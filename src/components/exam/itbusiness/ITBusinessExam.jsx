import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../hooks/useQuiz";
import { ITBUSINESS_CHAPTERS } from "./data/index";
import ProgressBar from "../shared/ProgressBar";
import QuestionCard from "../shared/QuestionCard";
import ChapterSelector from "../shared/ChapterSelector";
import ScoreScreen from "../shared/ScoreScreen";

export default function ITBusinessExam() {
  const navigate = useNavigate();
  const quiz = useQuiz();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -5%, #8b5cf622 0%, transparent 60%)",
        padding: "2rem 1rem",
        fontFamily: "'Sora', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button:focus { outline: none; }
      `}</style>

      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* ── HOME ── */}
        {quiz.view === "home" && (
          <>
            <button
              onClick={() => navigate("/")}
              style={{
                background: "transparent",
                border: "none",
                color: "#475569",
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                cursor: "pointer",
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              ← Back to Hub
            </button>

            <ChapterSelector
              chapters={ITBUSINESS_CHAPTERS}
              onSelect={(id) => quiz.start(ITBUSINESS_CHAPTERS, id)}
              scores={quiz.scores}
              examTitle="IT & Business"
              examSub="UML · BPMN · Security · Agile · Scrum · ICT & AI"
            />
          </>
        )}

        {/* ── QUIZ ── */}
        {quiz.view === "quiz" && quiz.questions.length > 0 && (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <button
                onClick={() => quiz.goHome()}
                style={{
                  background: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: 8,
                  padding: "6px 12px",
                  color: "#64748b",
                  cursor: "pointer",
                  fontSize: 12,
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                ← Back
              </button>
              <span
                style={{
                  color: quiz.chapterMeta.accent,
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                {quiz.chapterMeta.title}
              </span>
            </div>

            <ProgressBar
              current={quiz.currentQ}
              total={quiz.questions.length}
              color={quiz.chapterMeta.color}
            />

            <QuestionCard
              question={quiz.questions[quiz.currentQ]}
              questionIndex={quiz.currentQ}
              total={quiz.questions.length}
              onAnswer={(i) => quiz.answer(i)}
              answered={quiz.answered}
              selectedOption={quiz.selectedOption}
              color={quiz.chapterMeta.color}
              accent={quiz.chapterMeta.accent}
            />

            {quiz.answered && (
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  onClick={() => quiz.next(ITBUSINESS_CHAPTERS)}
                  style={{
                    background: `linear-gradient(90deg, ${quiz.chapterMeta.color}, ${quiz.chapterMeta.accent})`,
                    border: "none",
                    borderRadius: 10,
                    padding: "0.8rem 2rem",
                    color: "#0f172a",
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                  }}
                >
                  {quiz.currentQ + 1 < quiz.questions.length
                    ? "Next →"
                    : "See Results"}
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── SCORE ── */}
        {quiz.view === "score" && (
          <ScoreScreen
            correct={quiz.correct}
            total={quiz.questions.length}
            chapterTitle={quiz.chapterMeta.title}
            color={quiz.chapterMeta.color}
            accent={quiz.chapterMeta.accent}
            onRetry={() => quiz.retry(ITBUSINESS_CHAPTERS)}
            onHome={() => quiz.goHome()}
          />
        )}
      </div>
    </div>
  );
}