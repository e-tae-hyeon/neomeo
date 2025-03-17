import { useStorageNumber } from "@/src/common/storage";
import { QUESTIONS } from "../common/quetion";
import useSettingsStore from "../../settings/stores/useSettingsStore";

export type IQuestion = {
  order: number;
  content: string;
};

function useQuestions() {
  const KEY = "k_open_question_order";

  const {
    general: { locale },
  } = useSettingsStore((s) => s.settings);

  const [openedQuestionOrder, setOpenedQuestionOrder] = useStorageNumber(KEY, {
    putAndReturnIfAbsent: 1,
  });

  const questions: IQuestion[] = QUESTIONS[locale]
    .slice(0, openedQuestionOrder)
    .map((content, idx) => ({
      order: idx + 1,
      content,
    }));

  const getQuestionByOrder = (order: number) =>
    questions.find((q) => q.order === order);

  const openNewQuestion = () => {
    setOpenedQuestionOrder((prev) => prev + 1);
  };

  return { questions, getQuestionByOrder, openNewQuestion };
}

export default useQuestions;
