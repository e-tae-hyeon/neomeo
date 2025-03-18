import { IconSettings, IconTicket } from "@tabler/icons-react-native";
import { Link } from "expo-router";
import React from "react";
import styled, { useTheme } from "styled-components/native";
import useModal from "../../core/hooks/useModal";
import TicketViewer from "./TicketViewer";

function HomeNavigator() {
  const theme = useTheme();
  const { showModal } = useModal();

  const handlePressTicket = () => {
    showModal(TicketViewer);
  };

  return (
    <Root>
      <Link href={"/settings"} asChild>
        <MenuBtn>
          <IconSettings color={theme.system.main} size={30} />
        </MenuBtn>
      </Link>

      <MenuBtn onPress={handlePressTicket}>
        <IconTicket color={theme.system.main} size={30} />
      </MenuBtn>
    </Root>
  );
}

export default HomeNavigator;

const Root = styled.View`
  gap: 12px;
  padding: 20px;
`;

const MenuBtn = styled.TouchableOpacity`
  padding: 6px;
  border-radius: 999px;
  border-width: 4px;
  border-color: ${(props) => props.theme.system.main};
  background-color: ${(props) => props.theme.system.white};
`;
