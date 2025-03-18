import Header from "@/src/components/Header";
import Layout from "@/src/components/Layout";
import useModal from "@/src/features/core/hooks/useModal";
import useQuestionOrder from "@/src/features/question/hooks/useQuestionOrder";
import QuestionDetailsMenuModal from "@/src/features/question/modules/QuestionDetailsMenuModal";
import QuestionSignpost from "@/src/features/question/modules/QuestionSignpost";
import QuestionViewer from "@/src/features/question/modules/QuestionViewer";
import { IconMenu2 } from "@tabler/icons-react-native";
import React from "react";
import styled, { useTheme } from "styled-components/native";

function QuestionDetailsScreen() {
  const theme = useTheme();
  const order = useQuestionOrder();
  const { showModal } = useModal();

  const handlePressMenu = () => {
    showModal(() => <QuestionDetailsMenuModal order={order} />, {
      position: "bottom",
    });
  };

  return (
    <Screen edges={["top"]}>
      <Header.Arrow
        right={
          <MenuBtn onPress={handlePressMenu}>
            <IconMenu2 color={theme.system.text100} />
          </MenuBtn>
        }
      />

      <Head>
        <QuestionSignpost order={order} />
      </Head>

      <QuestionViewer order={order} />
    </Screen>
  );
}

export default QuestionDetailsScreen;

const Screen = styled(Layout.Screen)``;

const Head = styled.View`
  padding: 0px 20px;
`;

const MenuBtn = styled.TouchableOpacity.attrs({ hitSlop: 8 })``;
