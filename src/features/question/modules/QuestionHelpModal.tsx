import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "react-native";
import PagerView from "react-native-pager-view";
import styled, { useTheme } from "styled-components/native";
import usePet from "../../me/hooks/usePet";
import { IconX } from "@tabler/icons-react-native";
import Btn from "@/src/components/Btn";
import Animated, { FadeIn } from "react-native-reanimated";
import useQuestionStore from "../stores/useQuestionStore";
import Pet from "../../pet/modules/Pet";
import { Image } from "expo-image";
import useSettingsStore from "../../settings/stores/useSettingsStore";
import { josa } from "es-hangul";

function QuestionHelpModal() {
  const theme = useTheme();
  const { t } = useTranslation();

  const {
    general: { locale },
  } = useSettingsStore((s) => s.settings);

  const { pet } = usePet();
  const isVisible = useQuestionStore((s) => s.isVisibleHelp);
  const close = useQuestionStore((s) => s.closeHelp);
  const star = t("common.view.star", { returnObjects: true })[pet.kind!];

  const pagerRef = useRef<PagerView>(null);
  const [phase, setPhase] = useState(0);
  const isLast = phase === 2;

  const handleNext = () => {
    if (isLast) {
      close();
      return;
    }

    pagerRef.current?.setPage(phase + 1);
  };

  return (
    <Modal visible={isVisible} transparent>
      <Overlay entering={FadeIn}>
        <Header>
          <CloseBtn onPress={close}>
            <IconX color={theme.system.text100} />
          </CloseBtn>
        </Header>

        <Window>
          <PagerView
            ref={pagerRef}
            style={{ flex: 1 }}
            onPageSelected={(e) => setPhase(e.nativeEvent.position)}
          >
            <Page key={1}>
              <Head>
                <Title>{t("question.help.first.title")}</Title>
                <Desc>
                  {t("question.help.first.desc", {
                    name: locale === "ko" ? josa(pet.name, "와/과") : pet.name,
                  })}
                </Desc>
              </Head>

              <Image
                source={require("@images/core/question-help-1.png")}
                style={{ flex: 1 }}
                contentFit="contain"
              />
            </Page>

            <Page key={2}>
              <Head>
                <Title>{t("question.help.second.title")}</Title>
                <Desc>
                  {t("question.help.second.desc", {
                    name: locale === "ko" ? josa(pet.name, "이/가") : pet.name,
                  })}
                </Desc>
              </Head>

              <Image
                source={require("@images/core/question-help-2.png")}
                style={{ flex: 1 }}
                contentFit="contain"
              />
            </Page>

            <Page key={3}>
              <Head>
                <Title>{t("question.help.third.title", { star })}</Title>
                <Desc>
                  {t("question.help.third.desc", {
                    name: locale === "ko" ? josa(pet.name, "이/가") : pet.name,
                    star,
                  })}
                </Desc>
              </Head>

              <Full>
                <Pet size={152} />
              </Full>
            </Page>
          </PagerView>

          <Footer>
            <Pagination>
              {Array.from({ length: 3 }).map((_, idx) => {
                return <Dot isSelected={idx === phase} key={`p_${idx}`} />;
              })}
            </Pagination>

            <Btn onPress={handleNext} weight="secondary">
              {isLast ? t("common.action.done") : t("common.action.next")}
            </Btn>
          </Footer>
        </Window>
      </Overlay>
    </Modal>
  );
}

export default QuestionHelpModal;

const Overlay = styled(Animated.View)`
  flex: 1;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  background-color: ${(props) => props.theme.system.text60};
`;

const Header = styled(Layout.Row)`
  justify-content: flex-end;
`;

const CloseBtn = styled.TouchableOpacity`
  padding: 6px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.system.white};
`;

const Window = styled(Animated.View)`
  aspect-ratio: 9/15;
  width: 100%;
  border-radius: 24px;
  background-color: ${(props) => props.theme.system.white};
`;

const Page = styled.View`
  flex: 1;
  gap: 20px;
  padding: 20px 12px;
`;

const Head = styled(Layout.Center)`
  gap: 12px;
  padding-top: 40px;
`;

const Title = styled(Typo.H3)`
  text-align: center;
`;

const Desc = styled(Typo.B2)`
  text-align: center;
`;

const Footer = styled.View`
  gap: 20px;
  padding: 20px;
`;

const Pagination = styled(Layout.Row)`
  justify-content: center;
  gap: 8px;
`;

const Dot = styled.View<{ isSelected: boolean }>`
  aspect-ratio: 1;
  width: 8px;
  border-radius: 999px;
  opacity: ${(props) => (props.isSelected ? 1 : 0.3)};
  background-color: ${(props) => props.theme.system.text100};
`;

const Full = styled(Layout.Center)`
  flex: 1;
`;
