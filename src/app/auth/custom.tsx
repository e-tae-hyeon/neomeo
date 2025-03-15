import Layout from "@/src/components/Layout";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import { useRouter } from "expo-router";
import Header from "@/src/components/Header";
import Btn from "@/src/components/Btn";
import usePet from "@/src/features/me/hooks/usePet";
import PetPreview from "@/src/features/pet/modules/PetPreview";

function PetCustomScreen() {
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const { pet, updatePet } = usePet();

  const handleNext = () => {
    navigate("/auth/complete");
  };

  return (
    <Screen>
      <Header.Arrow />

      <Main>
        <PetPreview />
      </Main>

      <Footer>
        <Btn onPress={handleNext}>{t("common.action.next")}</Btn>
      </Footer>
    </Screen>
  );
}

export default PetCustomScreen;

const Screen = styled(Layout.Screen)``;

const Main = styled.View`
  flex: 1;
`;

const Footer = styled.View`
  padding: 20px;
  padding-bottom: 40px;
`;
