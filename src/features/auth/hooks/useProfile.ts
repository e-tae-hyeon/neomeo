import { useStorageObjectWithDefault } from "@/src/common/storage";
import DateUtil from "@/src/util/DateUtil";

type IProfile = {
  nickname: string;

  createdAt: string;
  updatedAt: string;
};

function useProfile() {
  const KEY = "k_profile";

  const defaultProfile: IProfile = {
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
