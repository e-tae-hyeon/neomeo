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

function AuthCompleteScreen() {
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const { pet } = usePet();
  const { register } = useAuth();

  const handleDone = () => {
    register();

    navigate("/");
  };

  return (
    <Screen>
      <ScrollView>
        <Background>
          <Cloud />
        </Background>

        <Main>
          <Body>
            <Guide>{t("auth.complete.content", { name: pet.name })}</Guide>
          </Body>

          <PopoSection>
            <PopoComplete />
          </PopoSection>
        </Main>
      </ScrollView>

      <Footer>
        <Btn onPress={handleDone}>{t("auth.complete.goHome")}</Btn>
      </Footer>
    </Screen>
  );
}

export default AuthCompleteScreen;

const Screen = styled(Layout.Screen)``;

const Background = styled(Layout.Center)`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
`;

const Main = styled.View`
  gap: 120px;
  padding-top: 160px;
`;

const Body = styled(Layout.Center)``;

const Guide = styled(Typo.H4)`
  text-align: center;
`;

const PopoSection = styled(Layout.Center)`
  padding: 20px;
`;

const Footer = styled.View`
  padding: 20px;
  padding-bottom: 40px;
`;
