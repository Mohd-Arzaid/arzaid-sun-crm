import { create } from "zustand";

export const useApplicantAndProductInformationStore = create((set) => ({
  loading: false,
  setLoading: (value) => set({ loading: value }),
}));
