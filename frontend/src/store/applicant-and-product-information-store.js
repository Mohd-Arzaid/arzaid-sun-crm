import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialFormState = {
  indianStandard: "",
  productName: "",
  contactPersonName: "",
  email: "",
  phoneNumber: "",
  countryName: "",
  address: "",
};

export const useApplicantAndProductInformationStore = create(
  persist(
    (set) => ({
      formData: initialFormState,
      loading: false,
      setField: (field, value) =>
        set((state) => ({
          formData: {
            ...state.formData,
            [field]: value,
          },
        })),
      setLoading: (value) => set({ loading: value }),
    }),
    {
      name: "applicant-and-product-information-store",
      partialize: (state) => ({
        formData: state.formData,
      }),
    }
  )
);
