import Layout from "@/src/components/Layout";
import useEnd from "@/src/features/home/hooks/useEnd";
import CheckEndConfig from "@/src/features/home/modules/CheckEndConfig";
import EndingController from "@/src/features/home/modules/EndingController";
import HomeNavigator from "@/src/features/home/modules/HomeNavigator";
import { Image } from "expo-image";
import React from "react";
import styled from "styled-components/native";

function HomeScreen() {
  const { isEnd } = useEnd();

  return (
    <Screen>
      <Background>
        <Image
          source={
            isEnd
              ? require("@images/core/end-background.png")
              : require("@images/core/home-background.png")
          }
          contentPosition={isEnd ? "center" : "top center"}
          style={{ flex: 1 }}
        />
      </Background>

      {isEnd ? (
        <Main>
          <EndingController />
        </Main>
      ) : (
        <Top>
          <HomeNavigator />
        </Top>
      )}
      <CheckEndConfig />
    </Screen>
  );
}

export default HomeScreen;

const Screen = styled(Layout.Screen)`
  background-color: #afc0eb;
`;

const Background = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Top = styled(Layout.Row)`
  justify-content: flex-end;
`;

const Main = styled.View`
  padding: 20px;
`;
