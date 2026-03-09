import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
