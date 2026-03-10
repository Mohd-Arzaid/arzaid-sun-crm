import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";
import Login from "./auth/login-page/login";
import Dashboard from "./dashboard/dashboard";
import DashboardLayout from "./dashboard/dashboard-layout";
import OpenRoute from "./auth-routes/open-route";
import PrivateRoute from "./auth-routes/private-route";
import ApplicationFormPage from "./dashboard/upload-documents/application-form/application-form-page";
import UploadDocuments from "./dashboard/upload-documents/upload-documents";

const App = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route
        path="/"
        element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        }
      />

      <Route
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/application-form" element={<ApplicationFormPage />} />
        <Route path="/upload-documents" element={<UploadDocuments />} />
      </Route>
    </Routes>
  );
};

export default App;
