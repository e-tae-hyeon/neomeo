import Header from "@/src/components/Header";
import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import QuestionList from "@/src/features/question/modules/QuestionList";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";

function QuestionListScreen() {
  const { t } = useTranslation();

  return (
    <Screen edges={["top"]}>
      <Header.Arrow title={t("question.list.label")} />
      <Head>
        <Desc>{t("question.list.desc")}</Desc>
      </Head>

      <Main>
        <QuestionList />
      </Main>
    </Screen>
  );
}

export default QuestionListScreen;

const Screen = styled(Layout.Screen)``;

const Head = styled.View`
  padding: 8px 20px;
`;

const Desc = styled(Typo.B1)`
  text-align: center;
`;

const Main = styled.View`
  flex: 1;
  padding: 20px 20px 0px;
`;
