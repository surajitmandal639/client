"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { useAuth } from "@/modules/auth/providers/AuthProvider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const isLogout = sessionStorage.getItem("logout-success");

    if (isLogout) {
      toast.success("Logout successful 👋");
      sessionStorage.removeItem("logout-success");
      router.push("/");
    }
  }, [router]);

  if (loading) return null;

  // const handleLogout = async () => {
  //   await logout();
  //   // sessionStorage.setItem("logout-success", "1");
  //   toast.success("Logout successful 👋");
  //   sessionStorage.removeItem("logout-success");
  //   router.push("/");
  // };

  const handleLogout = async () => {
    await logout();
    router.push("/"); // লগআউট শেষে লগইন পেজে পাঠান
  };

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800">
      <h1 className="text-xl font-bold">StarterKit</h1>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />

        {!user ? (
          <Link href="/login" className="text-sm hover:underline">
            Login
          </Link>
        ) : (
          <>
            <Link href="/dashboard" className="text-sm hover:underline">
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="text-sm text-red-500"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}