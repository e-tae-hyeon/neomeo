import { Stack } from "expo-router";
import React from "react";

function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="name" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="kind" />
      <Stack.Screen name="custom" />
      <Stack.Screen name="preview" />
      <Stack.Screen
        name="complete"
        options={{ gestureEnabled: false, animation: "fade" }}
      />
    </Stack>
  );
}

export default AuthLayout;
