import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import useNotiPermission from "../hooks/useNotiPermission";
import useModal from "../hooks/useModal";
import styled from "styled-components/native";
import { useTranslation } from "react-i18next";
import Typo from "@/src/components/Typo";
import DualBtn from "@/src/components/DualBtn";
import { useMagicModal } from "react-native-magic-modal";
import useAuth from "../../auth/hooks/useAuth";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function NotiPermissionModal() {
  const { hide } = useMagicModal();
  const { t } = useTranslation();

  const { request } = useNotiPermission();

  const handleConfirm = () => {
    hide();
    request();
  };

  return (
    <Root>
      <Body>
        <Title>{t("core.noti.permission.title")}</Title>
      </Body>

      <Footer>
        <DualBtn onCancel={() => hide()} onConfirm={handleConfirm} />
      </Footer>
    </Root>
  );
}

function NotiConfig() {
  const { showModal } = useModal();
  const { granted } = useNotiPermission();
  const { userId } = useAuth();

  useEffect(() => {
    if (!userId) return;
    if (granted) return;

    showModal(NotiPermissionModal, {
      position: "bottom",
      onBackButtonPress: () => {},
      onBackdropPress: () => {},
    });
  }, [granted, userId]);

  return <></>;
}

export default React.memo(NotiConfig);

const Root = styled.View`
  overflow: hidden;
  border-radius: 16px;
  background-color: ${(props) => props.theme.system.white};
`;

const Body = styled.View`
  padding: 24px;
`;

const Title = styled(Typo.H4)`
  text-align: center;
`;

const Footer = styled.View`
  padding: 20px;
  background-color: ${(props) => props.theme.system.main};
`;
