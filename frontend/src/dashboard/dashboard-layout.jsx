import React from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-60 flex-1 overflow-y-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
