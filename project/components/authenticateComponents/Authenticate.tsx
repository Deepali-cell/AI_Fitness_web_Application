"use client";
import { LoginForm } from "@/components/authenticateComponents/LoginForm";
import { SignupForm } from "@/components/authenticateComponents/RegisterForm";
import { useState } from "react";

export default function Authenticate() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-24 md:pt-32 backdrop-blur-xl bg-black/40">
      <div className="bg-white/10 shadow-2xl rounded-[2.5rem] p-8 md:p-12 w-[90%] max-w-xs md:max-w-md lg:max-w-[480px] border border-white/20 transition-all duration-500">
        {/* Modern Header */}
        <div className="text-center mb-10">
          <h2 className="text-xs uppercase tracking-[0.4em] text-blue-400 font-semibold mb-2">
            {isLogin ? "Authentication" : "Registration"}
          </h2>
          <div className="h-[2px] w-12 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-white text-2xl md:text-3xl font-light tracking-tight">
            {isLogin ? "Access your account" : "Join the community"}
          </p>
        </div>

        {/* Minimal Toggle */}
        <div className="flex mb-8 bg-black/20 rounded-2xl p-1.5 border border-white/5">
          <button
            className={`flex-1 py-3 text-xs font-medium rounded-xl transition-all ${
              isLogin ? "bg-white text-black" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </button>
          <button
            className={`flex-1 py-3 text-xs font-medium rounded-xl transition-all ${
              !isLogin
                ? "bg-white text-black"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setIsLogin(false)}
          >
            SIGNUP
          </button>
        </div>

        {/* Conditional Rendering of Components */}
        {isLogin ? <LoginForm /> : <SignupForm setIsLogin={setIsLogin} />}
      </div>
    </div>
  );
}
