import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      loading: false,
      token: null,
      setLoading: (value) => set({ loading: value }),
      setToken: (value) => set({ token: value }),
    }),
    {
      name: "auth-store",
      partialize: (state) => ({ token: state.token }),
    }
  )
);
