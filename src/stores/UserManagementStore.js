import { create } from "zustand";

const useUserManagementStore = create((set) => ({
  loggedInUserInfo: undefined,
  setLoggedInUserInfo: (userInfo) =>
    set((state) => ({ loggedInUserInfo: userInfo })),
}));

export { useUserManagementStore };
