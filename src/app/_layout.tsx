import "@/src/common/i18n";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Stack } from "expo-router";
import { baseTheme } from "../common/theme";
import useTrackingScreen from "../features/core/hooks/useTrackingScreen";
import { KeyboardProvider } from "react-native-keyboard-controller";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.setOptions({
  duration: 600,
  fade: true,
});

function RootLayout() {
  useTrackingScreen();

  return (
    <KeyboardProvider>
      <ThemeProvider theme={baseTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(app)" />
          <Stack.Screen name="kick-off" />
          <Stack.Screen name="auth" />
        </Stack>
      </ThemeProvider>
    </KeyboardProvider>
  );
}

export default RootLayout;
