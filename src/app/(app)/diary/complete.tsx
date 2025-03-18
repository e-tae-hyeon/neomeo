import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Animated, { FadeIn } from "react-native-reanimated";
import styled from "styled-components/native";

function CompleteDiaryScreen() {
  const { t } = useTranslation();
  const { dismissTo } = useRouter();

  const CONTENT_DELAY = 750;
  const TOTAL_DELAY = CONTENT_DELAY + 1750;

  useEffect(() => {
    const timer = setTimeout(() => {
      dismissTo("/diary");
    }, TOTAL_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Screen>
      <Background>
        <Image
          source={require("@images/core/diary-complete.png")}
          style={{ flex: 1 }}
        />
      </Background>

      <Main>
        <ContentSection entering={FadeIn.delay(CONTENT_DELAY)}>
          <Content>{t("diary.complete")}</Content>
        </ContentSection>
      </Main>
    </Screen>
  );
}

export default CompleteDiaryScreen;

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
  justify-content: flex-end;
  padding: 24px;
  padding-bottom: 28%;
`;

const ContentSection = styled(Animated.View)``;

const Content = styled(Typo.Label)`
  text-align: center;
  color: ${(props) => props.theme.system.white};
`;
