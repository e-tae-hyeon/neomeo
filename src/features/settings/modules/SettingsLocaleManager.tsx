import Typo from "@/src/components/Typo";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, ListRenderItem } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { Locale, supportedLocales } from "../utils/Locale";
import useSettingsStore from "../stores/useSettingsStore";
import { IconSquare, IconSquareCheck } from "@tabler/icons-react-native";
import i18next from "i18next";

function SettingsLocaleManager() {
  const theme = useTheme();
  const { t } = useTranslation();

  const {
    settings: { general },
    updateSettings,
  } = useSettingsStore();

  const renderItem: ListRenderItem<Locale> = useCallback(
    ({ item }) => {
      const label = t("settings.locale.options", { returnObjects: true })[item];
      const isSelected = general.locale === item;

      const handlePress = () => {
        i18next.changeLanguage(item);
        updateSettings({
          general: { ...general, locale: item },
        });
      };

      return (
        <OptionCard onPress={handlePress}>
          <Label>{label}</Label>

          {isSelected ? (
            <IconSquareCheck
              color={theme.system.text100}
              fill={theme.system.sub}
            />
          ) : (
            <IconSquare color={theme.system.text100} />
          )}
        </OptionCard>
      );
    },
    [t, updateSettings, general, theme]
  );

  return (
    <Root>
      <Label>{t("settings.locale.label")}</Label>

      <FlatList
        data={supportedLocales}
        renderItem={renderItem}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <Gap />}
        keyExtractor={(item) => item}
      />
    </Root>
  );
}

export default SettingsLocaleManager;

const Root = styled.View`
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.system.white};
`;

const Label = styled(Typo.Label)``;

const OptionCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.system.text4};
`;

const Gap = styled.View`
  height: 8px;
`;
