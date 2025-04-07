import "@/src/common/i18n";
import React, { useMemo } from "react";
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
import useSettingsStore from "../features/settings/stores/useSettingsStore";
import { getFont } from "../features/settings/utils/Font";

LogBox.ignoreAllLogs();

SplashScreen.setOptions({
  duration: 800,
  fade: true,
});

function RootLayout() {
  useTrackingScreen();

  const {
    general: { locale },
  } = useSettingsStore((s) => s.settings);

  const theme = useMemo(() => {
    return { ...baseTheme, font: getFont() };
  }, [locale]);

  return (
    <GestureHandlerRootView>
      <KeyboardProvider>
        <ThemeProvider theme={theme}>
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
