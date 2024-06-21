import { create } from "zustand";

type States = {
  openASide?: boolean;
  openB?: boolean;
};

type Actions = {
  setOpenASide: (param: boolean) => void;
  setOpenB: (param: boolean) => void;
};

export const useGlobalStates = create<Actions & States>((set) => ({
  openASide: false,
  openB: false,
  setOpenASide: (openASide: boolean) => set({ openASide }),
  setOpenB: (openB: boolean) => set({ openB }),
}));
