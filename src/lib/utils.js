// src/utils/cookieHelper.js

export const getCookie = (name) => {
  if (typeof document === "undefined") return null; // Server-side safety
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

export const setCookie = (name, value, days = 7) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  // Use SameSite=None; Secure for cross-origin requests
  document.cookie = `${name}=${value || ""}${expires}; path=/; SameSite=None; Secure;`;
};

export const removeCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
