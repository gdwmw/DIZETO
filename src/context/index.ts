import { create } from "zustand";

interface IStates {
  imageIndex: number;
  openASide: boolean;
  openImageDetail: boolean;
}

interface IActions {
  setImageIndex: (param: number) => void;
  setOpenASide: (param: boolean) => void;
  setOpenImageDetail: (param: boolean) => void;
}

export const useGlobalStates = create<IActions & IStates>((set) => ({
  imageIndex: 0,
  openASide: false,
  openImageDetail: false,
  setImageIndex: (imageIndex: number) => set({ imageIndex }),
  setOpenASide: (openASide: boolean) => set({ openASide }),
  setOpenImageDetail: (openImageDetail: boolean) => set({ openImageDetail }),
}));
