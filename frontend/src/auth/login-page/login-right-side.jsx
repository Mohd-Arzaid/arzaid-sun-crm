import { ArrowRight, EyeOff, Lock, Mail } from "lucide-react";

const inputField =
  "h-9 w-full rounded-lg border px-3 py-1 text-sm shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

const LoginRightSide = () => {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center p-8">
      <div className="items-start px-8 w-full py-24">
        <div className="flex flex-col max-w-lg">
          <div className="text-4xl font-semibold text-neutral-900">Log in</div>
          <p className="text-neutral-500 pt-2 pb-4">
            Enter your email and password to continue.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3"
          >
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
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  id="email"
                  className={`${inputField} pl-9`}
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
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className={`${inputField} pl-9 pr-9`}
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 rounded p-0.5 pointer-events-none"
                  aria-hidden
                >
                  <EyeOff className="size-4" />
                </span>
              </div>
            </div>

            <button
              className="flex items-center justify-center rounded-lg text-sm font-medium w-full h-10 mt-7 bg-neutral-900 text-neutral-50 border border-neutral-800 shadow-sm hover:bg-neutral-800 transition-colors"
              type="submit"
            >
              Log in
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRightSide;
