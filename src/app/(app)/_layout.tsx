import useKickOff from "@/src/features/auth/hooks/useKickOff";
import { Redirect, Stack } from "expo-router";
import React from "react";

function AppLayout() {
  const { isDoneKickOff } = useKickOff();

  if (!isDoneKickOff) return <Redirect href={"/kick-off"} />;

  if (true) return <Redirect href={"/auth"} />;

  return <Stack></Stack>;
}

export default AppLayout;
