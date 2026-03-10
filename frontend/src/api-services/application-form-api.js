import axios from "axios";
import { toast } from "sonner";
import { useAuthStore } from "@/store/auth-store";
import { useApplicationFormStore } from "@/store/application-form-store";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const createApplicationForm = async (formData) => {
  const token = useAuthStore.getState().token;
  const setLoading = useApplicationFormStore.getState().setLoading;

  if (!token) {
    toast.error("You must be logged in to submit this form.", {
      position: "bottom-right",
    });
    return;
  }

  setLoading(true);
  try {
    const response = await axios.post(
      `${BASE_URL}/application-form/create`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("APPLICATION FORM RESPONSE :", response);

    if (!response.data.success) {
      toast.error(response.data.message || "Failed to submit form.", {
        position: "bottom-right",
      });
      return;
    }

    toast.success(response.data.message, { position: "bottom-right" });
    return response.data.data;
  } catch (error) {
    console.log("APPLICATION FORM ERROR :", error);
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

export const getApplicationForm = async () => {
  const token = useAuthStore.getState().token;
  const setLoading = useApplicationFormStore.getState().setLoading;

  if (!token) {
    toast.error("You must be logged in to view this form.", {
      position: "bottom-right",
    });
    return;
  }

  setLoading(true);
  try {
    const response = await axios.get(
      `${BASE_URL}/application-form/get-form-data`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("APPLICATION FORM FETCH RESPONSE :", response);

    if (!response.data.success) {
      toast.error(response.data.message || "Failed to fetch form data.", {
        position: "bottom-right",
      });
      return;
    }

    return response.data.data;
  } catch (error) {
    console.log("APPLICATION FORM FETCH ERROR :", error);
    toast.error(
      error.response?.data?.message ||
        "Something went wrong while fetching the form data.",
      {
        position: "bottom-right",
      }
    );
  } finally {
    setLoading(false);
  }
};

