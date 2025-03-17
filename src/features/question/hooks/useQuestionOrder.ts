import { useLocalSearchParams } from "expo-router";

function useQuestionOrder() {
  const { order } = useLocalSearchParams<{ order: string }>();

  return Number(order);
}

export default useQuestionOrder;
