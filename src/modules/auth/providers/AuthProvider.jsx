"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/authService";
import toast from "react-hot-toast";
import { getCookie, removeCookie } from "@/lib/utils";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const token = getCookie("token");

    if (!token) {
      setLoading(false);
      return; // টোকেন না থাকলে সার্ভারে যাওয়ার দরকার নেই
    }

    const fetchUser = async () => {
      try {
        const res = await authService.getMe();
        // Laravel Resource অনুযায়ী res.data.user অথবা res.user চেক করুন
        setUser(res?.data?.user || res?.user);
      } catch (err) {
        // console.error("Auth initialization failed:", err);
        removeCookie("token"); // ভুল বা এক্সপায়ার টোকেন থাকলে ডিলিট করে দিন
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const register = async (data) => {
    const res = await authService.register(data);
    // আপনার API Trait অনুযায়ী res.data.user অথবা res.user হতে পারে
    setUser(res?.data?.user || res?.user);
    setLoading(false);
    return res; // যেন পেজ থেকে মেসেজ রিড করা যায়
  };

  const login = async (data) => {
  // সার্ভিস কল করুন
    const res = await authService.login(data);
    
    // Laravel ApiResponse অনুযায়ী ডাটা সেট করা
    // res.data.user কারণ আপনার ট্রেইট ডাটাকে 'data' কি-তে রাখে
    setUser(res?.data?.user || res?.user);
    setLoading(false);
    
    return res; // ✅ এটি অবশ্যই থাকতে হবে
  };

  // const logout = async () => {
  //   await authService.logout();
  //   setUser(null);
  // };

  const logout = async () => {
    setLoading(true);
    try {
      await authService.logout();
      setUser(null); // গ্লোবাল ইউজার স্টেট ক্লিয়ার
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user,setUser, loading, setLoading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);