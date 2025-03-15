import { useStorageObject } from "@/src/common/storage";

type IProfile = {
  id: string;

  nickname: string;

  createdAt: string;
  updatedAt: string;
};

function useProfile() {
  const KEY = "k_profile";

  const [] = useStorageObject<IProfile>(KEY);
}

export default useProfile;
