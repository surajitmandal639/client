"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authService } from "@/modules/auth/services/authService";
import { useAuth } from "@/modules/auth/providers/AuthProvider";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await login(form);
      
      if (res.status === "success") {
        sessionStorage.setItem("login-success", JSON.stringify(res?.data?.user?.name)); // sessionStorage তে ইউজার ডেটা রাখা হচ্ছে
        toast.success(res.message || "Login Successful!");

        router.push("/dashboard");
      }
      
    } catch (err) {
      const msg = err?.message || "Login failed";
      setError(msg);
      toast.error(msg);
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email address"
        className="w-full rounded-md border px-3 py-2"
        required
      />

      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full rounded-md border px-3 py-2"
        required
      />

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-indigo-600 py-2 text-white disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}