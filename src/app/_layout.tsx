import "@/src/common/i18n";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Slot } from "expo-router";
import { baseTheme } from "../common/theme";
import useTrackingScreen from "../features/core/hooks/useTrackingScreen";

function RootLayout() {
  useTrackingScreen();

  return (
    <ThemeProvider theme={baseTheme}>
      <Slot />
    </ThemeProvider>
  );
}

export default RootLayout;
