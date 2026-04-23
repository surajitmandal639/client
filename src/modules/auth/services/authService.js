import { API } from "@/services/api";

export const authService = {
  login: (data) => API.post("/login", data),
  logout: () => API.post("/logout"),
  me: () => API.get("/me"),
};