// src/modules/dashboard/components/Navbar.jsx


"use client";

import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/modules/auth/providers/AuthProvider";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const menuRef = useRef(null);

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // const handleLogout = async () => {
  //   try {
  //     setLoggingOut(true);

  //     await logout();

  //     toast.success("Logout successful 👋");

  //     router.push("/login");
  //   } catch (err) {
  //     toast.error("Logout failed");
  //   } finally {
  //     setLoggingOut(false);
  //   }
  // };

  const handleLogout = async () => {
    await logout();
    router.push("/login"); // লগআউট শেষে লগইন পেজে পাঠান
  };

  return (
    <nav className="bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center">
            <Image
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="logo"
              width={40}
              height={40}
              className="w-8 h-8"
            />

            <div className="hidden md:flex ml-10 space-x-4">
              <Link href="/dashboard" className="px-3 py-2 rounded-md hover:bg-white/5">
                Dashboard
              </Link>

              <Link href="/users" className="px-3 py-2 text-gray-300 hover:bg-white/5 rounded-md">
                Users
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />

            <button className="text-gray-400 hover:text-white">🔔</button>

            {/* AUTH */}
            {!user ? (
              <Link href="/login" className="text-sm hover:underline">
                Login
              </Link>
            ) : (
              <div className="relative" ref={menuRef}>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  <Image
                    src="/avatar/photo-1472099645785-5658abf4ff4e.png"
                    alt="user"
                    width={40}
                    height={40}
                    className="w-8 h-8 rounded-full"
                  />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      disabled={loggingOut}
                      className="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700"
                    >
                      {loggingOut ? "Logging out..." : "Logout"}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-2 pb-3 space-y-1">
          <Link
            href="/dashboard"
            className="block px-3 py-2 bg-gray-950/50 rounded-md"
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}