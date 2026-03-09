import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";
import Login from "./auth/login-page/login";

const App = () => {
  return (
    <Routes>
       <Route path="/admin" element={<Admin />} />
       <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
