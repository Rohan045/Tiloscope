import { create } from "zustand";

const useDialogManagementStore = create((set) => ({
  dialogInfo: undefined,
  setDialogInfo: (data) => set((state) => ({ dialogInfo: data })),
}));

const useLoaderManagementStore = create((set) => ({
  loaderInfo: undefined,
  setLoaderInfo: (data) => set((state) => ({ loaderInfo: data })),
}));

const useEditProfileManagementStore = create((set) => ({
  profileInfo: undefined,
  setProfileInfo: (data) => set((state) => ({ profileInfo: data })),
}));

export { useDialogManagementStore, useLoaderManagementStore, useEditProfileManagementStore };
