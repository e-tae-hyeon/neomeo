import Typo from "@/src/components/Typo";
import React from "react";
import styled from "styled-components/native";
import Layout from "@/src/components/Layout";

type Props = {
  isFirst?: boolean;
  isLast?: boolean;
};

function QuestionNotOpenedItem({ isFirst, isLast }: Props) {
  return (
    <Root>
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
        <NotOpened>Not Opened</NotOpened>
      </Body>
    </Root>
  );
}

export default QuestionNotOpenedItem;

const Root = styled.View`
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
  gap: 4px;
`;

const NotOpened = styled(Typo.Label)`
  color: ${(props) => props.theme.system.text40};
`;
