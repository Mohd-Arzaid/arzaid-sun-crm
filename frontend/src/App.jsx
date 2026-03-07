import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";

const App = () => {
  return (
    <Routes>
       <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default App;
