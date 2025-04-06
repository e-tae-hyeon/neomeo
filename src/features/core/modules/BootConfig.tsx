import React from "react";
import NotiQuestionConfig from "./NotiQuestionConfig";
import NotiConfig from "./NotiConfig";
import PreloadAssetsConfig from "./PreloadAssetsConfig";

function BootConfig() {
  return (
    <>
      <PreloadAssetsConfig />
      <NotiConfig />
      <NotiQuestionConfig />
    </>
  );
}

export default React.memo(BootConfig);
