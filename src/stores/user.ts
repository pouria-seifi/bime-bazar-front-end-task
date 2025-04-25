import { create } from "zustand";
import { IAddress } from "@/src/types";

interface State {
  userSelectedAddress: IAddress | null;
  setUserSelectedAddress: (address: IAddress) => void;
  userAddressList: IAddress[] | null;
  setUserAddressList: (address: IAddress[]) => void;
  selectedToRemoveAddress: IAddress | null;
  setselectedToRemoveAddress: (address: IAddress) => void;
  removeAddress: (address: IAddress) => void;
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
