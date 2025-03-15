import { Tabs } from "expo-router";
import React from "react";

function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
    </Tabs>
  );
}

export default TabsLayout;
