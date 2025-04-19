import useAuth from "@/src/features/auth/hooks/useAuth";
import useKickOff from "@/src/features/auth/hooks/useKickOff";
import { Redirect, Stack } from "expo-router";
import React from "react";

function AppLayout() {
  const { isDoneKickOff } = useKickOff();
  const { userId } = useAuth();

  if (!isDoneKickOff) return <Redirect href={"/kick-off"} />;

  if (!userId) return <Redirect href={"/auth"} />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(@tabs)" />
      <Stack.Screen name="diary" options={{ gestureEnabled: false }} />
      <Stack.Screen name="letter" options={{ gestureEnabled: false }} />
      <Stack.Screen name="settings" />
      <Stack.Screen
        name="ending/index"
        options={{ gestureEnabled: false, animation: "fade" }}
      />
    </Stack>
  );
}

export default AppLayout;
