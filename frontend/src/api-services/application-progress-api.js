import axios from "axios";
import { toast } from "sonner";
import { useAuthStore } from "@/store/auth-store";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const checkApplicationProgress = async () => {
  const token = useAuthStore.getState().token;

  if (!token) {
    toast.error("You must be logged in to continue.", {
      position: "bottom-right",
    });
    return null;
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/application-progress/check-application-progress`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.data.success) {
      toast.error(
        response.data.message || "Failed to check application progress.",
        {
          position: "bottom-right",
        }
      );
      return null;
    }

    return response.data.data;
  } catch (error) {
    console.log("APPLICATION PROGRESS CHECK ERROR :", error);
    toast.error(
      error.response?.data?.message ||
        "Something went wrong while checking application progress.",
      {
        position: "bottom-right",
      }
    );
    return null;
  }
};

