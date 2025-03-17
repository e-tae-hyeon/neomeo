import Layout from "@/src/components/Layout";
import QuestionController from "@/src/features/question/modules/QuestionController";
import { Image } from "expo-image";
import React from "react";
import styled from "styled-components/native";

function QuestionScreen() {
  return (
    <Screen edges={["top"]}>
      <Background>
        <Image
          source={require("@images/core/question-background.png")}
          style={{ flex: 1 }}
        />
      </Background>

      <Main>
        <QuestionController />
      </Main>
    </Screen>
  );
}

export default QuestionScreen;

const Screen = styled(Layout.Screen)``;

const Background = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Main = styled.View`
  flex: 1;
  padding: 20px;
`;
