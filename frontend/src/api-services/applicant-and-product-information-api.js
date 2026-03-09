import axios from "axios";
import { toast } from "sonner";
import { useAuthStore } from "@/store/auth-store";
import { useApplicantAndProductInformationStore } from "@/store/applicant-and-product-information-store";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const submitApplicantAndProductInformation = async (formData) => {
  const token = useAuthStore.getState().token;
  const setLoading = useApplicantAndProductInformationStore
    .getState()
    .setLoading;

  if (!token) {
    toast.error("You must be logged in to submit this form.", {
      position: "bottom-right",
    });
    return;
  }

  setLoading(true);
  try {
    const response = await axios.post(
      `${BASE_URL}/applicant-and-product-information/create`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(
      "APPLICANT & PRODUCT INFORMATION RESPONSE : ",
      response
    );

    if (!response.data.success) {
      toast.error(response.data.message || "Failed to submit form.", {
        position: "bottom-right",
      });
      return;
    }

    toast.success(response.data.message, { position: "bottom-right" });
  } catch (error) {
    console.log("APPLICANT & PRODUCT INFORMATION ERROR : ", error);
    toast.error(
      error.response?.data?.message ||
        "Something went wrong while submitting the form.",
      {
        position: "bottom-right",
      }
    );
  } finally {
    setLoading(false);
  }
};

