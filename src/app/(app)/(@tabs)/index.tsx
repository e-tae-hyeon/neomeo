import Layout from "@/src/components/Layout";
import HomeNavigator from "@/src/features/home/modules/HomeNavigator";
import { Image } from "expo-image";
import React from "react";
import styled from "styled-components/native";

function HomeScreen() {
  return (
    <Screen>
      <Background>
        <Image
          source={require("@images/core/home-background.png")}
          contentPosition={"top center"}
          style={{ flex: 1 }}
        />
      </Background>

      <Top>
        <HomeNavigator />
      </Top>
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
