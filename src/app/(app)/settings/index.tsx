import Header from "@/src/components/Header";
import Layout from "@/src/components/Layout";
import React from "react";
import styled from "styled-components/native";

function SettingsScreen() {
  return (
    <Screen>
      <Header.Arrow />
    </Screen>
  );
}

export default SettingsScreen;

const Screen = styled(Layout.Screen)``;
