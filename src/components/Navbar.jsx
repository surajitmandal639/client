"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hasToken = document.cookie.includes("token=");
    setToken(hasToken);
  }, []);

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800">
      <h1 className="text-xl font-bold">StarterKit</h1>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />

        {!token ? (
          <Link href="/login" className="text-sm hover:underline">
            Login
          </Link>
        ) : (
          <>
            <Link href="/dashboard" className="text-sm hover:underline">
              Dashboard
            </Link>
            <Link href="/logout" className="text-sm text-red-500">
              Logout
            </Link>
          </>
        )}
      </div>
    </header>
  );
}