import Typo from "@/src/components/Typo";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components/native";
import usePet from "../../me/hooks/usePet";
import Btn from "@/src/components/Btn";
import { useRouter } from "expo-router";
import Layout from "@/src/components/Layout";
import { IconHelp } from "@tabler/icons-react-native";
import useLetterStore from "../stores/useLetterStore";
import useTutorial from "../../core/hooks/useTutorial";

function LetterController() {
  const theme = useTheme();
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const { pet } = usePet();
  const { checkDoneTutorial, doneTutorial } = useTutorial();
  const openHelpModal = useLetterStore((s) => s.openHelp);

  useEffect(() => {
    if (checkDoneTutorial("letter")) return;

    openHelpModal();
    doneTutorial("letter");
  }, [checkDoneTutorial]);

  const handleWrite = () => {
    navigate("/letter/write");
  };

  return (
    <Root>
      <Window>
        <Body>
          <Title>{t("letter.letter")}</Title>
          <Desc>To. {pet.name}</Desc>
        </Body>

        <Btn onPress={handleWrite} weight="secondary">
          {t("letter.letter")}
        </Btn>
      </Window>

      <Footer>
        <HelpBtn onPress={openHelpModal}>
          <IconHelp color={theme.system.main} />
        </HelpBtn>
      </Footer>
    </Root>
  );
}

export default LetterController;

const Root = styled.View`
  gap: 8px;
`;

const Window = styled.View`
  gap: 24px;
  padding: 20px 30px;
  border-radius: 24px;
  background-color: ${(props) => props.theme.system.white};
`;

const Body = styled.View`
  gap: 12px;
`;

const Title = styled(Typo.H3)``;

const Desc = styled(Typo.B3)``;

const Footer = styled(Layout.Row)`
  justify-content: flex-end;
`;

const HelpBtn = styled.TouchableOpacity`
  padding: 4px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.system.white};
`;
