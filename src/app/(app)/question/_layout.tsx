import { Stack } from "expo-router";
import React from "react";

function QuestionLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="list"
        options={{ animation: "fade", gestureEnabled: false }}
      />
      <Stack.Screen name="[order]" />
      <Stack.Screen name="[order]/reply" />
      <Stack.Screen
        name="[order]/complete"
        options={{ animation: "fade", gestureEnabled: false }}
      />
    </Stack>
  );
}

export default QuestionLayout;
