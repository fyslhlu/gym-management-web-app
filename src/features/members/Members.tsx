import type React from "react";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  type ColDef,
} from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([AllCommunityModule]);

type Member = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  plan: string;
  status: string;
  joinDate: string;
};

const Members = () => {
  const rowData: Member[] = [
    {
      id: 1,
      fullName: "Ali Ahmad",
      email: "ali@gym.com",
      phone: "71 111 222",
      plan: "Monthly Plan",
      status: "Active",
      joinDate: "2026-05-01",
    },
    {
      id: 2,
      fullName: "Sara Khaled",
      email: "sara@gym.com",
      phone: "70 333 444",
      plan: "Yearly Plan",
      status: "Active",
      joinDate: "2026-04-15",
    },
    {
      id: 3,
      fullName: "Omar Hassan",
      email: "omar@gym.com",
      phone: "76 555 666",
      plan: "Student Plan",
      status: "Expired",
      joinDate: "2026-03-20",
    },
    {
      id: 4,
      fullName: "Maya Saad",
      email: "maya@gym.com",
      phone: "03 777 888",
      plan: "3 Months Plan",
      status: "Active",
      joinDate: "2026-05-10",
    },
  ];

  const columnDefs: ColDef<Member>[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "fullName", headerName: "Full Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "plan", headerName: "Plan", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "joinDate", headerName: "Join Date", flex: 1 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-black text-white">Members</h1>

      <p className="mt-2 text-[#A3A3A3]">
        Manage gym members using AG Grid with sorting, filtering, and resizing.
      </p>

      <div className="mt-8 rounded-3xl border border-white/10 bg-[#1C1C1C] p-6 shadow-xl">
        <div
          className="ag-theme-quartz-dark"
          style={
            {
              height: "420px",
              width: "100%",
              "--ag-background-color": "#1C1C1C",
              "--ag-header-background-color": "#0B0B0B",
              "--ag-foreground-color": "#FFFFFF",
              "--ag-header-foreground-color": "#FFFFFF",
              "--ag-border-color": "rgba(255,255,255,0.12)",
              "--ag-row-hover-color": "rgba(229,9,20,0.12)",
              "--ag-selected-row-background-color": "rgba(229,9,20,0.2)",
              "--ag-odd-row-background-color": "#181818",
              "--ag-row-border-color": "rgba(255,255,255,0.08)",
              "--ag-input-background-color": "#111111",
              "--ag-input-border-color": "rgba(255,255,255,0.15)",
              "--ag-secondary-foreground-color": "#A3A3A3",
              "--ag-accent-color": "#E50914",
            } as React.CSSProperties
          }
        >
          <AgGridReact<Member>
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={5}
            defaultColDef={{
              sortable: true,
              filter: true,
              resizable: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Members;