import Typo from "@/src/components/Typo";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import Btn from "@/src/components/Btn";
import { useRouter } from "expo-router";

function DiaryController() {
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const handleWrite = () => {
    navigate("/diary/write");
  };

  return (
    <Root>
      <Body>
        <Title>{t("diary.title")}</Title>
        <Desc>{t("diary.desc")}</Desc>
      </Body>

      <Btn onPress={handleWrite} weight="secondary">
        {t("diary.go")}
      </Btn>
    </Root>
  );
}

export default DiaryController;

const Root = styled.View`
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
