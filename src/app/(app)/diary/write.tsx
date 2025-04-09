import DualBtn from "@/src/components/DualBtn";
import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import useDialog from "@/src/features/core/hooks/useDialog";
import { applyOpacity } from "@/src/util/apply-opacity";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import styled from "styled-components/native";
import GroundBlue from "@images/core/ground-blue.svg";
import { fontSizeAdditionMap } from "@/src/features/settings/utils/Font";
import KeyboardToolbar from "@/src/features/core/modules/KeyboardToolbar";

function WriteDiaryScreen() {
  const { t } = useTranslation();
  const { back, navigate } = useRouter();
  const { showDialog } = useDialog();

  const [content, setContent] = useState("");

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
      title: t("diary.write.complete.title"),
      desc: t("diary.write.complete.desc"),
      onConfirm: () => navigate("/diary/complete"),
    });
  };

  return (
    <>
      <Screen>
        <Header>
          <Title>{t("letter.letter")}</Title>
        </Header>

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
                <Guide>{t("diary.write.guide")}</Guide>
              </Head>

              <Divider />

              <StyledInput
                placeholder={t("diary.write.placeholder")}
                value={content}
                onChangeText={setContent}
                multiline
              />
            </Form>
          </Body>
        </KeyboardAwareScrollView>

        <GroundSection>
          <GroundBlue />
        </GroundSection>

        <Footer>
          <DualBtn
            confirmLabel={t("common.action.done")}
            onCancel={handleCancel}
            onConfirm={handleConfirm}
          />
        </Footer>
      </Screen>
      <KeyboardToolbar />
    </>
  );
}

export default WriteDiaryScreen;

const Screen = styled(Layout.Screen)``;

const Header = styled(Layout.Row)`
  padding: 14px 20px;
`;

const Title = styled(Typo.H3)``;

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

const Guide = styled(Typo.B1)``;

const Divider = styled.View`
  height: 1px;
  background-color: ${(props) => props.theme.system.text20};
`;

const StyledInput = styled.TextInput.attrs((p) => ({
  placeholderTextColor: p.theme.system.text40,
}))`
  flex: 1;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => 19 + fontSizeAdditionMap[props.theme.font]}px;
  line-height: 24px;
  color: ${(props) => props.theme.system.text100};
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
