import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

function useKeyboardStatus() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardWillShow", () =>
      setVisible(true)
    );

    const hideListener = Keyboard.addListener("keyboardWillHide", () =>
      setVisible(false)
    );

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return isVisible;
}

export default useKeyboardStatus;
