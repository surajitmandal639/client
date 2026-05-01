// src/app/dashboard/page.jsx

"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Page() {
  useEffect(() => {
    const name = sessionStorage.getItem("login-success");

    if (name) {
      toast.success(`Welcome ${name} 👋`);
      sessionStorage.removeItem("login-success");
    }
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-black dark:text-white">
        Dashboard
      </h1>

      <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow border dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-300">
          Welcome to your dashboard 🚀
        </p>
      </div>
    </div>
  );
}
