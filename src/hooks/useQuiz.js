import { useState } from "react";
import { shuffle, shuffleOptions } from "../utils/shuffle";

/**
 * useQuiz — shared quiz logic for every exam component.
 *
 * Usage:
 *   const quiz = useQuiz();
 *   quiz.start(chapters, chapterIdOrAll);
 *   quiz.answer(optionIndex);   // single select
 *   quiz.toggleOption(index);   // multi-select: toggle one option
 *   quiz.submitMulti();         // multi-select: confirm selection
 *   quiz.next();
 *   quiz.goHome();
 */
export function useQuiz() {
  const [view, setView] = useState("home");        // "home" | "quiz" | "score"
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // number | number[] | string
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [scores, setScores] = useState({});
  const [activeChapterId, setActiveChapterId] = useState(null);
  const [chapterMeta, setChapterMeta] = useState({
    title: "",
    color: "#6366f1",
    accent: "#818cf8",
  });

  /** Start a quiz for one chapter or all chapters combined. */
  function start(chapters, chapterId) {
    let qs, meta;
    if (chapterId === "all") {
      qs = shuffle(chapters.flatMap((c) => c.questions)).map(shuffleOptions);
      meta = { title: "Full Exam – All Chapters", color: "#6366f1", accent: "#818cf8" };
    } else {
      const ch = chapters.find((c) => c.id === chapterId);
      qs = shuffle(ch.questions).map(shuffleOptions);
      meta = { title: ch.title, color: ch.color, accent: ch.accent };
    }
    setQuestions(qs);
    setActiveChapterId(chapterId);
    setCurrentQ(0);
    setSelectedOption(null);
    setAnswered(false);
    setCorrect(0);
    setChapterMeta(meta);
    setView("quiz");
  }

  /** Check if an answer is correct (handles single, multi, and open). */
  function isCorrect(question, selected) {
    if (question.multiSelect) {
      const correctArr = Array.isArray(question.answer) ? question.answer : [question.answer];
      const givenArr = Array.isArray(selected) ? selected : [];
      return correctArr.slice().sort().join(",") === givenArr.slice().sort().join(",");
    }
    if (question.type === "open") return true;
    return selected === question.answer;
  }

  /** Single-select answer. */
  function answer(optionIndex) {
    if (answered) return;
    setSelectedOption(optionIndex);
    setAnswered(true);
    if (isCorrect(questions[currentQ], optionIndex)) {
      setCorrect((c) => c + 1);
    }
  }

  /** Multi-select: toggle one option on/off (before confirming). */
  function toggleOption(optionIndex) {
    if (answered) return;
    setSelectedOption((prev) => {
      const current = Array.isArray(prev) ? prev : [];
      if (current.includes(optionIndex)) {
        return current.filter((i) => i !== optionIndex);
      } else {
        return [...current, optionIndex];
      }
    });
  }

  /** Multi-select: confirm the current selection. */
  function submitMulti() {
    if (answered) return;
    const selected = Array.isArray(selectedOption) ? selectedOption : [];
    setAnswered(true);
    if (isCorrect(questions[currentQ], selected)) {
      setCorrect((c) => c + 1);
    }
  }

  /** Open question: submit typed answer. */
  function answerOpen(text) {
    if (answered) return;
    setSelectedOption(text);
    setAnswered(true);
    setCorrect((c) => c + 1); // open vragen altijd goed tellen
  }

  /** Move to the next question or show the score screen. */
  function next(chapters) {
    if (currentQ + 1 < questions.length) {
      setCurrentQ((q) => q + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      const finalCorrect = answered && isCorrect(questions[currentQ], selectedOption)
        ? correct
        : correct;
      setScores((s) => ({
        ...s,
        [activeChapterId]: { correct: finalCorrect, total: questions.length },
      }));
      setView("score");
    }
  }

  /** Go back to the chapter selector. */
  function goHome() {
    setView("home");
  }

  /** Retry the same chapter/all. */
  function retry(chapters) {
    start(chapters, activeChapterId);
  }

  return {
    // state
    view,
    questions,
    currentQ,
    selectedOption,
    answered,
    correct,
    scores,
    activeChapterId,
    chapterMeta,
    // actions
    start,
    answer,
    toggleOption,
    submitMulti,
    answerOpen,
    next,
    goHome,
    retry,
  };
}