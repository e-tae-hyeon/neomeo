import Typo from "@/src/components/Typo";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components/native";
import Btn from "@/src/components/Btn";
import { useRouter } from "expo-router";
import { IconHelp } from "@tabler/icons-react-native";
import Layout from "@/src/components/Layout";
import useDiaryStore from "../stores/useDiaryStore";
import useTutorial from "../../core/hooks/useTutorial";

function DiaryController() {
  const theme = useTheme();
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const { checkDoneTutorial, doneTutorial } = useTutorial();
  const openHelpModal = useDiaryStore((s) => s.openHelp);

  useEffect(() => {
    if (checkDoneTutorial("diary")) return;

    openHelpModal();
    doneTutorial("diary");
  }, [checkDoneTutorial]);

  const handleWrite = () => {
    navigate("/diary/write");
  };

  return (
    <Root>
      <Window>
        <Body>
          <Title>{t("diary.title")}</Title>
          <Desc>{t("diary.desc")}</Desc>
        </Body>

        <Btn onPress={handleWrite} weight="secondary">
          {t("diary.go")}
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

export default DiaryController;

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
