import { Stack } from "expo-router";
import React from "react";

function DiaryLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="write" />
      <Stack.Screen
        name="complete"
        options={{ animation: "fade", gestureEnabled: false }}
      />
    </Stack>
  );
}

export default DiaryLayout;
