
// src/services/api.js

const request = async (url, options = {}) => {
  const res = await fetch(`/proxy${url}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(options.headers || {}),
    },
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  // ❌ handle error
  if (!res.ok) {
    if (res.status === 401 && typeof window !== "undefined") {
      const path = window.location.pathname;

      // ❌ do nothing if already on "/"
      if (
        path !== "/" &&
        !path.startsWith("/login") &&
        !path.startsWith("/logout")
      ) {
        window.location.replace("/");
      }
    }

    throw new Error(data.message || "Error");
  }

  return data;
};

export const API = {
  get: (url) => request(url),
  post: (url, body) =>
    request(url, { method: "POST", body: JSON.stringify(body) }),
  put: (url, body) =>
    request(url, { method: "PUT", body: JSON.stringify(body) }),
  delete: (url) =>
    request(url, { method: "DELETE" }),
};