import useAuth from "@/src/features/auth/hooks/useAuth";
import useKickOff from "@/src/features/auth/hooks/useKickOff";
import { Redirect, Slot } from "expo-router";
import React from "react";

function AppLayout() {
  const { isDoneKickOff } = useKickOff();
  const { userId } = useAuth();

  if (!isDoneKickOff) return <Redirect href={"/kick-off"} />;

  if (!userId) return <Redirect href={"/auth"} />;

  return <Slot />;
}

export default AppLayout;
