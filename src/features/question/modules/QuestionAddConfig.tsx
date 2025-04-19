import React, { useEffect } from "react";
import useQuestions from "../hooks/useQuestions";
import useQuestionReply from "../hooks/useQuestionReply";
import DateUtil from "@/src/util/DateUtil";
import dayjs from "dayjs";

function QuestionAddConfig() {
  const { questions, openNewQuestion } = useQuestions();
  const { getReplyByOrder } = useQuestionReply();

  useEffect(() => {
    const now = DateUtil.now();
    const latestQuestion = questions.at(-1)!;
    const reply = getReplyByOrder(latestQuestion.order);

    if (!reply) return;
    if (
      now.isBefore(
        dayjs(latestQuestion.createdAt)
          .add(1, "day")
          .set("hour", 22)
          .set("minute", 0)
      )
    )
      return;

    openNewQuestion();
  }, [questions, getReplyByOrder, openNewQuestion]);

  return <></>;
}

export default React.memo(QuestionAddConfig);
