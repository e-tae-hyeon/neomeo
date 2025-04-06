import Layout from "@/src/components/Layout";
import React from "react";
import styled from "styled-components/native";
import Eclipse from "@images/core/eclipse.svg";
import usePet from "../../me/hooks/usePet";
import Pet from "./Pet";

function PetPreview() {
  const { pet } = usePet();

  return (
    <Root>
      <Background>
        <Eclipse />
      </Background>

      <PetContainer>
        <Pet />
      </PetContainer>
    </Root>
  );
}

export default PetPreview;

const Root = styled(Layout.Center)`
  aspect-ratio: 16/9;
`;

const Background = styled(Layout.Center)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const PetContainer = styled(Layout.Center)``;
