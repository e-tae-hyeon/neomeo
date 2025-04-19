import React, { useEffect } from "react";
import { Asset } from "expo-asset";

function PreloadAssetsConfig() {
  const sources = [
    require("@images/kick-off/kick-off-1.png"),
    require("@images/kick-off/kick-off-2.png"),
    require("@images/kick-off/kick-off-3.png"),
    require("@images/logotypo.png"),
    require("@images/core/home-background.png"),
    require("@images/core/question-background.png"),
    require("@images/core/question-complete.png"),
    require("@images/core/diary-background.png"),
    require("@images/core/diary-complete.png"),
    require("@images/core/letter-background.png"),
    require("@images/core/letter-complete.png"),
    require("@images/core/end-background.png"),
    require("@images/core/ending-background.png"),
    require("@images/core/letter.png"),
    require("@images/core/paper.png"),
  ];

  useEffect(() => {
    const preload = async () => {
      try {
        await Promise.allSettled(
          sources.map(async (source) => {
            await Asset.fromModule(source).downloadAsync();
          })
        );

        console.log("[Asset] preload");
      } catch (err) {
        console.error(err);
      }
    };

    preload();
  }, []);

  return <></>;
}

export default PreloadAssetsConfig;
