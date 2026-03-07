import { setUserPassword } from "@/api-services/auth-api";
import { useAuthStore } from "@/store/auth-store";
import { ArrowRight, Eye, EyeOff, KeyRound } from "lucide-react";
import React, { useState } from "react";

const inputField =
  "h-9 w-full rounded-lg border px-3 py-1 text-sm shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

const Admin = () => {
  const [showAdminSecret, setShowAdminSecret] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const loading = useAuthStore((state) => state.loading);

  const [formData, setFormData] = useState({
    adminSecretKey: "",
    userEmail: "",
    newPassword: "",
  });

  const { adminSecretKey, userEmail, newPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    console.log("FORM DATA : ", formData);
    await setUserPassword(userEmail, newPassword, adminSecretKey);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="w-full max-w-lg">
        <form className="flex flex-col" onSubmit={handleAdminSubmit}>
          <div className="text-4xl text-center font-semibold text-neutral-900">
            Admin
          </div>
          <p className="text-neutral-500 text-center pt-2 pb-4">
            Create or update a user&apos;s password by email.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label
                htmlFor="admin-secret-key"
                className="text-base text-neutral-900 py-2"
              >
                Admin secret Key
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-4 pointer-events-none" />
                <input
                  disabled={loading}
                  type={showAdminSecret ? "text" : "password"}
                  id="admin-secret-key"
                  name="adminSecretKey"
                  value={adminSecretKey}
                  onChange={handleOnChange}
                  placeholder="••••••••"
                  required
                  className={`${inputField} pl-9 pr-9 disabled:cursor-not-allowed disabled:opacity-60`}
                />
                <button
                  type="button"
                  onClick={() => setShowAdminSecret((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded p-0.5"
                  aria-label={
                    showAdminSecret
                      ? "Hide admin secret key"
                      : "Show admin secret key"
                  }
                  tabIndex={0}
                >
                  {showAdminSecret ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeOff className="size-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="user-email"
                className="text-base text-neutral-900 py-2"
              >
                User email address
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-4 pointer-events-none" />
                <input
                  disabled={loading}
                  type="email"
                  id="user-email"
                  name="userEmail"
                  value={userEmail}
                  onChange={handleOnChange}
                  placeholder="user@company.com"
                  required
                  className={`${inputField} pl-9 disabled:cursor-not-allowed disabled:opacity-60`}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="new-password"
                className="text-base text-neutral-900 py-2"
              >
                New password
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-4 pointer-events-none" />
                <input
                  disabled={loading}
                  type={showNewPassword ? "text" : "password"}
                  id="new-password"
                  name="newPassword"
                  value={newPassword}
                  onChange={handleOnChange}
                  placeholder="••••••••"
                  required
                  className={`${inputField} pl-9 pr-9 disabled:cursor-not-allowed disabled:opacity-60`}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded p-0.5"
                  aria-label={
                    showNewPassword ? "Hide new password" : "Show new password"
                  }
                  tabIndex={0}
                >
                  {showNewPassword ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeOff className="size-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="flex items-center justify-center rounded-lg text-sm font-medium w-full h-10 mt-7 bg-neutral-900 text-neutral-50 border border-neutral-800 shadow-sm hover:bg-neutral-800 transition-colors disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed"
            >
              Create / Update password
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
