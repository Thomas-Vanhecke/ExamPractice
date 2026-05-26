import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../hooks/useQuiz";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import ChapterSelector from "./ChapterSelector";
import ScoreScreen from "./ScoreScreen";

/**
 * Universal ExamLayout
 *
 * Props:
 *   chapters      – array of chapter objects
 *   examTitle     – e.g. "Computer Networks"
 *   examSub       – e.g. "Cisco ITN · OSI · IPv4"
 *   glowColor     – hex used for the background glow, e.g. "#0ea5e9"
 *
 * Usage:
 *   <ExamLayout
 *     chapters={NETWORK_CHAPTERS}
 *     examTitle="Computer Networks"
 *     examSub="Cisco ITN · OSI Model · IPv4 · CLI Commands"
 *     glowColor="#0ea5e9"
 *   />
 */
export default function ExamLayout({ chapters, examTitle, examSub, glowColor = "#6366f1" }) {
  const navigate = useNavigate();
  const quiz = useQuiz();

  const currentQuestion = quiz.questions[quiz.currentQ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -5%, ${glowColor}22 0%, transparent 60%)`,
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
              chapters={chapters}
              onSelect={(id) => quiz.start(chapters, id)}
              scores={quiz.scores}
              examTitle={examTitle}
              examSub={examSub}
            />
          </>
        )}

        {/* ── QUIZ ── */}
        {quiz.view === "quiz" && quiz.questions.length > 0 && (
          <div>
            {/* Header bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
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
                  flexShrink: 0,
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
                  wordBreak: "break-word",
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

            {quiz.loading && (
              <div style={{ color: "#94a3b8", textAlign: "center", padding: "1rem" }}>
                Laden...
              </div>
            )}

            {currentQuestion && (
              <QuestionCard
                question={currentQuestion}
                questionIndex={quiz.currentQ}
                total={quiz.questions.length}
                onAnswer={(i) => quiz.answer(i)}
                onToggle={(i) => quiz.toggleOption(i)}
                onSubmitMulti={() => quiz.submitMulti()}
                onAnswerOpen={(text) => quiz.answerOpen(text)}
                answered={quiz.answered}
                correctOptionIds={quiz.correctOptionIds}
                selectedOption={quiz.selectedOption}
                color={quiz.chapterMeta.color}
                accent={quiz.chapterMeta.accent}
              />
            )}

            {quiz.answered && (
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  onClick={() => quiz.next(chapters)}
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
                  {quiz.currentQ + 1 < quiz.questions.length ? "Next →" : "See Results"}
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
            onRetry={() => quiz.retry(chapters)}
            onHome={() => quiz.goHome()}
          />
        )}
      </div>
    </div>
  );
}