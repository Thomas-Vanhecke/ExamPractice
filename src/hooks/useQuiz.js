import { useState } from "react";
import { shuffle } from "../utils/shuffle";

export function useQuiz() {
  const [view, setView] = useState("home");
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [scores, setScores] = useState({});
  const [activeChapterId, setActiveChapterId] = useState(null);
  const [correctOptionIds, setCorrectOptionIds] = useState([]);
  const [chapterMeta, setChapterMeta] = useState({
    title: "",
    color: "#6366f1",
    accent: "#818cf8",
  });
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.jufnoortje.be/api/questions";

  const categoryMap = {
    // Backend
    apirequest: "backend",
    springboot: "backend",
    jpa: "backend",
    h2: "backend",
    practical: "backend",
    // Programming 2
    oo: "programming2-oo",
    functional: "programming2-functional",
    testing: "programming2-testing",
    dataprocessing: "programming2-dataprocessing",
    // Computer Networks
    m1: "networks-m1",
    m2: "networks-m2",
    m4: "networks-m4",
    m11: "networks-m11",
    osi: "networks-osi",
    commands: "networks-commands",
    ipconversion: "networks-ipconversion",
    // IT Business
    intro: "itbusiness-intro",
    uml: "itbusiness-uml",
    bpmn: "itbusiness-bpmn",
    analysis: "itbusiness-analysis",
    security: "itbusiness-security",
    projectmanagement: "itbusiness-pm",
    ictai: "itbusiness-ictai",
  };

  function transformQuestion(q) {
    return {
      id: q.id,
      question: q.question,
      code: q.code,
      explanation: q.explanation,
      multiSelect: q.multiSelect,
      options: shuffle(q.options),
    };
  }

  async function start(chapters, chapterId) {
    setLoading(true);
    let qs;
    let meta;

    try {
      const category = categoryMap[chapterId] || null;
      const url = category ? `${API_URL}?category=${category}` : API_URL;
      const response = await fetch(url);
      const data = await response.json();
      const transformed = data.map(transformQuestion);
      qs = shuffle(transformed);
      meta = { title: "Full Exam", color: "#6366f1", accent: "#818cf8" };
    } catch (e) {
      console.error("API niet bereikbaar, lokale data gebruiken", e);
      qs = shuffle(chapters.flatMap((c) => c.questions));
      meta = { title: "Full Exam", color: "#6366f1", accent: "#818cf8" };
    }

    if (chapterId !== "all") {
      const ch = chapters.find((c) => c.id === chapterId);
      meta = { title: ch.title, color: ch.color, accent: ch.accent };
    }

    setQuestions(qs);
    setActiveChapterId(chapterId);
    setCurrentQ(0);
    setSelectedOption(null);
    setAnswered(false);
    setCorrect(0);
    setCorrectOptionIds([]);
    setChapterMeta(meta);
    setView("quiz");
    setLoading(false);
  }

  async function answer(optionIndex) {
    if (answered) return;
    setSelectedOption(optionIndex);
    setAnswered(true);

    const question = questions[currentQ];
    const selectedOptionId = question.options[optionIndex]?.id;

    try {
      const response = await fetch(`${API_URL}/${question.id}/check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([selectedOptionId]),
      });
      const data = await response.json();
      if (data.correct) setCorrect((c) => c + 1);
      setCorrectOptionIds(data.correctOptionIds || []);
    } catch (e) {
      console.error("Check mislukt", e);
    }
  }

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

  async function submitMulti() {
    if (answered) return;
    const selected = Array.isArray(selectedOption) ? selectedOption : [];
    setAnswered(true);

    const question = questions[currentQ];
    const selectedOptionIds = selected.map((i) => question.options[i]?.id);

    try {
      const response = await fetch(`${API_URL}/${question.id}/check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedOptionIds),
      });
      const data = await response.json();
      if (data.correct) setCorrect((c) => c + 1);
      setCorrectOptionIds(data.correctOptionIds || []);
    } catch (e) {
      console.error("Check mislukt", e);
    }
  }

  function answerOpen(text) {
    if (answered) return;
    setSelectedOption(text);
    setAnswered(true);
    setCorrect((c) => c + 1);
  }

  function next(chapters) {
    setCorrectOptionIds([]);
    if (currentQ + 1 < questions.length) {
      setCurrentQ((q) => q + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      setScores((s) => ({
        ...s,
        [activeChapterId]: { correct, total: questions.length },
      }));
      setView("score");
    }
  }

  function goHome() {
    setView("home");
  }

  function retry(chapters) {
    start(chapters, activeChapterId);
  }

  return {
    view, questions, currentQ, selectedOption, answered,
    correct, scores, activeChapterId, chapterMeta, loading,
    correctOptionIds,
    start, answer, toggleOption, submitMulti, answerOpen, next, goHome, retry,
  };
}