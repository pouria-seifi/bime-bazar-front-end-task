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
  // save userSelectedAddress to make it accessible in home page to show
  userSelectedAddress: null,
  setUserSelectedAddress: (address) =>
    set(() => ({ userSelectedAddress: address })),

  // // save userAddressList to make it accessible in user address modal
  userAddressList: null,
  setUserAddressList: (addressList) =>
    set(() => ({ userAddressList: addressList })),

  // save selectedToRemoveAddress to make it accessible in deleteUserAddress modal
  selectedToRemoveAddress: null,
  setselectedToRemoveAddress: (address) =>
    set(() => ({ selectedToRemoveAddress: address })),

  // remove selected to remove address locally
  removeAddress: (address) =>
    set((state) => ({
      userAddressList: [
        ...(state.userAddressList?.filter((item) => item.id !== address.id) ||
          []),
      ],
    })),
}));

export default useUserStore;
