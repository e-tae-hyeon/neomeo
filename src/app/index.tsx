import React, { useEffect } from "react";
import styled from "styled-components/native";
import Layout from "../components/Layout";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

function SplashScreen() {
  const { replace } = useRouter();

  const DURATION = 1500;

  useEffect(() => {
    const timer = setTimeout(() => {
      replace("/(app)/(@tabs)");
    }, DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Screen>
      <Background>
        <Image
          source={require("@images/splash-background.png")}
          style={{ flex: 1 }}
        />
      </Background>

      <TitleSection>
        <TitleContainer>
          <Image
            source={require("@images/logotypo.png")}
            style={{ flex: 1 }}
            contentFit="contain"
          />
        </TitleContainer>
      </TitleSection>
    </Screen>
  );
}

export default SplashScreen;

const Screen = styled(Layout.Screen)``;

const Background = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const TitleSection = styled(Layout.Center)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 32%;
`;

const TitleContainer = styled.View`
  aspect-ratio: 5/1;
  width: 120px;
`;
