import React from "react";

const Sidebar = () => {
  return (
    <div className="w-80 bg-yellow-500 h-screen flex flex-col justify-between py-6 px-9">
      <div className="flex flex-col gap-6">
        <h1 className="text-white font-bold text-2xl">
          <i class="fa-solid fa-music"></i> Music
          <br /> Dash
        </h1>
        <div className="flex flex-col gap-3">
          <div className="rounded flex items-center text-lg text-white font-semibold hover:bg-blue-900 hover:text-yellow-500 cursor-pointer transition ease-in-out p-2 justify-between">
            Home
            <i class="fa-solid fa-house-chimney"></i>
          </div>
        </div>
      </div>
      <div className="rounded flex items-center text-lg text-white font-semibold hover:bg-blue-900 hover:text-yellow-500 cursor-pointer transition ease-in-out p-2 justify-between">
        Logout
        <i class="fa-solid fa-right-from-bracket"></i>
      </div>
    </div>
  );
};

export default Sidebar;
