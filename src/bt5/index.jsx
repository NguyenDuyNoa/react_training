import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";

function BT5() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default BT5;
