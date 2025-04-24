import { create } from "zustand";
import { Address } from "@/src/types";

interface State {
  userSelectedAddress: Address | null;
  setUserSelectedAddress: (address: Address) => void;
  userAddressList: Address[] | null;
  setUserAddressList: (address: Address[]) => void;
  selectedToRemoveAddress: Address | null;
  setselectedToRemoveAddress: (address: Address) => void;
  removeAddress: (address: Address) => void;
}

const useUserStore = create<State>((set) => ({
  userSelectedAddress: null,
  setUserSelectedAddress: (address) =>
    set(() => ({ userSelectedAddress: address })),

  userAddressList: null,
  setUserAddressList: (addressList) =>
    set(() => ({ userAddressList: addressList })),

  selectedToRemoveAddress: null,
  setselectedToRemoveAddress: (address) =>
    set(() => ({ selectedToRemoveAddress: address })),

  removeAddress: (address) =>
    set((state) => ({
      userAddressList: [
        ...(state.userAddressList?.filter((item) => item.id !== address.id) ||
          []),
      ],
    })),
}));

export default useUserStore;
