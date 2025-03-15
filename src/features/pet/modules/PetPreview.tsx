import Layout from "@/src/components/Layout";
import React from "react";
import styled from "styled-components/native";

function PetPreview() {
  return (
    <Root>
      <Pet />
    </Root>
  );
}

export default PetPreview;

const Root = styled(Layout.Center)`
  aspect-ratio: 16/9;
`;

const Pet = styled.View`
  aspect-ratio: 1;
  width: 80px;
`;
