// src/app/dashboard/layout.jsx

"use client";

import { useAuth } from "@/modules/auth/providers/AuthProvider";
import Navbar from "@/modules/dashboard/components/Navbar";
import Header from "@/modules/dashboard/components/Header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  // ✅ ONLY first time loader
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Checking session...
      </div>
    );
  }

  // ✅ don't block UI again
  if (!user) return null;

  return (
    <div className="min-h-full bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar />
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}