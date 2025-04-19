import Btn from "@/src/components/Btn";
import Layout from "@/src/components/Layout";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import Cloud from "@images/core/cloud.svg";
import PopoComplete from "@images/core/popo-complete.svg";
import Typo from "@/src/components/Typo";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import usePet from "@/src/features/me/hooks/usePet";
import useAuth from "@/src/features/auth/hooks/useAuth";
import { LinearGradient } from "expo-linear-gradient";
import Ground from "@images/core/ground.svg";
import { josa } from "es-hangul";

function AuthCompleteScreen() {
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const { pet } = usePet();
  const { register } = useAuth();
  const star = t("common.view.star", { returnObjects: true })[pet.kind!];

  const handleDone = () => {
    register();

    navigate("/(app)/(@tabs)");
  };

  return (
    <Screen>
      <Background>
        <LinearGradient colors={["#9AB6FF", "#B79CE7"]} style={{ flex: 1 }} />
      </Background>

      <GroundSection>
        <PopoContainer>
          <PopoComplete />
        </PopoContainer>

        <Ground />
      </GroundSection>

      <Main>
        <Body>
          <Guide>
            {t("auth.complete.content", {
              name: josa(pet.name, "은/는"),
              star,
            })}
          </Guide>
        </Body>

        <Footer>
          <Btn onPress={handleDone}>{t("auth.complete.goHome")}</Btn>
        </Footer>
      </Main>
    </Screen>
  );
}

export default AuthCompleteScreen;

const Screen = styled(Layout.Screen)``;

const Background = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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

const Main = styled.View`
  flex: 1;
`;

const Body = styled.View`
  flex: 1;
  padding-top: 50%;
`;

const Guide = styled(Typo.H4)`
  text-align: center;
`;

const Footer = styled.View`
  padding: 20px;
  padding-bottom: 40px;
`;
