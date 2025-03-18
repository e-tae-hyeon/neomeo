import React, { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";
import useQuestions from "../hooks/useQuestions";
import QuestionItem from "./QuestionItem";
import styled from "styled-components/native";
import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import { useTranslation } from "react-i18next";
import usePet from "../../me/hooks/usePet";
import { QUESTIONS_SIZE } from "../common/question";
import QuestionNotOpenedItem from "./QuetionNotOpenedItem";

function QuestionList() {
  const { t } = useTranslation();

  const { pet } = usePet();
  const { questions } = useQuestions();
  const data = Array.from({ length: QUESTIONS_SIZE }).map((_, idx) => idx + 1);
  const star = t("common.view.star", { returnObjects: true })[pet.kind!];

  const renderItem: ListRenderItem<number> = useCallback(
    ({ item, index }) => {
      const isFirst = index === 0;
      const isLast = index === data.length - 1;

      const question = questions.find((q) => q.order === item);

      if (!question)
        return <QuestionNotOpenedItem isFirst={isFirst} isLast={isLast} />;

      return (
        <QuestionItem question={question} isFirst={isFirst} isLast={isLast} />
      );
    },
    [questions]
  );

  return (
    <Root>
      <Head>
        <Title>{t("question.list.title")}</Title>
        <Desc>{t("question.list.caption", { star })}</Desc>
      </Head>

      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20, paddingBottom: 60 }}
        ItemSeparatorComponent={() => <Divider />}
      />
    </Root>
  );
}

export default QuestionList;

const Root = styled.View`
  flex: 1;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #e3e7f1;
`;

const Head = styled(Layout.Center)`
  gap: 16px;
  padding-top: 32px;
`;

const Title = styled(Typo.H2)`
  text-align: center;
`;

const Desc = styled(Typo.B4)`
  text-align: center;
`;

const Divider = styled.View`
  height: 1px;
  background-color: #a3c6c2;
`;
