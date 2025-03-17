import Typo from "@/src/components/Typo";
import React from "react";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components/native";
import usePet from "../../me/hooks/usePet";
import { useRouter } from "expo-router";
import Layout from "@/src/components/Layout";
import { IconCaretRightFilled } from "@tabler/icons-react-native";
import useTodayQuestion from "../hooks/useTodayQuestion";
import { QUESTIONS_SIZE } from "../common/quetion";
import useQuestions from "../hooks/useQuestions";

function QuestionController() {
  const theme = useTheme();
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const { pet } = usePet();
  const { questions } = useQuestions();
  const { todayQuestion } = useTodayQuestion();

  const star = t("common.view.star", { returnObjects: true })[pet.kind!];
  const remain = QUESTIONS_SIZE - questions.length;

  const handleViewAll = () => {
    navigate("/question/list");
  };

  const handleWrite = () => {
    if (!todayQuestion) return;

    navigate({
      pathname: "/question/[order]/reply",
      params: { order: todayQuestion.order },
    });
  };

  return (
    <Root>
      <Body>
        <Head>
          <Title>{t("common.view.earth")}</Title>
          <IconCaretRightFilled
            color={theme.system.text100}
            fill={theme.system.text100}
          />
          <Title>{star}</Title>
        </Head>

        <Desc>{t("question.remain", { star, count: remain })}</Desc>
      </Body>

      <BtnContainer>
        <CancelBtn onPress={handleViewAll}>
          <Label>{t("question.viewAll")}</Label>
        </CancelBtn>

        <Divider />

        <ConfirmBtn onPress={handleWrite}>
          <WriteLabel>{t("question.write.label")}</WriteLabel>
        </ConfirmBtn>
      </BtnContainer>
    </Root>
  );
}

export default QuestionController;

const Root = styled.View`
  gap: 24px;
  padding: 20px 30px;
  border-radius: 24px;
  background-color: ${(props) => props.theme.system.white};
`;

const Body = styled.View`
  gap: 12px;
`;

const Head = styled(Layout.Row)`
  gap: 8px;
`;

const Title = styled(Typo.H3)``;

const Desc = styled(Typo.B3)``;

const BtnContainer = styled(Layout.Row)`
  overflow: hidden;
  border-radius: 16px;
`;

const Btn = styled.TouchableOpacity`
  height: 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CancelBtn = styled(Btn)`
  background-color: #e6e6e6;
`;

const ConfirmBtn = styled(Btn)`
  background-color: #8fa9ea;
`;

const Divider = styled.View`
  width: 2px;
  background-color: ${(props) => props.theme.system.white};
`;

const Label = styled(Typo.Label)``;

const WriteLabel = styled(Label)`
  color: ${(props) => props.theme.system.white};
`;
