import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import React from "react";
import { useTranslation } from "react-i18next";
import { useMagicModal } from "react-native-magic-modal";
import styled from "styled-components/native";
import useModal from "./useModal";
import DualBtn from "@/src/components/DualBtn";

type DialogConfig = {
  title: string;
  desc?: string;
  cancelLabel?: string;
  onCancel?: () => void;
  confirmLabel?: string;
  onConfirm: () => void;
};

function Dialog({
  title,
  desc,
  cancelLabel,
  onCancel,
  confirmLabel,
  onConfirm,
}: DialogConfig) {
  const { hide } = useMagicModal();
  const { t } = useTranslation();

  const handleCancel = () => {
    hide();
    onCancel?.();
  };

  const handleConfirm = () => {
    hide();
    onConfirm();
  };

  return (
    <Root>
      <Main>
        <Title>{title}</Title>
        {desc && <Desc>{desc}</Desc>}
      </Main>

      <DualBtn
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </Root>
  );
}

function useDialog() {
  const { showModal } = useModal();

  const showDialog = (config: DialogConfig) => {
    showModal(() => <Dialog {...config} />);
  };

  return { showDialog };
}

export default useDialog;

const Root = styled.View`
  gap: 20px;
  padding: 28px;
  border-radius: 24px;
  background-color: ${(props) => props.theme.system.background};
`;

const Main = styled(Layout.Center)`
  gap: 6px;
`;

const Title = styled(Typo.H4)`
  text-align: center;
`;

const Desc = styled(Typo.B1)`
  text-align: center;
  color: ${(props) => props.theme.system.negative};
`;
