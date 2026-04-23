import { useEffect, useState } from "react";
import { userService } from "../services/userService";

export function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then(setUsers);
  }, []);

  return { users };
} 