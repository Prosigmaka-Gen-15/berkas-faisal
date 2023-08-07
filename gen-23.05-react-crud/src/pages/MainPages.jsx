import React from "react";
import Sidebar from "../components/Sidebar";
import Forms from "../components/Forms";

const MainPages = () => {
  return (
    <div className="flex relative">
      <Sidebar />
      <Forms />
    </div>
  );
};

export default MainPages;
