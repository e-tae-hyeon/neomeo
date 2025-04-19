import React, { useEffect } from "react";
import useSettingsStore from "../../settings/stores/useSettingsStore";
import * as Notifications from "expo-notifications";
import { useTranslation } from "react-i18next";
import usePet from "../../me/hooks/usePet";

function NotiQuestionConfig() {
  const TYPE = "noti_question";

  const { t } = useTranslation();

  const { pet } = usePet();
  const {
    noti: { question },
  } = useSettingsStore((s) => s.settings);

  const clearAll = async () => {
    try {
      const notis = await Notifications.getAllScheduledNotificationsAsync();
      const filtered = notis.filter((noti) => noti.content.data.type === TYPE);

      await Promise.all(
        filtered.map(
          async (noti) =>
            await Notifications.cancelScheduledNotificationAsync(
              noti.identifier
            )
        )
      );

      console.log(`[Noti] clear ${TYPE}`);
    } catch {}
  };

  const schedules = async () => {
    try {
      const title = t("app");
      const body = t("core.noti.question", { name: pet.name });

      await Notifications.scheduleNotificationAsync({
        content: { title, body, data: { type: TYPE } },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DAILY,
          hour: 22,
          minute: 0,
        },
      });

      console.log(`[Noti] schedule ${TYPE}`);
    } catch {}
  };

  useEffect(() => {
    (async () => {
      await clearAll();

      if (!question) return;

      schedules();
    })();
  }, [question]);

  return <></>;
}

export default React.memo(NotiQuestionConfig);
