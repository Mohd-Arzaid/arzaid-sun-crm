import React from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className=" ml-60 flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
