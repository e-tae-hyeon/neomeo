import React, { useEffect } from "react";
import useQuestions from "../../question/hooks/useQuestions";
import useQuestionReply from "../../question/hooks/useQuestionReply";
import { useRouter } from "expo-router";
import { QUESTIONS_SIZE } from "../../question/common/question";

function CheckEndConfig() {
  const { navigate } = useRouter();
  const { questions } = useQuestions();
  const { getReplyByOrder } = useQuestionReply();

  useEffect(() => {
    const latestQuestion = questions.at(-1)!;
    const isLast = latestQuestion.order === QUESTIONS_SIZE;
    if (!isLast) return;
    const reply = getReplyByOrder(latestQuestion.order);
    if (!reply) return;

    navigate("/ending");
  }, []);

  return <></>;
}

export default React.memo(CheckEndConfig);
