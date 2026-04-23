"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Home() {
  useEffect(() => {
    const isLogout = sessionStorage.getItem("logout-success");

    if (isLogout) {
      toast.success("Logout successful 👋");
      sessionStorage.removeItem("logout-success");
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 gap-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Faster with Your Starter Kit 🚀
          </h1>

          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Pre-built auth, API handling, and scalable structure.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Link
              href="/dashboard"
              className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black"
            >
              Get Started
            </Link>
            <Link href="/login" className="px-6 py-3 rounded-xl border">
              Login
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Image
            src="/hero.svg"
            alt="Hero"
            width={500}
            height={300}
            className="h-auto"
            priority
          />
        </motion.div>
      </main>

      {/* Features */}
      <section className="py-16 px-6 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl border dark:border-zinc-800">
            <h3 className="text-lg font-semibold">Auth Ready</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Secure cookie-based authentication system.
            </p>
          </div>

          <div className="p-6 rounded-2xl border dark:border-zinc-800">
            <h3 className="text-lg font-semibold">API Layer</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Central API handler with 401 handling.
            </p>
          </div>

          <div className="p-6 rounded-2xl border dark:border-zinc-800">
            <h3 className="text-lg font-semibold">Reusable</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Plug & play structure for all projects.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-zinc-500 border-t dark:border-zinc-800">
        © {new Date().getFullYear()} StarterKit
      </footer>
    </div>
  );
}
