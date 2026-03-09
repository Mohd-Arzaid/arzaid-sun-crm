import { login } from "@/api-services/auth-api";
import { useAuthStore } from "@/store/auth-store";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const inputField =
  "h-9 w-full rounded-lg border px-3 py-1 text-sm shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

  const LoginRightSide = () => {
    const loading = useAuthStore((state) => state.loading);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const { email, password } = formData;
  
    const handleOnChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
      await login(email, password, navigate);
    };
  
    return (
      <div className="w-1/2 flex flex-col items-center justify-center p-8">
        <div className="items-start px-8 w-full py-24">
          <div className="flex flex-col max-w-lg">
            <div className="text-4xl font-semibold text-neutral-900">Log in</div>
            <p className="text-neutral-500 pt-2 pb-4">
              Enter your email and password to continue.
            </p>
  
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-base text-neutral-900 py-2"
                >
                  Your email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-4 pointer-events-none" />
                  <input
                    disabled={loading}
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="name@company.com"
                    id="email"
                    className={`${inputField} pl-9 disabled:cursor-not-allowed`}
                  />
                </div>
              </div>
  
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-base text-neutral-900 py-2"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-4 pointer-events-none" />
                  <input
                    disabled={loading}
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    id="password"
                    placeholder="••••••••"
                    className={`${inputField} pl-9 pr-9 disabled:cursor-not-allowed`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded p-0.5"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    tabIndex={0}
                  >
                    {showPassword ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeOff className="size-4" />
                    )}
                  </button>
                </div>
              </div>
  
              <button
                disabled={loading}
                className="flex items-center justify-center rounded-lg text-sm font-medium w-full h-10 mt-7 bg-neutral-900 text-neutral-50 border border-neutral-800 shadow-sm hover:bg-neutral-800 transition-colors disabled:opacity-60 disabled:pointer-events-none"
                type="submit"
              >
                {loading ? (
                  <>
                    Loading...
                  </>
                ) : (
                  <>
                    Log in
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  

export default LoginRightSide;
