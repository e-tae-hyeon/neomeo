import { usePathname } from "expo-router";
import { useEffect } from "react";
import analytics from "@react-native-firebase/analytics";

analytics().setAnalyticsCollectionEnabled(!__DEV__);

function useTrackingScreen() {
  const pathname = usePathname();

  useEffect(() => {
    if (__DEV__) {
      console.log(`🚀 DEV - Current Path: ${pathname}`);
      return;
    }

    if (pathname) {
      analytics().logScreenView({
        screen_name: pathname,
      });
    }
  }, [pathname]);
}

export default useTrackingScreen;
