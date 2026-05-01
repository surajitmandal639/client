"use client";
import { useAuth } from "@/modules/auth/providers/AuthProvider";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const { logout, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login"); // লগআউট শেষে লগইন পেজে পাঠান
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:opacity-50"
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}
