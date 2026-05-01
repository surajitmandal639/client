// src/app/dashboard/users/page.jsx

"use client";

import { useUsers } from "@/modules/users/hooks/useUsers";
import UserTable from "@/modules/users/components/UserTable";
import Navbar from "@/modules/dashboard/components/Navbar";

export default function Page() {
  const { users, loading } = useUsers();

  if (loading) return <p>Loading...</p>;

  return (
    <>
    <Navbar />
      <UserTable users={users} />
    </>
  );
}