import AppSettings, { IAppSettings } from "../utils/AppSettings";
import { create } from "zustand";

type State = {
  settings: IAppSettings;
};

type Actions = {
  updateSettings: (by: Partial<IAppSettings>) => void;
};

const initialState: State = {
  settings: AppSettings.get(),
};

const useSettingsStore = create<State & Actions>()((set) => ({
  ...initialState,
  updateSettings: (by) => {
    const updated = AppSettings.set(by);
    set((state) => ({ ...state, settings: updated }));
  },
}));

export default useSettingsStore;
