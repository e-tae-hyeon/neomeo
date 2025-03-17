import React from "react";
import NotiQuestionConfig from "./NotiQuestionConfig";
import NotiConfig from "./NotiConfig";

function BootConfig() {
  return (
    <>
      <NotiConfig />
      <NotiQuestionConfig />
    </>
  );
}

export default React.memo(BootConfig);
