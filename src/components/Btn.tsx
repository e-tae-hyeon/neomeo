import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled, { useTheme } from "styled-components/native";
import Typo from "./Typo";

type BtnWeight = "primary" | "secondary";

type Props = TouchableOpacityProps & {
  weight?: BtnWeight;
};

function Btn({ weight = "primary", children, ...rest }: Props) {
  const theme = useTheme();

  const weightStyleMap: Record<
    BtnWeight,
    { bgColor: string; tintColor: string }
  > = {
    primary: { bgColor: theme.system.white, tintColor: theme.system.text100 },
    secondary: { bgColor: theme.system.main, tintColor: theme.system.white },
  };

  const { bgColor, tintColor } = weightStyleMap[weight];

  return (
    <Root bgColor={bgColor} {...rest}>
      <Label color={tintColor}>{children}</Label>
    </Root>
  );
}

export default Btn;

const Root = styled.TouchableOpacity<{ bgColor: string }>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  border-radius: 16px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  background-color: ${(props) => props.bgColor};
`;

const Label = styled(Typo.Label)<{ color: string }>`
  color: ${(props) => props.color};
`;
