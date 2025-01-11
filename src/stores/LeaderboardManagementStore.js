import { create } from "zustand";

const useLeaderboardManagement = create((set) => ({
  leaderboard: [],
  setLeaderboard: (data) => set((state) => ({ leaderboard: data })),
}));

export { useLeaderboardManagement };
