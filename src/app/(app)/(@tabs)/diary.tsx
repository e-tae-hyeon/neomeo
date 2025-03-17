import Layout from "@/src/components/Layout";
import DiaryController from "@/src/features/diary/modules/DiaryController";
import { Image } from "expo-image";
import React from "react";
import styled from "styled-components/native";

function DiaryScreen() {
  return (
    <Screen edges={["top"]}>
      <Background>
        <Image
          source={require("@images/core/diary-background.png")}
          style={{ flex: 1 }}
        />
      </Background>

      <Main>
        <DiaryController />
      </Main>
    </Screen>
  );
}

export default DiaryScreen;

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
