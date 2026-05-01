"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";
import toast from "react-hot-toast";

export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  // 🔐 get logged user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await authService.getMe();
        setUser(res.user);
      } catch (err) {
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // 🎉 login success toast
  useEffect(() => {
    const data = sessionStorage.getItem("login-success");

    if (data) {
      const user = JSON.parse(data);

      toast.success(`Welcome ${user.name} 👋`);

      sessionStorage.removeItem("login-success");
    }
  }, []);

  // 🚪 logout
  const handleLogout = async () => {
    setLoggingOut(true);

    try {
      await authService.logout();

      sessionStorage.setItem("logout-success", "1");

      setUser(null);

      router.push("/");
    } catch (err) {
      toast.error("Logout failed ❌");
    } finally {
      setLoggingOut(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="bg-red-500 px-4 py-2 rounded-md text-sm disabled:opacity-50"
          >
            {loggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>

        {/* User Card */}
        <div className="bg-white/5 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">User Info</h2>

          <p>
            <span className="text-gray-400">Name:</span> {user?.name}
          </p>
          <p>
            <span className="text-gray-400">Email:</span> {user?.email}
          </p>
        </div>

      </div>
    </div>
  );
}