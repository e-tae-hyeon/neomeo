import DualBtn from "@/src/components/DualBtn";
import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import useDialog from "@/src/features/core/hooks/useDialog";
import useQuestionOrder from "@/src/features/question/hooks/useQuestionOrder";
import useQuestionReply from "@/src/features/question/hooks/useQuestionReply";
import useQuestions from "@/src/features/question/hooks/useQuestions";
import QuestionSignpost from "@/src/features/question/modules/QuestionSignpost";
import { applyOpacity } from "@/src/util/apply-opacity";
import { IconPhoto } from "@tabler/icons-react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";
import GroundBlue from "@images/core/ground-blue.svg";

function ReplyQuestionScreen() {
  const { t } = useTranslation();
  const { back, replace } = useRouter();
  const { showDialog } = useDialog();
  const order = useQuestionOrder();

  const { getQuestionByOrder } = useQuestions();
  const { getReplyByOrder, upsertReply } = useQuestionReply();

  const question = getQuestionByOrder(order)!;
  const reply = getReplyByOrder(order);

  const [content, setContent] = useState(reply?.content ?? "");
  const [imageUri, setImageUri] = useState<string | null>(
    reply?.imageUri ?? null
  );

  const handlePressImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        quality: 1,
      });

      const image = result.assets?.at(0);
      if (!image) return;

      setImageUri(image.uri);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => {
    if (!content) {
      back();
      return;
    }

    showDialog({
      title: t("common.view.cancel.title"),
      desc: t("common.view.cancel.desc"),
      onConfirm: back,
    });
  };

  const handleConfirm = () => {
    showDialog({
      title: t("question.write.complete.title"),
      onConfirm: () => {
        upsertReply({ order, content, imageUri });
        replace({ pathname: "/question/[order]/complete", params: { order } });
      },
    });
  };

  return (
    <Screen>
      <Header>
        <QuestionSignpost order={order} />
      </Header>

      <GroundSection>
        <GroundBlue />
      </GroundSection>

      <KeyboardAwareScrollView>
        <Body>
          <Paper>
            <Image
              source={require("@images/core/paper.png")}
              style={{ flex: 1 }}
            />
          </Paper>

          <Form>
            <Head>
              <Question>{question.content}</Question>
            </Head>

            <Divider />

            <StyledInput
              placeholder={t("letter.write.placeholder")}
              value={content}
              onChangeText={setContent}
              multiline
            />

            <ImageSection>
              <ImageBody>
                {imageUri && (
                  <ImageContainer>
                    <Image source={imageUri} style={{ flex: 1 }} />
                  </ImageContainer>
                )}
              </ImageBody>

              <ImageBtn onPress={handlePressImage} hitSlop={8}>
                <IconPhoto />
              </ImageBtn>
            </ImageSection>
          </Form>
        </Body>
      </KeyboardAwareScrollView>

      <Footer>
        <DualBtn
          confirmLabel={t("common.action.save")}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      </Footer>
    </Screen>
  );
}

export default ReplyQuestionScreen;

const Screen = styled(Layout.Screen)``;

const Header = styled.View`
  padding: 14px 20px;
`;

const Body = styled.View`
  aspect-ratio: 3/4;
  padding: 20px;
`;

const Paper = styled.View`
  overflow: hidden;
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 20px;
  border-radius: 30px;
`;

const Form = styled.View`
  flex: 1;
  gap: 20px;
  padding: 28px;
  border-radius: 30px;
  background-color: ${(props) => applyOpacity(props.theme.system.sub, 0.3)};
`;

const Head = styled.View``;

const Question = styled(Typo.H4)``;

const Divider = styled.View`
  height: 1px;
  background-color: ${(props) => props.theme.system.text20};
`;

const StyledInput = styled.TextInput.attrs((p) => ({
  placeholderTextColor: p.theme.system.text40,
}))`
  flex: 1;
  font-family: "Ownglyph_PDH-Rg";
  font-size: 19px;
  line-height: 22px;
  color: ${(props) => props.theme.system.text100};
`;

const ImageSection = styled(Layout.Row)`
  justify-content: space-between;
  gap: 4px;
`;

const ImageBody = styled(Layout.Row)`
  flex: 1;
`;

const ImageContainer = styled.View`
  aspect-ratio: 1;
  width: 45px;
`;

const ImageBtn = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 999px;
  background-color: #d1d1ef;
`;

const Footer = styled.View`
  padding: 20px;
  padding-bottom: 40px;
`;

const GroundSection = styled(Layout.Center)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -40px;
`;
