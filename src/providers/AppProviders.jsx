"use client";
import { AuthProvider } from "./AuthProvider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";

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
