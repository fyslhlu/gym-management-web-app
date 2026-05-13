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
      <h1 className="text-3xl font-bold text-slate-900">Members</h1>

      <p className="mt-2 text-slate-500">
        Manage gym members using AG Grid with sorting, filtering, and resizing.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow">
        <div
          className="ag-theme-quartz"
          style={{ height: "420px", width: "100%" }}
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