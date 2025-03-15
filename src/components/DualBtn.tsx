import React from "react";
import styled from "styled-components/native";
import Layout from "./Layout";
import Typo from "./Typo";
import { useTranslation } from "react-i18next";

type Props = {
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

function DualBtn({ cancelLabel, confirmLabel, onCancel, onConfirm }: Props) {
  const { t } = useTranslation();

  return (
    <Root>
      <CancelBtn onPress={onCancel}>
        <Label>{cancelLabel ?? t("common.action.cancel")}</Label>
      </CancelBtn>

      <ConfirmBtn>
        <Label>{confirmLabel ?? t("common.action.confirm")}</Label>
      </ConfirmBtn>
    </Root>
  );
}

export default DualBtn;

const Root = styled(Layout.Row)`
  overflow: hidden;
  border-radius: 16px;
`;

const Btn = styled.TouchableOpacity`
  height: 56px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CancelBtn = styled(Btn)`
  background-color: ${(props) => props.theme.system.sub};
`;

const ConfirmBtn = styled(Btn)`
  background-color: ${(props) => props.theme.system.white};
`;

const Label = styled(Typo.Label)``;
