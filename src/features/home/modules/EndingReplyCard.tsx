import React from "react";
import styled from "styled-components/native";
import { IQuestion } from "../../question/hooks/useQuestions";
import useQuestionReply from "../../question/hooks/useQuestionReply";
import Typo from "@/src/components/Typo";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateUtil from "@/src/util/DateUtil";

type Props = {
  question: IQuestion;
};

function EndingReplyCard({ question }: Props) {
  const { order, content, createdAt } = question;
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const { getReplyByOrder } = useQuestionReply();
  const reply = getReplyByOrder(order);

  const handlePress = () => {
    navigate({ pathname: "/question/[order]", params: { order } });
  };

  return (
    <Root onPress={handlePress}>
      {reply?.imageUri && (
        <ImageContainer>
          <Image source={reply.imageUri} style={{ flex: 1 }} />
        </ImageContainer>
      )}

      <QuestionSection>
        <Label>{t("ending.view.order", { order })}</Label>
        <Question>{content}</Question>

        <Desc>{DateUtil.formatDot(createdAt)}</Desc>
      </QuestionSection>

      <Divider />

      <Content>{reply?.content}</Content>
    </Root>
  );
}

export default EndingReplyCard;

const Root = styled(TouchableOpacity)`
  height: 100%;
  overflow: hidden;
  gap: 20px;
  padding: 24px;
  background-color: ${(props) => props.theme.system.white};
`;

const ImageContainer = styled.View`
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.gray.gray200};
`;

const QuestionSection = styled.View`
  gap: 8px;
`;

const Label = styled(Typo.H4)`
  color: ${(props) => props.theme.system.text80};
`;

const Question = styled(Typo.H2)``;

const Desc = styled(Typo.B3)`
  color: ${(props) => props.theme.system.text40};
`;

const Divider = styled.View`
  height: 1px;
  background-color: ${(props) => props.theme.gray.gray200};
`;

const Content = styled(Typo.B1)``;
