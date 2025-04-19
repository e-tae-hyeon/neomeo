import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";

type Props = {
  order: number;
};

function QuestionSignpost({ order }: Props) {
  const { t } = useTranslation();

  return (
    <Root>
      <BeltContainer>
        <Belt />
      </BeltContainer>

      <Post>
        <Content>{t("question.signpost", { count: order })}</Content>
      </Post>
    </Root>
  );
}

export default QuestionSignpost;

const Root = styled(Layout.Center)``;

const BeltContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
`;

const Belt = styled.View`
  height: 32px;
  border-radius: 50px;
  border-width: 2px;
  border-color: #d4deff;
  background-color: #bdc9f2;
`;

const Post = styled(Layout.Center)`
  height: 46px;
  padding: 4px 40px;
  border-radius: 50px;
  border-width: 2px;
  border-color: #d4deff;
  background-color: ${(props) => props.theme.system.white};
`;

const Content = styled(Typo.H3)`
  text-align: center;
`;
