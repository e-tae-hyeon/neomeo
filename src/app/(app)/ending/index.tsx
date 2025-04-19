import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import useProfile from "@/src/features/auth/hooks/useProfile";
import useEnd from "@/src/features/home/hooks/useEnd";
import usePet from "@/src/features/me/hooks/usePet";
import { applyOpacity } from "@/src/util/apply-opacity";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Animated, { FadeIn } from "react-native-reanimated";
import styled from "styled-components/native";

function EndingScreen() {
  const { t } = useTranslation();
  const { dismissTo } = useRouter();

  const { end } = useEnd();
  const { profile } = useProfile();
  const { pet } = usePet();
  const star = t("common.view.star", { returnObjects: true })[pet.kind!];

  const CONTENT_DELAY = 1000;
  const TOTAL_DELAY = CONTENT_DELAY + 4000;

  useEffect(() => {
    end();

    const timer = setTimeout(() => {
      dismissTo("/");
    }, TOTAL_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Screen>
      <Background>
        <Image
          source={require("@images/core/ending-background.png")}
          style={{ flex: 1 }}
        />
      </Background>

      <Overlay entering={FadeIn.delay(CONTENT_DELAY)} />

      <Main>
        <ContentSection entering={FadeIn.delay(CONTENT_DELAY)}>
          <Title>{t("ending.title", { star })}</Title>

          <Content>
            {t("ending.content", {
              name: pet.name,
              star,
              user: profile.nickname,
            })}
          </Content>
        </ContentSection>
      </Main>
    </Screen>
  );
}

export default EndingScreen;

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
  padding: 20px;
  padding-bottom: 20%;
`;

const Overlay = styled(Animated.View)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${applyOpacity("#4B365C", 0.35)};
`;

const ContentSection = styled(Animated.View)`
  gap: 20px;
`;

const Title = styled(Typo.H3)`
  text-align: center;
  color: ${(props) => props.theme.system.white};
`;

const Content = styled(Typo.B4)`
  font-weight: 700;
  text-align: center;
  line-height: 22px;
  color: ${(props) => props.theme.system.white};
`;
