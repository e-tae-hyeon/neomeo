import Typo from "@/src/components/Typo";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import usePet from "../../me/hooks/usePet";
import Btn from "@/src/components/Btn";
import { Link, useRouter } from "expo-router";

function LetterController() {
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const { pet } = usePet();

  const handleWrite = () => {
    navigate("/letter/write");
  };

  return (
    <Root>
      <Body>
        <Title>{t("letter.letter")}</Title>
        <Desc>To. {pet.name}</Desc>
      </Body>

      <Btn onPress={handleWrite} weight="secondary">
        {t("letter.letter")}
      </Btn>
    </Root>
  );
}

export default LetterController;

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

const Desc = styled(Typo.Label)`
  font-size: 14px;
`;
