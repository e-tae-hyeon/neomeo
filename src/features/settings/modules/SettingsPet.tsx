import React from "react";
import styled from "styled-components/native";
import PetView from "../../pet/modules/PetView";
import Typo from "@/src/components/Typo";
import usePet from "../../me/hooks/usePet";

function SettingsPet() {
  const { pet } = usePet();

  return (
    <Root>
      <PetView />

      <Name>{pet.name}</Name>
    </Root>
  );
}

export default SettingsPet;

const Root = styled.View``;

const Name = styled(Typo.H4)`
  text-align: center;
`;
