import Typo from "@/src/components/Typo";
import React, { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";
import styled from "styled-components/native";
import usePet, { IPetKind } from "../../me/hooks/usePet";
import { IOptionItem, PET_CUSTOM_OPTION_MAP } from "../common/pet";
import { Image } from "expo-image";

type Props = {
  kind: IPetKind;
};

function PetCustomManager({ kind }: Props) {
  const { colors, shapes, patterns, face } = PET_CUSTOM_OPTION_MAP[kind];

  const { updatePet } = usePet();

  const renderColorItem: ListRenderItem<string> = useCallback(
    ({ item }) => {
      const handlePress = () => {
        updatePet({ color: item });
      };

      return <ColorItem onPress={handlePress} color={item} />;
    },
    [updatePet]
  );

  const renderShapeItem: ListRenderItem<IOptionItem> = useCallback(
    ({ item }) => {
      const { thumbnail, value } = item;

      const handlePress = () => {
        updatePet({ shape: value });
      };

      return (
        <OptionItem onPress={handlePress}>
          <Image source={thumbnail} style={{ flex: 1 }} contentFit="contain" />
        </OptionItem>
      );
    },
    [updatePet]
  );

  const renderPatternItem: ListRenderItem<IOptionItem> = useCallback(
    ({ item }) => {
      const { thumbnail, value } = item;

      const handlePress = () => {
        updatePet({ pattern: value });
      };

      return (
        <OptionItem onPress={handlePress}>
          <Image source={thumbnail} style={{ flex: 1 }} contentFit="contain" />
        </OptionItem>
      );
    },
    [updatePet]
  );

  const renderFaceItem: ListRenderItem<IOptionItem> = useCallback(
    ({ item }) => {
      const { thumbnail, value } = item;

      const handlePress = () => {
        updatePet({ face: value });
      };

      return (
        <OptionItem onPress={handlePress}>
          <Image source={thumbnail} style={{ flex: 1 }} contentFit="contain" />
        </OptionItem>
      );
    },
    [updatePet]
  );

  return (
    <Root>
      <Section>
        <FlatList
          data={colors}
          renderItem={renderColorItem}
          horizontal
          ItemSeparatorComponent={() => <Gap />}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </Section>

      <Section>
        <Label>Shape</Label>

        <FlatList
          data={shapes}
          renderItem={renderShapeItem}
          horizontal
          ItemSeparatorComponent={() => <Gap />}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </Section>

      <Section>
        <Label>Pattern</Label>

        <FlatList
          data={patterns}
          renderItem={renderPatternItem}
          horizontal
          ItemSeparatorComponent={() => <Gap />}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </Section>

      <Section>
        <Label>Face</Label>

        <FlatList
          data={face}
          renderItem={renderFaceItem}
          horizontal
          ItemSeparatorComponent={() => <Gap />}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </Section>
    </Root>
  );
}

export default PetCustomManager;

const Root = styled.View`
  flex: 1;
  gap: 12px;
`;

const Section = styled.View``;

const Label = styled(Typo.Label)`
  padding: 12px 20px;
`;

const ColorItem = styled.TouchableOpacity<{ color: string }>`
  aspect-ratio: 1;
  width: 38px;
  border-radius: 999px;
  border-width: 1px;
  background-color: ${(props) => props.color};
`;

const Gap = styled.View`
  width: 12px;
`;

const OptionItem = styled.TouchableOpacity`
  aspect-ratio: 1;
  width: 50px;
  padding: 6px;
  border-radius: 14px;
  background-color: #cfdbfd;
`;
