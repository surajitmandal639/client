// client/src/app/(auth)/login/page.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/modules/auth/components/LoginForm";
import { useAuth } from "@/modules/auth/providers/AuthProvider";

export default function Page() {
  const { user } = useAuth();
  console.log('User:', user);
  
  
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Logo"
          width={40}
          height={40}
          className="mx-auto h-10 w-auto"
        />

        <h2 className="mt-10 text-center text-2xl font-bold text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />

        <p className="mt-10 text-center text-sm text-gray-400">
          Not a member?{" "}
          <Link href="/register" className="text-indigo-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
