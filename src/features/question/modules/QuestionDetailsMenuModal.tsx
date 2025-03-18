import Cell from "@/src/components/Cell";
import { useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { useMagicModal } from "react-native-magic-modal";
import styled from "styled-components/native";

type Props = {
  order: number;
};

function QuestionDetailsMenuModal({ order }: Props) {
  const { hide } = useMagicModal();
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const handlePressEdit = () => {
    hide();
    navigate({ pathname: "/question/[order]/reply", params: { order } });
  };

  return (
    <Root>
      <Cell label={t("common.action.edit")} onPress={handlePressEdit} />
    </Root>
  );
}

export default QuestionDetailsMenuModal;

const Root = styled.View`
  padding: 8px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.system.white};
`;
