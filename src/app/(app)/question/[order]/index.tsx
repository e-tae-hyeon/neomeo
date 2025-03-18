import Header from "@/src/components/Header";
import Layout from "@/src/components/Layout";
import useQuestionOrder from "@/src/features/question/hooks/useQuestionOrder";
import QuestionSignpost from "@/src/features/question/modules/QuestionSignpost";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

function QuestionDetailsScreen() {
  const order = useQuestionOrder();

  return (
    <Screen>
      <Header.Arrow />

      <ScrollView>
        <Head>
          <QuestionSignpost count={order} />
        </Head>
      </ScrollView>
    </Screen>
  );
}

export default QuestionDetailsScreen;

const Screen = styled(Layout.Screen)``;

const Head = styled.View`
  padding: 20px;
`;
