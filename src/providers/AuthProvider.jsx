"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "@/modules/auth/services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      const data = await authService.me();
      setUser(data?.user || data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refresh: loadUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);