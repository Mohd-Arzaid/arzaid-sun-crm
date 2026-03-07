import { create } from "zustand";

export const useAuthStore = create((set) => ({
  loading: false,
  setLoading: (value) => set({ loading: value }),
}));
