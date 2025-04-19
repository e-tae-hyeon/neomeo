import Header from "@/src/components/Header";
import Layout from "@/src/components/Layout";
import SettingsNavigator from "@/src/features/settings/modules/SettingsNavigator";
import SettingsPet from "@/src/features/settings/modules/SettingsPet";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

function SettingsScreen() {
  const { t } = useTranslation();

  return (
    <Screen>
      <Header.Arrow title={t("settings.settings")} />

      <ScrollView>
        <Main>
          <SettingsPet />

          <SettingsNavigator />
        </Main>
      </ScrollView>
    </Screen>
  );
}

export default SettingsScreen;

const Screen = styled(Layout.Screen)``;

const Main = styled.View`
  gap: 32px;
`;
