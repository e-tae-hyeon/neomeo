import { useStorageBoolean } from "@/src/common/storage";

function useKickOff() {
  const KEY = "k_is_done_kick_off";

  const [isDoneKickOff, setDoneKickOff] = useStorageBoolean(KEY, {
    returnIfAbsent: false,
  });

  const doneKickOff = () => setDoneKickOff(true);

  return { isDoneKickOff, doneKickOff };
}

export default useKickOff;
