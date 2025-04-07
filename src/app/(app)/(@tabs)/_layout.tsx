import { IconCircle } from "@tabler/icons-react-native";
import { Tabs } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

function TabsLayout() {
  const { t } = useTranslation();
  const theme = useTheme();
  const { bottom } = useSafeAreaInsets();

  const HEIGHT = 54 + bottom;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: HEIGHT },
        tabBarItemStyle: { height: HEIGHT },
        tabBarActiveBackgroundColor: theme.system.main,
        tabBarActiveTintColor: theme.system.white,
        tabBarInactiveTintColor: theme.system.main,
        tabBarIconStyle: { marginBottom: 6 },
        tabBarLabelStyle: {
          fontFamily: theme.font,
          fontWeight: 700,
          fontSize: 12,
        },
        tabBarIcon: ({ color }) => (
          <IconCircle color={color} fill={color} size={20} />
        ),
      }}
    >
      <Tabs.Screen name="index" options={{ tabBarLabel: t("home.home") }} />
      <Tabs.Screen
        name="question"
        options={{ tabBarLabel: t("question.question") }}
      />
      <Tabs.Screen name="diary" options={{ tabBarLabel: t("diary.diary") }} />
      <Tabs.Screen
        name="letter"
        options={{ tabBarLabel: t("letter.letter") }}
      />
    </Tabs>
  );
}

export default TabsLayout;
