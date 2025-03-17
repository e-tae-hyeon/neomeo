import { Stack } from "expo-router";
import React from "react";

function LetterLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="write" />
      <Stack.Screen
        name="sealing"
        options={{ animation: "fade", gestureEnabled: false }}
      />
      <Stack.Screen
        name="complete"
        options={{ animation: "fade", gestureEnabled: false }}
      />
    </Stack>
  );
}

export default LetterLayout;
