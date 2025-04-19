import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import styled from "styled-components/native";

function CompleteLetterScreen() {
  const { sealing } = useLocalSearchParams<{ sealing: string }>();
  const { navigate } = useRouter();

  const SEALING_DELAY = 500;
  const SEALING_DURATION = 500;
  const TOTAL_DELAY = SEALING_DELAY + SEALING_DURATION + 1000;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/letter/complete");
    }, TOTAL_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const getSealing = () => {
    switch (Number(sealing)) {
      case 1:
        return require("@images/core/sealing-1.png");
      case 2:
        return require("@images/core/sealing-2.png");
      case 3:
        return require("@images/core/sealing-3.png");
    }
  };

  return (
    <Screen>
      <Background>
        <Image
          source={require("@images/core/letter-background.png")}
          style={{ flex: 1 }}
        />
      </Background>

      <Main>
        <LetterContainer>
          <Image
            source={require("@images/core/letter.png")}
            style={{ flex: 1 }}
            contentFit="contain"
          />

          <SealingContainer
            entering={FadeInUp.delay(SEALING_DELAY).duration(SEALING_DURATION)}
          >
            <Image
              source={getSealing()}
              style={{ aspectRatio: 1, width: 80 }}
              contentFit="contain"
            />
          </SealingContainer>
        </LetterContainer>
      </Main>
    </Screen>
  );
}

export default CompleteLetterScreen;

const Screen = styled(Layout.Screen)``;

const Background = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Main = styled(Layout.Center)`
  flex: 1;
  padding: 24px;
`;

const LetterContainer = styled.View`
  aspect-ratio: 3/2;
  width: 100%;
`;

const SealingContainer = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 40px;
  justify-content: center;
  align-items: center;
`;

const ContentSection = styled(Animated.View)`
  padding: 20px;
`;

const Content = styled(Typo.Label)`
  text-align: center;
  color: ${(props) => props.theme.system.white};
`;
