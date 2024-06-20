import { create } from "zustand";

type States = {
  openASide?: boolean;
  openB?: boolean;
};

type Actions = {
  setOpenASide: (e: any) => void;
  setOpenB: (e: any) => void;
};

export const useGlobalStates = create<Actions & States>((set) => ({
  openASide: false,
  openB: false,
  setOpenASide: (openASide: boolean) => set({ openASide }),
  setOpenB: (openB: boolean) => set({ openB }),
}));
