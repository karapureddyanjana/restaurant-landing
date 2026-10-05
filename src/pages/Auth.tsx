import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../data/menu";

export default function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signup" | "login">("login");
  const [remember, setRemember] = useState(false);
  const isSignup = mode === "signup";
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="mx-auto w-full max-w-md px-6 py-14">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-brand font-display text-sm font-bold text-white">
          D
        </span>
        <h1 className="font-alt mt-6 text-[40px] md:text-[50px] leading-tight font-bold">
          {isSignup ? "Sign up" : "Log in"}
        </h1>
        <p className="mt-2 text-[13px] text-espresso/60">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button onClick={() => setMode("login")} className="font-medium text-sky">
                Log in
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button onClick={() => setMode("signup")} className="font-medium text-sky">
                Sign up
              </button>
            </>
          )}
        </p>
        <div className="mt-8 space-y-4">
          {isSignup && (
            <input
              placeholder="Full name"
              className="w-full rounded-2xl bg-[#faf8f6] px-5 py-4 text-sm outline-none placeholder:text-espresso/40"
            />
          )}
          <input
            placeholder="Email address"
            className="w-full rounded-2xl bg-[#faf8f6] px-5 py-4 text-sm outline-none placeholder:text-espresso/40"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl bg-[#faf8f6] px-5 py-4 text-sm outline-none placeholder:text-espresso/40"
          />
        </div>
        <div className="mt-4 flex items-center justify-between text-[13px]">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 accent-espresso"
            />
            Remember me
          </label>
          <span className="cursor-pointer">Forget Password?</span>
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full rounded-2xl bg-brand py-4 text-sm font-medium text-white hover:bg-brand-dark"
        >
          {isSignup ? "Sign up" : "Log in"}
        </button>
        <button
          onClick={() => navigate("/")}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-black/15 py-3.5 text-sm font-medium"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
            />
          </svg>
          {isSignup ? "Sign up with google" : "Log in with google"}
        </button>
      </div>
      <div className="relative hidden overflow-hidden lg:block">
        <div className="absolute inset-y-0 -left-24 w-[130%] rounded-l-full bg-brand" />
        <img
          src={IMAGES.authPasta}
          alt="Pasta"
          className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[24px] border-white object-cover shadow-2xl"
        />
        <img src={IMAGES.mintLeaf} alt="" className="absolute left-[12%] top-[8%] w-20" />
        <img src={IMAGES.mintLeaf} alt="" className="absolute bottom-[10%] right-[8%] w-16" />
        <img src={IMAGES.mintLeaf} alt="" className="absolute bottom-[28%] left-[38%] w-12" />
      </div>
    </div>
  );
}
