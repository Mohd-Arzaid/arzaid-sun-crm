import { House, LogOut, MessageSquarePlus, Upload } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinkBase =
  "flex items-center gap-2 rounded-lg px-2 py-2 h-8 my-px transition-opacity hover:opacity-70";

const buttonBase =
  "flex h-8 items-center gap-2 px-3 transition-opacity hover:opacity-70";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-60 flex-col gap-3 overflow-y-auto overflow-x-hidden border-r border-white/10 bg-black text-white">
      <div className="grid gap-1 items-start px-3 py-5 text-sm font-medium">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${navLinkBase} ${isActive ? "bg-neutral-800" : ""}`
          }
        >
          <House className="h-4 w-4" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/upload-documents"
          className={({ isActive }) =>
            `${navLinkBase} ${isActive ? "bg-neutral-800" : ""}`
          }
        >
          <Upload className="h-4 w-4" />
          <span>Upload Documents</span>
        </NavLink>
        <NavLink
          to="/application-summary"
          className={({ isActive }) =>
            `${navLinkBase} ${isActive ? "bg-neutral-800" : ""}`
          }
        >
          <House className="h-4 w-4" />
          <span>Application Summary</span>
        </NavLink>
        <NavLink
          to="/raise-a-ticket"
          className={({ isActive }) =>
            `${navLinkBase} ${isActive ? "bg-neutral-800" : ""}`
          }
        >
          <MessageSquarePlus className="h-4 w-4" />
          <span>Raise a Ticket</span>
        </NavLink>
      </div>

      <div className="mt-auto grid items-start px-2 pb-5 text-sm font-medium">
        <button type="button" className={`${buttonBase} text-destructive`}>
          <LogOut className="h-4 w-4" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
