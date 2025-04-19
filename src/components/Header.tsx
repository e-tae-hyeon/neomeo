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
  right?: React.ReactNode;
};

function HeaderArrow({ title, onBack, right }: Props) {
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
      <Left>
        <TouchableOpacity onPress={handleBack} hitSlop={12}>
          <IconArrowLeft color={theme.system.text100} />
        </TouchableOpacity>

        {title && <Title>{title}</Title>}
      </Left>

      <Right>{right}</Right>
    </Root>
  );
}

const Header = {
  Arrow: HeaderArrow,
};

export default Header;

const Root = styled(Layout.Row)`
  justify-content: space-between;
  padding: 16px 20px;
`;

const Left = styled(Layout.Row)`
  gap: 12px;
`;

const Title = styled(Typo.H3)``;

const Right = styled(Layout.Row)``;
