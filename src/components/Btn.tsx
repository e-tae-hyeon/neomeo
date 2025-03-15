import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import Typo from "./Typo";

type Props = TouchableOpacityProps & {};

function Btn({ children, ...rest }: Props) {
  return (
    <Root {...rest}>
      <Label>{children}</Label>
    </Root>
  );
}

export default Btn;

const Root = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 16px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  background-color: ${(props) => props.theme.system.white};
`;

const Label = styled(Typo.Label)``;
