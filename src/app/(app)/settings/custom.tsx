import Header from "@/src/components/Header";
import Layout from "@/src/components/Layout";
import React from "react";
import styled from "styled-components/native";

function SettingsPetCustomScreen() {
  return (
    <Screen>
      <Header.Arrow />
    </Screen>
  );
}

export default SettingsPetCustomScreen;

const Screen = styled(Layout.Screen)``;
