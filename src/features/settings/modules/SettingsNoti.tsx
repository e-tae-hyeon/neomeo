import Typo from "@/src/components/Typo";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import Layout from "@/src/components/Layout";
import Switch from "@/src/components/Switch";
import useSettingsStore from "../stores/useSettingsStore";

function SettingsNoti() {
  const { t } = useTranslation();

  const {
    settings: { noti },
    updateSettings,
  } = useSettingsStore();

  return (
    <Root>
      <Section>
        <Body>
          <Title>{t("settings.noti.question.label")}</Title>
          <Desc>{t("settings.noti.question.desc")}</Desc>
        </Body>

        <Switch
          value={noti.question}
          onChange={(by) =>
            updateSettings({
              noti: { question: by },
            })
          }
        />
      </Section>
    </Root>
  );
}

export default SettingsNoti;

const Root = styled.View`
  padding: 20px;
`;

const Section = styled(Layout.Row)`
  gap: 4px;
`;

const Body = styled.View`
  flex: 1;
  gap: 8px;
`;

const Title = styled(Typo.H4)``;

const Desc = styled(Typo.B1)`
  color: ${(props) => props.theme.system.text80};
`;
