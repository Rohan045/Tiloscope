import { create } from "zustand";

const useActiveTileManagement = create((set) => ({
  activeTileIndex: null,
  setActiveTileIndex: (index) => set((state) => ({ activeTileIndex: index })),
}));

export { useActiveTileManagement };
