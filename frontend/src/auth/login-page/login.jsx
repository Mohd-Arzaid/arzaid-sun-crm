import React from "react";
import LoginLeftSide from "./login-left-side";
import LoginRightSide from "./login-right-side";

const Login = () => {
  return (
    <div className="flex h-screen">
      <LoginLeftSide />
      <LoginRightSide />
    </div>
  );
};

export default Login;
