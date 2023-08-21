import { useState } from "react";

const Sidebar = ({ onUpdate }) => {
  const handleTabChange = (data) => {
    onUpdate(data);
  };
  return (
    <div className="h-screen w-1/4 bg-gray-200 px-6 py-5 flex flex-col justify-between">
      <div>
        <div className="mb-5 w-24">
          <img
            src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
            className="h-full w-auto"
            alt="Logo"
          />
        </div>
        <div
          onClick={() => handleTabChange(1)}
          className="px-4 py-3 bg-gray-200  font-semibold cursor-pointer hover:bg-gray-300 transition ease-in-out"
        >
          Items
        </div>
        <div
          onClick={() => handleTabChange(2)}
          className="px-4 py-3 bg-gray-200 font-semibold cursor-pointer hover:bg-gray-300 transition ease-in-out"
        >
          Transactions
        </div>
      </div>
      <button className="bg-red-600 px-4 py-3 rounded text-white font-semibold">
        Logout
      </button>
    </div>
  );
};
export default Sidebar;
