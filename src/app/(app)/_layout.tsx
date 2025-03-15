import { Redirect, Stack } from "expo-router";
import React from "react";

function AppLayout() {
  if (true) return <Redirect href={"/kick-off"} />;

  return <Stack></Stack>;
}

export default AppLayout;
