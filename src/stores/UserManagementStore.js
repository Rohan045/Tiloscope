import { create } from "zustand";

const useUserManagementStore = create((set) => ({
  loggedInUserInfo: {
    id: "ad0ef42c-8dd5-4c5c-bb1a-714bc50ecdef",
    description: "Coder",
    name: "Soumyabrata",
    email: "soumyabrata024@gmail.com",
    photo_url: "https://avatars.githubusercontent.com/u/28835376?v=4",
    roles: null,
  },
  setLoggedInUserInfo: (userInfo) =>
    set((state) => ({ loggedInUserInfo: userInfo })),
}));

export { useUserManagementStore };
