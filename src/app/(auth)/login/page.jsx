// client/src/app/(auth)/login/page.jsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";
import toast from "react-hot-toast";

export default function Page() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await authService.login(form);

      // ✅ store success event
      sessionStorage.setItem(
        "login-success",
        JSON.stringify({
          name: res.user.name,
        }),
      );

      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Invalid credentials");
      toast.error(err.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Logo"
          width={40}
          height={40}
          className="mx-auto h-10 w-auto"
        />

        <h2 className="mt-10 text-center text-2xl font-bold text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <div>
            <label className="block text-sm font-medium text-gray-100">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-100">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-indigo-500 py-2 text-white"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Not a member?{" "}
          <Link href="/register" className="text-indigo-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
