import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components/native";
import Carousel, {
  CarouselRenderItem,
  ICarouselInstance,
} from "react-native-reanimated-carousel";
import { FlatList, ListRenderItem, useWindowDimensions } from "react-native";
import useQuestions, { IQuestion } from "../../question/hooks/useQuestions";
import EndingReplyCard from "./EndingReplyCard";
import { useSharedValue } from "react-native-reanimated";
import Typo from "@/src/components/Typo";

function EndingReplyCarousel() {
  const { width, height } = useWindowDimensions();

  const { questions } = useQuestions();

  const ref = useRef<ICarouselInstance>(null);
  const paginationRef = useRef<FlatList>(null);
  const progress = useSharedValue<number>(0);
  const [curIdx, setCurIdx] = useState(0);

  const renderItem: CarouselRenderItem<IQuestion> = useCallback(({ item }) => {
    return <EndingReplyCard question={item} />;
  }, []);

  const renderPaginationItem: ListRenderItem<IQuestion> = useCallback(
    ({ item, index }) => {
      const isSelected = index === curIdx;

      const handlePress = () => {
        ref.current?.scrollTo({
          count: index - progress.value,
          animated: true,
        });

        paginationRef.current?.scrollToIndex({
          index,
          viewPosition: 0.5,
        });
      };

      return (
        <Dot onPress={handlePress} isSelected={isSelected}>
          <Order isSelected={isSelected}>{item.order}</Order>
        </Dot>
      );
    },
    [curIdx]
  );

  return (
    <Root>
      <PaginationSection>
        <FlatList
          ref={paginationRef}
          data={questions}
          renderItem={renderPaginationItem}
          horizontal
          contentContainerStyle={{ paddingHorizontal: 20 }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={28 + 8}
          decelerationRate="fast"
          snapToAlignment="start"
          ItemSeparatorComponent={() => <Gap />}
          keyExtractor={(item) => item.order.toString()}
          automaticallyAdjustContentInsets={false}
        />
      </PaginationSection>

      <Carousel
        ref={ref}
        data={questions}
        renderItem={renderItem}
        width={width}
        height={height * 0.7}
        onProgressChange={progress}
        onSnapToItem={setCurIdx}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </Root>
  );
}

export default EndingReplyCarousel;

const Root = styled.View``;

const PaginationSection = styled.View`
  align-items: center;
`;

const Dot = styled.TouchableOpacity<{ isSelected: boolean }>`
  aspect-ratio: 1;
  width: 28px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isSelected ? props.theme.system.text100 : props.theme.system.white};
`;

const Order = styled(Typo.B2)<{ isSelected: boolean }>`
  text-align: center;
  color: ${(props) =>
    props.isSelected ? props.theme.system.white : props.theme.system.text100};
`;

const Gap = styled.View`
  width: 8px;
`;
