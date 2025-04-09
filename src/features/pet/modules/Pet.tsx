import React from "react";
import styled from "styled-components/native";
import usePet from "../../me/hooks/usePet";
import Layout from "@/src/components/Layout";
import pet_doll from "../common/doll";

type Props = {
  size?: number;
};

function Pet({ size = 120 }: Props) {
  const { pet } = usePet();

  const { kind, color, shape, pattern, face } = pet;

  const dolls = pet_doll[kind!];

  const Comp = dolls?.[shape - 1]?.[pattern - 1]?.[face - 1] ?? dolls[0][0][0];

  return (
    <Root>
      <Comp color={color} width={size} height={size} />
    </Root>
  );
}

export default Pet;

const Root = styled(Layout.Center)``;
