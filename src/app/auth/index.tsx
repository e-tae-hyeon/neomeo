import Btn from "@/src/components/Btn";
import Layout from "@/src/components/Layout";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import PopoWelcome from "@images/core/popo-welcome.svg";
import Typo from "@/src/components/Typo";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Ground from "@images/core/ground.svg";

function AuthScreen() {
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const handleNext = () => {
    navigate("/auth/name");
  };

  return (
    <Screen>
      <Background>
        <LinearGradient colors={["#9AB6FF", "#B79CE7"]} style={{ flex: 1 }} />
      </Background>

      <GroundSection>
        <PopoContainer>
          <PopoWelcome />
        </PopoContainer>

        <Ground />
      </GroundSection>

      <Main>
        <Body>
          <Guide>{t("auth.start.content")}</Guide>
        </Body>

        <Footer>
          <Btn onPress={handleNext}>{t("auth.start.go")}</Btn>
        </Footer>
      </Main>
    </Screen>
  );
}

export default AuthScreen;

const Screen = styled(Layout.Screen)``;

const Background = styled.View`
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Main = styled.View`
  flex: 1;
`;

const Body = styled.View`
  flex: 1;
  padding-top: 32%;
`;

const Guide = styled(Typo.H4)`
  text-align: center;
`;

const GroundSection = styled(Layout.Center)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -40px;
`;

const PopoContainer = styled(Layout.Center)`
  z-index: 10;
  position: absolute;
  top: -50px;
  left: 0;
  right: 0;
`;

const Footer = styled.View`
  padding: 20px;
  padding-bottom: 40px;
`;
