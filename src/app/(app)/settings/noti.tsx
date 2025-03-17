import Header from "@/src/components/Header";
import Layout from "@/src/components/Layout";
import SettingsNoti from "@/src/features/settings/modules/SettingsNoti";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";

function SettingsNotiScreen() {
  const { t } = useTranslation();

  return (
    <Screen>
      <Header.Arrow title={t("settings.noti.label")} />

      <SettingsNoti />
    </Screen>
  );
}

export default SettingsNotiScreen;

const Screen = styled(Layout.Screen)``;
