"use client";
import { useState } from "react";
import { DataTable } from "../Datatable";
import New from "./New";
import { columns } from "./Members/Column";

const Team = () => {
  const [members, setMembers] = useState<any>([
    {
      name: "John Doe",
      email: "john.doe@gmail.com",
      role: "admin",
      status: "active",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      role: "manager",
      status: "active",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jack Doe",
      email: "jack.doe@gmail.com",
      role: "member",
      status: "active",
      image: "https://via.placeholder.com/150",
    },
  ]);
  return (
    <div className="grid gap-6 border rounded-lg shadow px-5 py-4 w-full max-w-[800px]">
      <header className="flex items-start justify-between">
        <div className="grid gap-1">
          <h1 className="text-2xl">Team</h1>
          <p className="text-sm text-gray-500">Manage your team members</p>
        </div>
        <New />
      </header>
      <main>
        <DataTable columns={columns} data={members}></DataTable>
      </main>
    </div>
  );
};

export default Team;
