import "@/src/common/i18n";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Stack } from "expo-router";
import { baseTheme } from "../common/theme";
import useTrackingScreen from "../features/core/hooks/useTrackingScreen";
import { KeyboardProvider } from "react-native-keyboard-controller";
import * as SplashScreen from "expo-splash-screen";
import BootConfig from "../features/core/modules/BootConfig";
import { MagicModalPortal } from "react-native-magic-modal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

SplashScreen.setOptions({
  duration: 800,
  fade: true,
});

function RootLayout() {
  useTrackingScreen();

  return (
    <GestureHandlerRootView>
      <KeyboardProvider>
        <ThemeProvider theme={baseTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(app)" />
            <Stack.Screen name="kick-off" />
            <Stack.Screen name="auth" />
          </Stack>
          <BootConfig />
          <MagicModalPortal />
        </ThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

export default RootLayout;
