import { useState } from "react"
import { Button } from "./ui/button"

type AuthMode = "login" | "signup"

const AuthForm = () => {
  const [mode, setMode] = useState<AuthMode>("login")

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12"
    >

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl px-8 py-10 shadow-sm">

        {/* Heading */}
        <h1
          style={{ fontFamily: "'DM Serif Display', serif" }}
          className="text-2xl font-normal text-gray-900 mb-1 leading-tight"
        >
          {mode === "login" ? "Login" : "Create account"}
        </h1>
        <p className="text-sm text-gray-500 font-light mb-7">
          {mode === "login"
            ? "Sign in to your account to continue"
            : "Join us today — it only takes a minute"}
        </p>

        {/* Tab switcher */}
        <div className="grid grid-cols-2 bg-gray-100 rounded-lg p-0.75 mb-7">
          {(["login", "signup"] as AuthMode[]).map((tab) => (
            <Button
              key={tab}
              onClick={() => setMode(tab)}
              className={`py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                mode === tab
                  ? "bg-cyan-700 hover:bg-cyan-500 text-white border border-gray-200 shadow-none"
                  : "text-white hover:text-white"
              }`}
            >
              {tab === "login" ? "Login" : "Sign up"}
            </Button>
          ))}
        </div>

        {/* Name fields (signup only) */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: mode === "signup" ? "96px" : "0", opacity: mode === "signup" ? 1 : 0 }}
        >
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                First name
              </label>
              <input
                type="text"
                placeholder="Jane"
                className="w-full h-11 px-3.5 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-gray-400 focus:ring-2 focus:ring-black/5 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                Last name
              </label>
              <input
                type="text"
                placeholder="Smith"
                className="w-full h-11 px-3.5 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-gray-400 focus:ring-2 focus:ring-black/5 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full h-11 px-3.5 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-gray-400 focus:ring-2 focus:ring-black/5 transition-colors"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full h-11 px-3.5 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-gray-400 focus:ring-2 focus:ring-black/5 transition-colors"
          />
        </div>

        {/* Confirm password (signup only) */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: mode === "signup" ? "80px" : "0", opacity: mode === "signup" ? 1 : 0 }}
        >
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
              Confirm password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-11 px-3.5 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-gray-400 focus:ring-2 focus:ring-black/5 transition-colors"
            />
          </div>
        </div>

        {/* Forgot password (login only) */}
        {mode === "login" && (
          <div className="flex justify-end mb-4 -mt-1">
            <a href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
              Forgot password?
            </a>
          </div>
        )}

        {/* Submit */}
        <Button className="w-full h-11.5 bg-cyan-700 hover:bg-cyan-500 text-[#f0eeff] text-sm font-medium rounded-lg hover:opacity-85 active:scale-[0.99] transition-all mt-1">
          {mode === "login" ? "Sign in" : "Create account"}
        </Button>

        {/* Switch mode */}
        <p className="text-center text-xs text-gray-400 mt-5">
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <a
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-gray-800 font-medium cursor-pointer hover:underline"
          >
            {mode === "login" ? "Sign up" : "Sign in"}
          </a>
        </p>

        {/* Terms (signup only) */}
        {mode === "signup" && (
          <p className="text-center text-[11px] text-gray-400 mt-3 leading-relaxed">
            By signing up you agree to our{" "}
            <a href="#" className="text-gray-500 hover:underline">Terms</a> and{" "}
            <a href="#" className="text-gray-500 hover:underline">Privacy Policy</a>
          </p>
        )}
      </div>
    </div>
  )
}

export default AuthForm