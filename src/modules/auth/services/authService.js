// src/modules/auth/services/authService.js
import { removeCookie, setCookie } from "@/lib/utils";
import { API } from "@/services/api";

export const authService = {
  register: async (formData) => {
    const res = await API.post("/register", formData);
    setCookie("token", res?.data?.token, 7); // রেজিস্ট্রেশনের পরে টোকেন কুকিতে সেট করা হচ্ছে
    return res;
  },

  // login: async (formData) => {
  //   const res = await API.post("/login", formData);
  //   setCookie("token", res?.data?.token, 7); // লগইনের পরে টোকেন কুকিতে সেট করা হচ্ছে
  //   return res;
  // },

  login: async (formData) => {
    const res = await API.post("/login", formData);

    // টোকেন কুকিতে সেট করা
    if (res?.data?.token) {
      setCookie("token", res?.data?.token, 7); // 7 দিন পর্যন্ত টোকেন বৈধ থাকবে
    }

    return res; // ✅ এটি অবশ্যই থাকতে হবে
  },

  getMe: async () => {
    const res = await API.get("/me");
    return res; // Return the user object inside data
  },

  logout: async () => {
    try {
      // ১. সার্ভার সাইডে টোকেন ডিলিট করা (Sanctum)
      await API.post("/logout");
    } catch (err) {
      console.error("Server logout failed, clearing local session anyway.");
    } finally {
      // ২. ক্লায়েন্ট সাইড ক্লিন করা (সবসময় ঘটবে)
      removeCookie("token");
      sessionStorage.removeItem("login-success");
      sessionStorage.removeItem("register-success");
    }
  },
  // logout: async () => {
  //   await API.post("/logout").catch(() => { });
  //   removeCookie("token"); // কুকি থেকে টোকেন মুছে ফেলা হচ্ছে
  // },
};
