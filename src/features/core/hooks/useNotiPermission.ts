import { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import { Linking } from "react-native";

function useNotiPermission() {
  const [granted, setGranted] = useState(true);

  useEffect(() => {
    const check = async () => {
      try {
        const { granted } = await Notifications.getPermissionsAsync();

        setGranted(granted);
      } catch {}
    };

    check();
  }, []);

  const request = async () => {
    try {
      const { status } = await Notifications.getPermissionsAsync();

      switch (status) {
        case Notifications.PermissionStatus.UNDETERMINED:
          const { granted } = await Notifications.requestPermissionsAsync();
          setGranted(granted);
          return;
        case Notifications.PermissionStatus.DENIED:
          await Linking.openSettings();
          return;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { granted, request };
}

export default useNotiPermission;
