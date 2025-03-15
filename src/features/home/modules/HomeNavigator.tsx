import { IconSettings } from "@tabler/icons-react-native";
import { Link } from "expo-router";
import React from "react";
import styled, { useTheme } from "styled-components/native";

function HomeNavigator() {
  const theme = useTheme();

  return (
    <Root>
      <Link href={"/settings"} asChild>
        <MenuBtn>
          <IconSettings color={theme.system.main} size={30} />
        </MenuBtn>
      </Link>
    </Root>
  );
}

export default HomeNavigator;

const Root = styled.View`
  padding: 20px;
`;

const MenuBtn = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 999px;
  border-width: 2px;
  border-color: ${(props) => props.theme.system.main};
  background-color: ${(props) => props.theme.system.white};
`;
