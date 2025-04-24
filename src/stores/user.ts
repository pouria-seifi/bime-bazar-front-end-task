import { create } from "zustand";
import { Address } from "@/src/types";

interface State {
  address: Address | null;
  addAddress: (address: Address) => void;
}

const useUserStore = create<State>((set) => ({
  address: null,
  addAddress: (address) => set(() => ({ address: address })),
}));

export default useUserStore;
