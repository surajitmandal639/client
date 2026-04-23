"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration error bondho korar jonno
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="grid grid-cols-1 max-sm:hidden">
      <div className="relative z-0 inline-grid grid-cols-3 gap-0.5 rounded-full bg-gray-950/5 p-0.75 text-gray-950 dark:bg-white/10 dark:text-white">
        
        {/* System Theme */}
        <div className="relative rounded-full p-1.5 *:size-7 has-checked:bg-white has-checked:ring has-checked:inset-ring has-checked:ring-gray-950/10 has-checked:inset-ring-white/10 sm:p-0 dark:has-checked:bg-gray-600 dark:has-checked:text-white dark:has-checked:ring-transparent">
          <input
            type="radio"
            className="absolute inset-0 appearance-none cursor-pointer"
            name="theme-toggle"
            aria-label="System theme"
            checked={theme === "system"}
            onChange={() => setTheme("system")}
            value="system"
          />
          <svg viewBox="0 0 28 28" fill="none">
            <path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H8.5C7.94772 17.5 7.5 17.0523 7.5 16.5V8.5Z" stroke="currentColor"></path>
            <path d="M16.5 20.5V17.5H11.5V20.5M16.5 20.5H11.5M16.5 20.5H17.5M11.5 20.5H10.5" stroke="currentColor" strokeLinecap="round"></path>
          </svg>
        </div>

        {/* Light Theme */}
        <div className="relative rounded-full p-1.5 *:size-7 has-checked:bg-white has-checked:ring has-checked:inset-ring has-checked:ring-gray-950/10 has-checked:inset-ring-white/10 sm:p-0 dark:has-checked:bg-gray-600 dark:has-checked:text-white dark:has-checked:ring-transparent">
          <input
            type="radio"
            className="absolute inset-0 appearance-none cursor-pointer"
            name="theme-toggle"
            aria-label="Light theme"
            checked={theme === "light"}
            onChange={() => setTheme("light")}
            value="light"
          />
          <svg viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="3.5" stroke="currentColor"></circle>
            <path d="M14 8.5V6.5" stroke="currentColor" strokeLinecap="round"></path>
            <path d="M17.889 10.1115L19.3032 8.69727" stroke="currentColor" strokeLinecap="round"></path>
            <path d="M19.5 14L21.5 14" stroke="currentColor" strokeLinecap="round"></path>
            <path d="M17.889 17.8885L19.3032 19.3027" stroke="currentColor" strokeLinecap="round"></path>
            <path d="M14 21.5V19.5" stroke="currentColor" strokeLinecap="round"></path>
            <path d="M8.69663 19.3029L10.1108 17.8887" stroke="currentColor" strokeLinecap="round"></path>
            <path d="M6.5 14L8.5 14" stroke="currentColor" strokeLinecap="round"></path>
            <path d="M8.69663 8.69711L10.1108 10.1113" stroke="currentColor" strokeLinecap="round"></path>
          </svg>
        </div>

        {/* Dark Theme */}
        <div className="relative rounded-full p-1.5 *:size-7 has-checked:bg-white has-checked:ring has-checked:inset-ring has-checked:ring-gray-950/10 has-checked:inset-ring-white/10 sm:p-0 dark:has-checked:bg-gray-600 dark:has-checked:text-white dark:has-checked:ring-transparent">
          <input
            type="radio"
            className="absolute inset-0 appearance-none cursor-pointer"
            name="theme-toggle"
            aria-label="Dark theme"
            checked={theme === "dark"}
            onChange={() => setTheme("dark")}
            value="dark"
          />
          <svg viewBox="0 0 28 28" fill="none">
            <path d="M10.5 9.99914C10.5 14.1413 13.8579 17.4991 18 17.4991C19.0332 17.4991 20.0176 17.2902 20.9132 16.9123C19.7761 19.6075 17.109 21.4991 14 21.4991C9.85786 21.4991 6.5 18.1413 6.5 13.9991C6.5 10.8902 8.39167 8.22304 11.0868 7.08594C10.7089 7.98159 10.5 8.96597 10.5 9.99914Z" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M16.3561 6.50754L16.5 5.5L16.6439 6.50754C16.7068 6.94752 17.0525 7.29321 17.4925 7.35607L18.5 7.5L17.4925 7.64393C17.0525 7.70679 16.7068 8.05248 16.6439 8.49246L16.5 9.5L16.3561 8.49246C16.2932 8.05248 15.9475 7.70679 15.5075 7.64393L14.5 7.5L15.5075 7.35607C15.9475 7.29321 16.2932 6.94752 16.3561 6.50754Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>

      </div>
    </div>
  );
}
