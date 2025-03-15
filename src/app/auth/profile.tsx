import Layout from "@/src/components/Layout";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import Cloud from "@images/core/cloud.svg";
import Typo from "@/src/components/Typo";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Header from "@/src/components/Header";
import Btn from "@/src/components/Btn";
import Input from "@/src/components/Input";
import useProfile from "@/src/features/auth/hooks/useProfile";

function AuthProfileScreen() {
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const { profile, updateProfile } = useProfile();

  const [nickname, setNickname] = useState(profile.nickname);
  const disabled = !nickname;

  const handleNext = () => {
    updateProfile({ nickname });

    navigate("/auth/kind");
  };

  return (
    <Screen>
      <Header.Arrow />

      <ScrollView>
        <Background>
          <Cloud />
        </Background>

        <Main>
          <Title>{t("auth.profile.name.title")}</Title>

          <Form>
            <Input
              placeholder={t("auth.profile.name.placeholder")}
              value={nickname}
              onChangeText={setNickname}
              onClear={() => setNickname("")}
            />

            <Caption>{t("auth.profile.name.caption")}</Caption>
          </Form>
        </Main>
      </ScrollView>

      <Footer>
        <Btn onPress={handleNext} disabled={disabled}>
          {t("common.action.next")}
        </Btn>
      </Footer>
    </Screen>
  );
}

export default AuthProfileScreen;

const Screen = styled(Layout.Screen)``;

const Background = styled(Layout.Center)`
  position: absolute;
  left: 0;
  right: 0;
`;

const Main = styled.View`
  gap: 20px;
  padding: 20px;
  padding-top: 80px;
`;

const Form = styled.View``;

const Title = styled(Typo.H3)``;

const Caption = styled(Typo.B3)`
  padding: 8px 20px;
  color: ${(props) => props.theme.gray.gray200};
`;

const Footer = styled.View`
  padding: 20px;
  padding-bottom: 40px;
`;
