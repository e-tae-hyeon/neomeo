import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import usePet from "@/src/features/me/hooks/usePet";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Animated, { FadeIn } from "react-native-reanimated";
import styled from "styled-components/native";

function CompleteLetterScreen() {
  const { t } = useTranslation();
  const { dismissTo } = useRouter();

  const { pet } = usePet();

  const CONTENT_DELAY = 750;
  const TOTAL_DELAY = CONTENT_DELAY + 1750;

  useEffect(() => {
    const timer = setTimeout(() => {
      dismissTo("/letter");
    }, TOTAL_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Screen>
      <Background entering={FadeIn}>
        <Image
          source={require("@images/core/letter-complete.png")}
          style={{ flex: 1 }}
        />
      </Background>

      <Main>
        <ContentSection entering={FadeIn.delay(CONTENT_DELAY)}>
          <Content>{t("letter.complete", { name: pet.name })}</Content>
        </ContentSection>
      </Main>
    </Screen>
  );
}

export default CompleteLetterScreen;

const Screen = styled(Layout.Screen)``;

const Background = styled(Animated.View)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Main = styled(Layout.Center)`
  flex: 1;
  justify-content: flex-end;
  padding: 24px;
  padding-bottom: 28%;
`;

const ContentSection = styled(Animated.View)``;

const Content = styled(Typo.Label)`
  text-align: center;
  color: ${(props) => props.theme.system.white};
`;
