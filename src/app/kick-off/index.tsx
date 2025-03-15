import Layout from "@/src/components/Layout";
import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import PagerView from "react-native-pager-view";
import { Image } from "expo-image";
import Typo from "@/src/components/Typo";
import { useTranslation } from "react-i18next";
import Btn from "@/src/components/Btn";

function KickOffScreen() {
  const { t } = useTranslation();

  const pagerRef = useRef<PagerView>(null);
  const [phase, setPhase] = useState(2);
  const isLast = phase === 2;

  const handleNext = () => {
    if (isLast) {
      return;
    }

    pagerRef.current?.setPage(phase + 1);
  };

  return (
    <Screen>
      <PagerView
        ref={pagerRef}
        onPageSelected={(e) => setPhase(e.nativeEvent.position)}
        style={{ flex: 1 }}
      >
        <Window key={1}>
          <Background>
            <Image
              source={require("@images/kick-off/kick-off-1.png")}
              style={{ flex: 1 }}
            />
          </Background>

          <GuideSection>
            <Guide>{t("kickOff.welcome.first")}</Guide>
          </GuideSection>
        </Window>

        <Window key={2}>
          <Background>
            <Image
              source={require("@images/kick-off/kick-off-2.png")}
              style={{ flex: 1 }}
            />
          </Background>

          <GuideSection>
            <Guide>{t("kickOff.welcome.second")}</Guide>
          </GuideSection>
        </Window>

        <Window key={3}>
          <Background>
            <Image
              source={require("@images/kick-off/kick-off-3.png")}
              style={{ flex: 1 }}
            />
          </Background>

          <GuideSection>
            <Guide>{t("kickOff.welcome.third")}</Guide>
          </GuideSection>
        </Window>
      </PagerView>

      <Footer>
        <Pagination>
          {Array.from({ length: 3 }).map((_, idx) => {
            return <Dot isSelected={idx === phase} key={`p_${idx}`} />;
          })}
        </Pagination>

        <Btn onPress={handleNext}>
          {isLast ? t("common.action.start") : t("common.action.next")}
        </Btn>

        <Layout.Safe edge="bottom" />
      </Footer>
    </Screen>
  );
}

export default KickOffScreen;

const Screen = styled(Layout.Screen).attrs({ edges: [] })``;

const Window = styled.View``;

const Background = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const GuideSection = styled(Layout.Center)`
  position: absolute;
  top: 62%;
  left: 0;
  right: 0;
`;

const Guide = styled(Typo.Label)`
  text-align: center;
  color: ${(props) => props.theme.system.white};
`;

const Pagination = styled(Layout.Row)`
  justify-content: center;
  padding: 28px;
  gap: 8px;
`;

const Dot = styled.View<{ isSelected: boolean }>`
  aspect-ratio: 1;
  width: 8px;
  border-radius: 999px;
  opacity: ${(props) => (props.isSelected ? 1 : 0.3)};
  background-color: ${(props) => props.theme.system.white};
`;

const Footer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  padding-bottom: 40px;
`;
