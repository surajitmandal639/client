// src/modules/users/services/userService.js
import { API } from "@/services/api";

export const userService = {
  // 📋 Get all users
  async getUsers(params = {}) {
    const res = await API.get("/users", { params });
    return res.data;
  },

  // 👤 Get single user
  async getUser(id) {
    const res = await API.get(`/users/${id}`);
    return res.data;
  },

  // ➕ Create user
  async createUser(data) {
    const res = await API.post("/users", data);
    return res.data;
  },

  // ✏️ Update user
  async updateUser(id, data) {
    const res = await API.put(`/users/${id}`, data);
    return res.data;
  },

  // 🗑️ Delete user
  async deleteUser(id) {
    const res = await API.delete(`/users/${id}`);
    return res.data;
  },

  // 🔐 Assign role
  async assignRole(id, role) {
    const res = await API.post(`/users/${id}/roles`, { role });
    return res.data;
  },

  // ❌ Remove role
  async removeRole(id, role) {
    const res = await API.delete(`/users/${id}/roles`, {
      data: { role },
    });
    return res.data;
  },

  // 🔑 Assign permission
  async assignPermission(id, permission) {
    const res = await API.post(`/users/${id}/permissions`, { permission });
    return res.data;
  },
};