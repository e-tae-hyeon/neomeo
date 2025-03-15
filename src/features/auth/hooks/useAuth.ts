import { useStorageString } from "@/src/common/storage";
import { generateId } from "@/src/util/generate-id";

function useAuth() {
  const KEY = "k_user_id";

  const [userId, setUserId] = useStorageString(KEY, {
    returnIfAbsent: "",
  });

  const register = () => setUserId(generateId());

  return { userId, register };
}

export default useAuth;
