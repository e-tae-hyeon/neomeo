import React from "react";
import { ThemeProvider } from "styled-components";
import { Slot } from "expo-router";
import { baseTheme } from "../common/theme";

function RootLayout() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Slot />
    </ThemeProvider>
  );
}

export default RootLayout;
