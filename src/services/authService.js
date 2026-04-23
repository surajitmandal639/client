import { API } from "./api";

export const authService = {
  async login(credentials) {
    return await API.post("/login", credentials);
  },

  async logout() {
    return await API.post("/logout");
  },

  async getMe() {
    return await API.get("/me");
  },
};