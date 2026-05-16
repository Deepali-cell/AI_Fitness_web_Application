"use client";
import { useSignup } from "@/hooks/auth.hook";
import { FormEventType, HandleChangeType } from "@/types/field.type";
import { useState } from "react";

export const SignupForm = ({
  setIsLogin,
}: {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });
  const { mutate, isPending } = useSignup();

  const handleInputChange = (e: HandleChangeType) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const register = (e: FormEventType) => {
    e.preventDefault();

    mutate(formData, {
      onSuccess: (data) => {
        if (data.success) {
          setIsLogin(true);
        }
      },

      onError: (error) => {
        console.log(error);
      },

      onSettled: () => {
        setformData({
          name: "",
          email: "",
          password: "",
          contact: "",
        });
      },
    });
  };
  return (
    <form className="space-y-4" onSubmit={register}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-3 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          className="w-full p-3 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full p-3 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className="w-full p-3 text-xs bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-500 transition-all font-bold text-xs tracking-widest shadow-lg shadow-blue-500/20 mt-4"
        disabled={isPending}
      >
        {isPending ? "Created...." : " CREATE ACCOUNT"}
      </button>
    </form>
  );
};
