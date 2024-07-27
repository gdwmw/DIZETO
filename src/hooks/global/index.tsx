import { create } from "zustand";

interface IStates {
  openASide?: boolean;
  openB?: boolean;
}

interface IActions {
  setOpenASide: (param: boolean) => void;
  setOpenB: (param: boolean) => void;
}

export const useGlobalStates = create<IActions & IStates>((set) => ({
  openASide: false,
  openB: false,
  setOpenASide: (openASide: boolean) => set({ openASide }),
  setOpenB: (openB: boolean) => set({ openB }),
}));
