import { create } from "zustand";

type State = {
  isVisibleHelp: boolean;
};

type Actions = {
  openHelp: () => void;
  closeHelp: () => void;
};

const initialState: State = {
  isVisibleHelp: false,
};

const useDiaryStore = create<State & Actions>()((set) => ({
  ...initialState,
  openHelp: () => set((state) => ({ ...state, isVisibleHelp: true })),
  closeHelp: () => set((state) => ({ ...state, isVisibleHelp: false })),
}));

export default useDiaryStore;
