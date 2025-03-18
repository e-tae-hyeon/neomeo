import { useStorageBoolean } from "@/src/common/storage";

function useEnd() {
  const KEY = "k_is_end";

  const [isEnd, setEnd] = useStorageBoolean(KEY, { returnIfAbsent: false });

  const end = () => {
    setEnd(true);
  };

  return { isEnd, end };
}

export default useEnd;
