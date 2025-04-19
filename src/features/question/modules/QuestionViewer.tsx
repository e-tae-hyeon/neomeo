import Typo from "@/src/components/Typo";
import React from "react";
import styled from "styled-components/native";
import useQuestionReply from "../hooks/useQuestionReply";
import useQuestions from "../hooks/useQuestions";
import { Link, Redirect } from "expo-router";
import Layout from "@/src/components/Layout";
import { Image } from "expo-image";
import { applyOpacity } from "@/src/util/apply-opacity";
import PhotoFrame from "@/src/components/PhotoFrame";
import usePet from "../../me/hooks/usePet";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { josa } from "es-hangul";

type Props = {
  order: number;
};

function QuestionViewer({ order }: Props) {
  const { t } = useTranslation();

  const { pet } = usePet();
  const { getQuestionByOrder } = useQuestions();
  const { getReplyByOrder } = useQuestionReply();

  const question = getQuestionByOrder(order);
  const reply = getReplyByOrder(order);

  if (!question) return <Redirect href={"/question/list"} />;

  return (
    <Root>
      <Head>
        <Title>{question.content}</Title>
      </Head>

      <Body>
        <Paper>
          <Image
            source={require("@images/core/paper.png")}
            style={{ flex: 1 }}
          />
        </Paper>

        <Main>
          {reply ? (
            <ScrollView
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingVertical: 28,
              }}
            >
              <ContentSection>
                {reply.imageUri && (
                  <PhotoFrame
                    imageUri={reply.imageUri}
                    content={t("common.view.memory", {
                      name: josa(pet.name, "와/과"),
                    })}
                  />
                )}

                <Content>{reply.content}</Content>
              </ContentSection>
            </ScrollView>
          ) : (
            <PlaceholderView>
              <Content>{t("question.placeholder")}</Content>

              <Link
                href={{
                  pathname: "/question/[order]/reply",
                  params: { order },
                }}
                asChild
              >
                <WriteBtn>
                  <Write>{t("question.write.label")}</Write>
                </WriteBtn>
              </Link>
            </PlaceholderView>
          )}
        </Main>
      </Body>
    </Root>
  );
}

export default QuestionViewer;

const Root = styled.View`
  flex: 1;
`;

const Head = styled(Layout.Center)`
  padding: 20px;
`;

const Title = styled(Typo.H4)``;

const Body = styled.View`
  flex: 1;
  padding: 0px 20px;
`;

const Paper = styled.View`
  overflow: hidden;
  position: absolute;
  top: 0px;
  right: 20px;
  bottom: 0px;
  left: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const Main = styled.View`
  flex: 1;
  border-radius: 30px;
  background-color: ${(props) => applyOpacity(props.theme.system.sub, 0.3)};
`;

const ContentSection = styled.View`
  gap: 20px;
`;

const Content = styled(Typo.B1)`
  line-height: 28px;
`;

const PlaceholderView = styled(Layout.Center)`
  flex: 1;
  gap: 12px;
  padding-bottom: 32%;
`;

const WriteBtn = styled.TouchableOpacity`
  padding: 12px 24px;
  border-radius: 999px;
  background-color: ${(props) => props.theme.system.main};
`;

const Write = styled(Typo.Label)`
  color: ${(props) => props.theme.system.white};
`;
