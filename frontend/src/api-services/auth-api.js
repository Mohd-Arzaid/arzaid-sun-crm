import { useAuthStore } from "@/store/auth-store";
import axios from "axios";
import { toast } from "sonner";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const setUserPassword = async (email, password, adminSecretKey) => {
  const setLoading = useAuthStore.getState().setLoading;
  setLoading(true);
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/create-password`,
      { email, password },
      {
        headers: {
          "admin-secret-key": adminSecretKey,
        },
      }
    );
    console.log("SET USER PASSWORD RESPONSE : ", response);
    if (!response.data.success) {
      toast.error(response.data.message, { position: "bottom-right" });
      return;
    }
    toast.success(response.data.message, { position: "bottom-right" });
  } catch (error) {
    console.log("SET USER PASSWORD ERROR : ", error);
    toast.error(error.response?.data?.message || "Something went wrong", {
      position: "bottom-right",
    });
  } finally {
    setLoading(false);
  }
};

export const login = async (email, password, navigate) => {
  const setLoading = useAuthStore.getState().setLoading;
  const setToken = useAuthStore.getState().setToken;
  setLoading(true);
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      { email, password },
      {}
    );
    // console.log("LOGIN RESPONSE : ",response);
    if (!response.data.success) {
      toast.error(response.data.message, { position: "bottom-right" });
      return;
    }
    toast.success(response.data.message, { position: "bottom-right" });
    setToken(response.data.token);
    navigate("/dashboard");
  } catch (error) {
    // console.log("LOGIN ERROR : ",error);
    toast.error(error.response?.data?.message || "Failed to Login", {
      position: "bottom-right",
    });
  } finally {
    setLoading(false);
  }
};

export const logout = (navigate) => {
  const setToken = useAuthStore.getState().setToken;
  setToken(null);
  navigate("/");
  toast.success("Logged out successfully", { position: "bottom-right" });
};
