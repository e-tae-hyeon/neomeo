import Header from "@/src/components/Header";
import Layout from "@/src/components/Layout";
import SettingsProfile from "@/src/features/settings/modules/SettingsProfile";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

function ProfileScreen() {
  const { t } = useTranslation();

  return (
    <Screen>
      <Header.Arrow title={t("settings.profile.label")} />

      <ScrollView>
        <SettingsProfile />
      </ScrollView>
    </Screen>
  );
}

export default ProfileScreen;

const Screen = styled(Layout.Screen)``;
