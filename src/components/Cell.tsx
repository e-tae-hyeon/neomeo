import React from "react";
import styled, { useTheme } from "styled-components/native";
import Typo from "./Typo";
import { IconChevronRight } from "@tabler/icons-react-native";

type Props = {
  label: string;
  onPress: () => void;
};

function Cell({ label, onPress }: Props) {
  const theme = useTheme();

  return (
    <Root onPress={onPress}>
      <Label>{label}</Label>

      <IconChevronRight color={theme.system.text100} size={20} />
    </Root>
  );
}

export default Cell;

const Root = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
`;

const Label = styled(Typo.Label)``;
