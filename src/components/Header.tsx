import React from "react";
import styled, { useTheme } from "styled-components/native";
import Layout from "./Layout";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { IconArrowLeft } from "@tabler/icons-react-native";
import Typo from "./Typo";

type Props = {
  title?: string;
  onBack?: () => void;
};

function HeaderArrow({ title, onBack }: Props) {
  const theme = useTheme();
  const { back } = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }

    back();
  };

  return (
    <Root>
      <TouchableOpacity onPress={handleBack} hitSlop={12}>
        <IconArrowLeft color={theme.system.text100} />
      </TouchableOpacity>

      {title && <Title>{title}</Title>}
    </Root>
  );
}

const Header = {
  Arrow: HeaderArrow,
};

export default Header;

const Root = styled(Layout.Row)`
  gap: 12px;
  padding: 16px 20px;
`;

const Title = styled(Typo.H3)``;
