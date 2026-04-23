import { api } from "@/services/api";

export const userService = {
  getAll: () => api.get("/users"),
  getOne: (id) => api.get(`/users/${id}`),
  create: (data) => api.post("/users", data),
  update: (id, data) => api.put(`/users/${id}`, data),
  delete: (id) => api.delete(`/users/${id}`),

  assignRole: (id, role) =>
    api.post(`/users/${id}/roles`, { role }),

  removeRole: (id, role) =>
    api.delete(`/users/${id}/roles`, { role }),

  assignPermission: (id, permission) =>
    api.post(`/users/${id}/permissions`, { permission }),
};