const quizCheck = (quiz, type) => {
  const currentTime = new Date().getTime();
  let res = null;

  const startDate = new Date(quiz.started_at);
  const finishedDate = new Date(quiz.finished_at);
  switch (type) {
    case "active":
      res = startDate - currentTime < 0 && finishedDate - currentTime > 0;
      break;
    case "start":
      res = startDate - currentTime > 0;
      break;
    default:
      res = true;
  }
  return { res };
};

export const filteredQuizzes = (data, type) => {
  let quizzes = [];

  data.forEach((el) => {
    const { res } = quizCheck(el, type);
    if (type === "active" && res) {
      quizzes.push(el);
    } else if (type === "start" && res) {
      quizzes.push(el);
    } else if (type === "finish") {
      console.log(el);
      quizzes.push(el);
    }
  });

  return { quizzes };
};
