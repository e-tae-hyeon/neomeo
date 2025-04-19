import Layout from "@/src/components/Layout";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import Typo from "@/src/components/Typo";
import { FlatList, ListRenderItem, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Header from "@/src/components/Header";
import Btn from "@/src/components/Btn";
import usePet, { IPetKind, petKinds } from "@/src/features/me/hooks/usePet";

function PetKindScreen() {
  const { t } = useTranslation();
  const { navigate } = useRouter();

  const { pet, updatePet } = usePet();

  const options: Array<{ label: string; value: IPetKind }> = petKinds.map(
    (v) => ({
      label: t("auth.pet.kind.options", { returnObjects: true })[v],
      value: v,
    })
  );

  const [kind, setKind] = useState(pet.kind);
  const disabled = !kind;

  const handleNext = () => {
    updatePet({ kind });

    navigate("/auth/custom");
  };

  const renderItem: ListRenderItem<{ label: string; value: IPetKind }> =
    useCallback(
      ({ item }) => {
        const { label, value } = item;
        const isSelected = value === kind;

        const handlePress = () => {
          setKind(value);
        };

        return (
          <OptionCard onPress={handlePress} isSelected={isSelected}>
            <OptionLabel>{label}</OptionLabel>
          </OptionCard>
        );
      },
      [kind]
    );

  return (
    <Screen>
      <Header.Arrow />

      <ScrollView>
        <Main>
          <Title>{t("auth.pet.kind.title")}</Title>

          <FlatList
            data={options}
            renderItem={renderItem}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <Gap />}
          />
        </Main>
      </ScrollView>

      <Footer>
        <Btn onPress={handleNext} disabled={disabled}>
          {t("common.action.next")}
        </Btn>
      </Footer>
    </Screen>
  );
}

export default PetKindScreen;

const Screen = styled(Layout.Screen)``;

const Main = styled.View`
  gap: 20px;
  padding: 24px;
`;

const Title = styled(Typo.H3)``;

const OptionCard = styled.TouchableOpacity<{ isSelected: boolean }>`
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: ${(props) =>
    props.isSelected ? props.theme.system.white : props.theme.system.sub};
`;

const OptionLabel = styled(Typo.Label)``;

const Footer = styled.View`
  padding: 20px;
  padding-bottom: 40px;
`;

const Gap = styled.View`
  height: 12px;
`;
