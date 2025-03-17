import DualBtn from "@/src/components/DualBtn";
import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import useModal from "@/src/features/core/hooks/useModal";
import LetterSealingWaxSelector from "@/src/features/letter/modules/LetterSealingWaxSelector";
import usePet from "@/src/features/me/hooks/usePet";
import { applyOpacity } from "@/src/util/apply-opacity";
import { Image } from "expo-image";
import { useNavigation, useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import styled from "styled-components/native";

function WriteLetterScreen() {
  const { t } = useTranslation();
  const { back } = useRouter();
  const { showModal } = useModal();

  const { pet } = usePet();

  const [content, setContent] = useState("");

  const handleConfirm = () => {
    showModal(LetterSealingWaxSelector, { position: "bottom" });
  };

  return (
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
              <To>To. {pet.name}</To>
            </Head>

            <Divider />

            <StyledInput
              placeholder={t("letter.write.placeholder")}
              value={content}
              onChangeText={setContent}
              multiline
            />
          </Form>
        </Body>
      </KeyboardAwareScrollView>

      <Footer>
        <DualBtn
          confirmLabel={t("common.action.next")}
          onCancel={() => back()}
          onConfirm={handleConfirm}
        />
      </Footer>
    </Screen>
  );
}

export default WriteLetterScreen;

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

const To = styled(Typo.B1)``;

const Divider = styled.View`
  height: 1px;
  background-color: ${(props) => props.theme.system.text20};
`;

const StyledInput = styled.TextInput.attrs((p) => ({
  placeholderTextColor: p.theme.system.text40,
}))`
  flex: 1;
  font-family: "NanumGothic";
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.system.text100};
`;

const Footer = styled.View`
  padding: 20px;
`;
