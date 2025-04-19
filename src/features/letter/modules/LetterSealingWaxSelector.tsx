import Btn from "@/src/components/Btn";
import Layout from "@/src/components/Layout";
import Typo from "@/src/components/Typo";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMagicModal } from "react-native-magic-modal";
import styled from "styled-components/native";

function LetterSealingWaxSelector() {
  const { hide } = useMagicModal();
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const [selected, setSelected] = useState<number>(0);
  const disabled = !selected;

  const sealingImages = [
    require("@images/core/sealing-1.png"),
    require("@images/core/sealing-2.png"),
    require("@images/core/sealing-3.png"),
  ];

  const handleDone = () => {
    hide();

    navigate({
      pathname: "/letter/sealing",
      params: { sealing: selected },
    });
  };

  return (
    <Root>
      <Label>{t("letter.sealing.label")}</Label>

      <Body>
        {sealingImages.map((image, idx) => {
          const value = idx + 1;
          const isSelected = selected === value;

          return (
            <SealingItem
              onPress={() => setSelected(value)}
              isSelected={isSelected}
              key={`s_${value}`}
            >
              <Image source={image} style={{ flex: 1 }} />
            </SealingItem>
          );
        })}
      </Body>

      <Btn onPress={handleDone} disabled={disabled}>
        {t("common.action.done")}
      </Btn>
    </Root>
  );
}

export default LetterSealingWaxSelector;

const Root = styled.View`
  gap: 24px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.system.background};
`;

const Label = styled(Typo.Label)`
  text-align: center;
  color: ${(props) => props.theme.system.text80};
`;

const Body = styled(Layout.Row)`
  gap: 20px;
  justify-content: center;
`;

const SealingItem = styled.TouchableOpacity<{ isSelected: boolean }>`
  aspect-ratio: 1;
  width: 84px;
  padding: 8px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.isSelected ? props.theme.system.white : "transparent"};
`;
