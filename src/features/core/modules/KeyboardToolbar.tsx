import Layout from "@/src/components/Layout";
import useKeyboardStatus from "@/src/hooks/useKeyboardStatus";
import { IconChevronDown } from "@tabler/icons-react-native";
import React from "react";
import { Keyboard, TouchableOpacity } from "react-native";
import { KeyboardStickyView } from "react-native-keyboard-controller";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import styled, { useTheme } from "styled-components/native";

function KeyboardToolbar() {
  const theme = useTheme();
  const isVisible = useKeyboardStatus();

  const handlePressHide = () => {
    Keyboard.dismiss();
  };

  if (!isVisible) return <></>;

  return (
    <KeyboardStickyView>
      <Animated.View entering={FadeInDown.delay(100)} exiting={FadeOutDown}>
        <Root>
          <TouchableOpacity onPress={handlePressHide}>
            <IconChevronDown color={theme.system.black} />
          </TouchableOpacity>
        </Root>
      </Animated.View>
    </KeyboardStickyView>
  );
}

export default KeyboardToolbar;

const Root = styled(Layout.Row)`
  justify-content: flex-end;
  padding: 14px 20px;
  background-color: ${(props) => props.theme.system.background};
`;
