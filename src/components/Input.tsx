import React from "react";
import { TextInputProps, TouchableOpacity } from "react-native";
import styled, { useTheme } from "styled-components/native";
import Layout from "./Layout";
import { IconCircleX } from "@tabler/icons-react-native";

type Props = TextInputProps & {
  onClear?: () => void;
};

function Input({ onClear, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Root>
      <StyledInput {...rest} />

      {onClear && (
        <TouchableOpacity onPress={onClear} hitSlop={8}>
          <IconCircleX color={theme.system.text40} size={20} />
        </TouchableOpacity>
      )}
    </Root>
  );
}

export default Input;

const Root = styled(Layout.Row)`
  overflow: hidden;
  height: 56px;
  gap: 4px;
  border-radius: 16px;
  padding: 16px 20px;
  background-color: ${(props) => props.theme.system.white};
`;

const StyledInput = styled.TextInput.attrs((p) => ({
  placeholderTextColor: p.theme.system.text40,
}))`
  height: 100%;
  flex: 1;
  font-family: "Ownglyph_PDH-Rg";
  color: ${(props) => props.theme.system.text100};
  font-size: 19px;
`;
