import { getCookie } from "@/lib/utils";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api/v1";

  console.log(process.env.NEXT_PUBLIC_API_URL);
  

// 🔐 get token from storage
const getToken = () => {
  // সার্ভার সাইড রেন্ডারিং (SSR) এর সময় কুকি চেক করা
  if (typeof window === "undefined") return null;
  
  // ✅ localStorage এর বদলে Cookies থেকে টোকেন নিন
  return getCookie("token"); 
};

const request = async (url, options = {}) => {
  const token = getToken();
console.log("Token in API request:", token);
  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    // credentials: "include", // Send cookies with cross-origin requests
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",

      // 🔥 Bearer Token added here
      ...(token ? { Authorization: `Bearer ${token}` } : {}),

      ...(options.headers || {}),
    },
  });

  const data = await res.json().catch(() => ({}));

  // ❌ error handling
  if (!res.ok) {
    throw new Error(data?.message || "Error");
  }

  return data;
};

// 🔥 API wrapper
export const API = {
  get: (url) => request(url),
  post: (url, body) =>
    request(url, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  put: (url, body) =>
    request(url, {
      method: "PUT",
      body: JSON.stringify(body),
    }),
  delete: (url) =>
    request(url, {
      method: "DELETE",
    }),
};