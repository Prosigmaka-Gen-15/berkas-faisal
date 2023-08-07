import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-yellow-400 h-screen flex flex-col gap-6 py-6 px-9">
      <h1 className="text-white font-bold text-2xl">Admin Page</h1>
      <div className="flex flex-col gap-3">
        <div className="flex items-center text-lg text-white font-semibold hover:bg-yellow-600 cursor-pointer p-2">
          Home
        </div>
        <div className="flex items-center text-lg text-white font-semibold hover:bg-yellow-600 cursor-pointer p-2">
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
