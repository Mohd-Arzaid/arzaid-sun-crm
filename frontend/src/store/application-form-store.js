import { create } from "zustand";

export const useApplicationFormStore = create((set) => ({
  loading: false,
  setLoading: (value) => set({ loading: value }),
}));

