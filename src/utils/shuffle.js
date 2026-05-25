/**
 * Shuffles an array (Fisher-Yates via sort approximation).
 */
export function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

/**
 * Takes a question and shuffles its options,
 * keeping track of which option(s) are correct.
 * Supports single answer (number) and multi-select (array).
 */
export function shuffleOptions(question) {
  const correctIndices = Array.isArray(question.answer)
    ? question.answer
    : [question.answer];

  const indexed = question.options.map((opt, i) => ({
    opt,
    correct: correctIndices.includes(i),
  }));

  const shuffled = shuffle(indexed);

  const newAnswer = Array.isArray(question.answer)
    ? shuffled.reduce((acc, x, i) => (x.correct ? [...acc, i] : acc), [])
    : shuffled.findIndex((x) => x.correct);

  return {
    ...question,
    options: shuffled.map((x) => x.opt),
    answer: newAnswer,
  };
}