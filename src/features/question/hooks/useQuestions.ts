import {
  useStorageNumber,
  useStorageObjectWithDefault,
} from "@/src/common/storage";
import { QUESTIONS } from "../common/quetion";
import useSettingsStore from "../../settings/stores/useSettingsStore";
import DateUtil from "@/src/util/DateUtil";

export type IQuestion = {
  order: number;
  content: string;
  createdAt: string;
};

function useQuestions() {
  const KEY = "k_open_question_order";

  const {
    general: { locale },
  } = useSettingsStore((s) => s.settings);

  const [openedQuestionOrder, setOpenedQuestionOrder] = useStorageNumber(KEY, {
    putAndReturnIfAbsent: 1,
  });

  const [openedQuestionDateMap, setOpenedQuestionDateMap] =
    useStorageObjectWithDefault<Record<number, string>>(
      "k_opened_question_date",
      {}
    );

  const questions: IQuestion[] = QUESTIONS[locale]
    .slice(0, openedQuestionOrder)
    .map((content, idx) => {
      const order = idx + 1;
      const createdAt = openedQuestionDateMap[order] ?? DateUtil.nowISO();

      return {
        order,
        content,
        createdAt,
      };
    });

  const getQuestionByOrder = (order: number) =>
    questions.find((q) => q.order === order);

  const openNewQuestion = () => {
    const nextOrder = openedQuestionOrder + 1;

    setOpenedQuestionOrder(nextOrder);
    setOpenedQuestionDateMap({
      ...openedQuestionDateMap,
      [nextOrder]: DateUtil.nowISO(),
    });
  };

  return { questions, getQuestionByOrder, openNewQuestion };
}

export default useQuestions;
