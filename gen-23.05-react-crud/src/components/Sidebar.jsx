import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/8 bg-yellow-400 h-screen flex flex-col gap-6 py-6 px-9">
      <h1 className="text-white font-bold text-2xl">Admin Page</h1>
      <div className="flex flex-col gap-3">
        <div className="rounded flex items-center text-lg text-white font-semibold hover:bg-yellow-600 hover:text-blue-900 cursor-pointer transition ease-in-out p-2 justify-between">
          Home
          <i class="fa-solid fa-house-chimney"></i>
        </div>
        <div className="rounded flex items-center text-lg text-white font-semibold hover:bg-yellow-600 hover:text-blue-900 cursor-pointer transition ease-in-out p-2 justify-between">
          Logout
          <i class="fa-solid fa-right-from-bracket"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
