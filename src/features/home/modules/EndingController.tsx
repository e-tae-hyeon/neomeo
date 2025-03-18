import Typo from "@/src/components/Typo";
import React from "react";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components/native";
import usePet from "../../me/hooks/usePet";
import { useRouter } from "expo-router";
import Layout from "@/src/components/Layout";
import { IconCaretRightFilled } from "@tabler/icons-react-native";
import Btn from "@/src/components/Btn";

function EndingController() {
  const theme = useTheme();
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const { pet } = usePet();

  const star = t("common.view.star", { returnObjects: true })[pet.kind!];

  const handlePressView = () => {
    navigate("/ending/album");
  };

  return (
    <Root>
      <Window>
        <Body>
          <Head>
            <Title>{t("common.view.earth")}</Title>
            <IconCaretRightFilled
              color={theme.system.text100}
              fill={theme.system.text100}
            />
            <Title>{star}</Title>
          </Head>

          <Desc>{t("ending.view.arrive", { star })}</Desc>
        </Body>

        <Btn onPress={handlePressView} weight="secondary">
          {t("ending.view.view")}
        </Btn>
      </Window>
    </Root>
  );
}

export default EndingController;

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

const Head = styled(Layout.Row)`
  gap: 8px;
`;

const Title = styled(Typo.H3)``;

const Desc = styled(Typo.B3)``;
