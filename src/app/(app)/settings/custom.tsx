import Header from "@/src/components/Header";
import Layout from "@/src/components/Layout";
import usePet from "@/src/features/me/hooks/usePet";
import PetCustomManager from "@/src/features/pet/modules/PetCustomManager";
import PetPreview from "@/src/features/pet/modules/PetPreview";
import React from "react";
import styled from "styled-components/native";

function SettingsPetCustomScreen() {
  const { pet } = usePet();

  return (
    <Screen>
      <Header.Arrow />

      <PetPreview />

      <PetCustomManager kind={pet.kind!} />
    </Screen>
  );
}

export default SettingsPetCustomScreen;

const Screen = styled(Layout.Screen)``;
