import useQuestions from "./useQuestions";

function useTodayQuestion() {
  const { questions } = useQuestions();

  const todayQuestion = questions.at(-1);

  return { todayQuestion };
}

export default useTodayQuestion;
