import Typo from "@/src/components/Typo";
import React from "react";
import styled from "styled-components/native";
import { IQuestion } from "../hooks/useQuestions";
import { useRouter } from "expo-router";
import DateUtil from "@/src/util/DateUtil";
import Layout from "@/src/components/Layout";

type Props = {
  question: IQuestion;
  isFirst?: boolean;
  isLast?: boolean;
};

function QuestionItem({ question, isFirst, isLast }: Props) {
  const { order, content, createdAt } = question;
  const { navigate } = useRouter();

  const getOrder = () => {
    return order < 10 ? `0${order}` : order;
  };

  const handlePress = () => {
    navigate({ pathname: "/question/[order]", params: { order } });
  };

  return (
    <Root onPress={handlePress}>
      <Right>
        {(() => {
          if (isFirst)
            return (
              <FirstLineContainer>
                <HalfLine />
              </FirstLineContainer>
            );

          if (isLast) {
            return (
              <LastLineContainer>
                <HalfLine />
              </LastLineContainer>
            );
          }
          return (
            <LineContainer>
              <Line />
            </LineContainer>
          );
        })()}

        <DotSection>
          <Dot />
        </DotSection>
      </Right>

      <Body>
        <Title>
          {getOrder()} {content}
        </Title>

        <Desc>{DateUtil.formatDot(createdAt)}</Desc>
      </Body>
    </Root>
  );
}

export default QuestionItem;

const Root = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const Right = styled.View`
  padding: 28px 20px;
`;

const DotSection = styled(Layout.Center)``;

const Dot = styled.View`
  aspect-ratio: 1;
  width: 12px;
  border-radius: 999px;
  background-color: #9aa9db;
`;

const LineContainer = styled(Layout.Center)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const FirstLineContainer = styled(LineContainer)`
  justify-content: flex-end;
`;

const LastLineContainer = styled(LineContainer)`
  justify-content: flex-start;
`;

const Line = styled.View`
  width: 4px;
  height: 100%;
  background-color: #bdc9f2;
`;

const HalfLine = styled(Line)`
  height: 50%;
`;

const Body = styled.View`
  flex: 1;
  gap: 4px;
`;

const Title = styled(Typo.B2)``;

const Desc = styled(Typo.B3)`
  color: ${(props) => props.theme.system.text40};
`;
