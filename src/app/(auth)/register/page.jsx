"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { API } from "@/services/api";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/register", form);

      alert("Registration successful");
      window.location.href = "/login";
    } catch (err) {
      alert(err.message || "Something went wrong");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

      {/* Logo */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Logo"
          width={40}
          height={40}
          className="mx-auto"
        />

        <h2 className="mt-10 text-center text-2xl font-bold text-white">
          Create your account
        </h2>
      </div>

      {/* Form */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              autoComplete="new-password"
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-500 py-2 text-white font-semibold hover:bg-indigo-400 transition"
          >
            Register
          </button>
        </form>

        {/* Login link */}
        <p className="mt-10 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-400 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}