"use client";

import { useAuth } from "@/modules/auth/providers/AuthProvider";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-gray-800 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">
          Welcome, {user?.name || "User"}
        </h1>
      </div>
    </header>
  );
}