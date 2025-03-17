import Cell from "@/src/components/Cell";
import { useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import useModal from "../../core/hooks/useModal";
import SettingsLocaleManager from "./SettingsLocaleManager";

function SettingsNavigator() {
  const { t } = useTranslation();
  const { navigate } = useRouter();
  const { showModal } = useModal();

  return (
    <Root>
      <Cell
        label={t("settings.locale.label")}
        onPress={() => showModal(SettingsLocaleManager, { position: "bottom" })}
      />

      <Cell
        label={t("settings.profile.label")}
        onPress={() => navigate("/settings/profile")}
      />

      <Cell
        label={t("settings.noti.label")}
        onPress={() => navigate("/settings/noti")}
      />
    </Root>
  );
}

export default SettingsNavigator;

const Root = styled.View`
  gap: 8px;
  padding: 8px;
`;
