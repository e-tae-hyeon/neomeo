import { useStorageObjectWithDefault } from "@/src/common/storage";
import DateUtil from "@/src/util/DateUtil";
import { generateId } from "@/src/util/generate-id";

type IProfile = {
  id: string;

  nickname: string;

  createdAt: string;
  updatedAt: string;
};

function useProfile() {
  const KEY = "k_profile";

  const defaultProfile: IProfile = {
    id: generateId(),
    nickname: "",
    createdAt: DateUtil.nowISO(),
    updatedAt: DateUtil.nowISO(),
  };

  const [profile, setProfile] = useStorageObjectWithDefault<IProfile>(
    KEY,
    defaultProfile
  );

  const updateProfile = (by: Partial<IProfile>) => {
    setProfile({ ...profile, ...by, updatedAt: DateUtil.nowISO() });
  };

  return { profile, updateProfile };
}

export default useProfile;
