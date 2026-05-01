"use client";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/modules/auth/providers/AuthProvider";

export default function AppProviders({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <AuthProvider>
      <Toaster position="top-right" />
      {children}
    </AuthProvider>
    </ThemeProvider>
  );
}
