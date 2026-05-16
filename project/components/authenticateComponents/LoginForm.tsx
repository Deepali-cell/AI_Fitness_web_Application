"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hooks/auth.hook";
import { FormEventType } from "@/types/field.type";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { mutate, isPending } = useLogin();

  const handleSubmit = (e: FormEventType) => {
    e.preventDefault();

    setError("");

    mutate(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          router.push("/");
          router.refresh();
        },

        onError: (error) => {
          setError(error.message);
        },
      },
    );
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {error && <p className="text-red-500 text-[10px] px-1">{error}</p>}

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-3 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
      />

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-500 transition-all font-bold text-xs tracking-widest shadow-lg shadow-blue-500/20 mt-4 disabled:opacity-50"
      >
        {isPending ? "AUTHENTICATING..." : "CONTINUE"}
      </button>
    </form>
  );
};
