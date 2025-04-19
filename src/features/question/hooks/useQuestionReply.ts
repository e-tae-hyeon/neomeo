import { useStorageObjectWithDefault } from "@/src/common/storage";
import DateUtil from "@/src/util/DateUtil";

export type IQuestionReply = {
  order: number;

  content: string;
  imageUri?: string | null;

  createdAt: string;
  updatedAt: string;
};

function useQuestionReply() {
  const KEY = "k_question_reply";

  const [orderReplyMap, setOrderReplyMap] = useStorageObjectWithDefault<
    Record<number, IQuestionReply | undefined>
  >(KEY, {});

  const getReplyByOrder = (order: number) => orderReplyMap[order];

  const upsertReply = (by: {
    order: number;
    content: string;
    imageUri?: string | null;
  }) => {
    const { order, content, imageUri } = by;

    const prev = getReplyByOrder(order);

    const newReply: IQuestionReply = {
      createdAt: DateUtil.nowISO(),
      ...prev,
      order,
      content,
      imageUri,
      updatedAt: DateUtil.nowISO(),
    };

    setOrderReplyMap({ ...orderReplyMap, [order]: newReply });

    return newReply;
  };

  return { getReplyByOrder, upsertReply };
}

export default useQuestionReply;
