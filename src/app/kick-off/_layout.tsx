import { Stack } from "expo-router";
import React from "react";

function KickOffLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}

export default KickOffLayout;
