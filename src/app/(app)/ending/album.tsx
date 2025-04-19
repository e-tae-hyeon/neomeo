import Header from "@/src/components/Header";
import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import EndingReplyCarousel from "@/src/features/home/modules/EndingReplyCarousel";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";

function EndingAlbumScreen() {
  const { t } = useTranslation();

  return (
    <Screen>
      <Header.Arrow />

      <Main>
        <Head>
          <BeltContainer>
            <Belt />
          </BeltContainer>

          <Post>
            <Content>{t("ending.view.final")}</Content>
          </Post>
        </Head>

        <EndingReplyCarousel />
      </Main>
    </Screen>
  );
}

export default EndingAlbumScreen;

const Screen = styled(Layout.Screen)`
  background-color: #8fa9ea;
`;

const Main = styled.View`
  flex: 1;
  gap: 24px;
`;

const Head = styled(Layout.Center)``;

const BeltContainer = styled.View`
  position: absolute;
  top: 0;
  right: 20px;
  bottom: 0;
  left: 20px;
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
