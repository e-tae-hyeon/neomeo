import { useStorageObjectWithDefault } from "@/src/common/storage";
import DateUtil from "@/src/util/DateUtil";

export type IPetKind = "dog" | "cat";

export const petKinds: IPetKind[] = ["dog", "cat"];

export type IPet = {
  name: string;
  kind?: IPetKind;

  createdAt: string;
  updatedAt: string;
};

function usePet() {
  const KEY = "k_pet";

  const defaultPet: IPet = {
    name: "",
    createdAt: DateUtil.nowISO(),
    updatedAt: DateUtil.nowISO(),
  };

  const [pet, setPet] = useStorageObjectWithDefault<IPet>(KEY, defaultPet);

  const updatePet = (by: Partial<IPet>) => {
    setPet({ ...pet, ...by, updatedAt: DateUtil.nowISO() });
  };

  return { pet, updatePet };
}

export default usePet;
