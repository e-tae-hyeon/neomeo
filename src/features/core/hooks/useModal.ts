import {
  magicModal,
  ModalChildren,
  NewConfigProps,
} from "react-native-magic-modal";
import { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ModalPosition = "top" | "center" | "bottom";

function useModal() {
  const { top, bottom } = useSafeAreaInsets();

  const positionStyleMap: Record<ModalPosition, Record<string, any>> = {
    top: {
      justifyContent: "flex-start",
      padding: 20,
      paddingTop: top + 40,
    },
    center: {
      padding: 20,
    },
    bottom: {
      justifyContent: "flex-end",
      padding: 20,
      paddingBottom: bottom + 40,
    },
  };

  const showModal = (
    children: ModalChildren,
    config?: NewConfigProps & { position?: ModalPosition }
  ) =>
    magicModal.show(children, {
      style: positionStyleMap[config?.position ?? "center"],
      swipeDirection: config?.position === "top" ? "up" : "down",
      entering: config?.position === "top" ? FadeInUp : undefined,
      exiting: config?.position === "top" ? FadeOutUp : undefined,
      ...config,
    });

  return { showModal };
}

export default useModal;
