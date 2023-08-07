import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Forms = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      {show && <Modal />}
      <div className="w-full py-6 px-9 mx-auto mt-12 flex flex-col gap-5">
        <div className=" flex justify-between">
          <h1 className="text-2xl font-bold">Welcome</h1>
          <button
            onClick={() => setShow(true)}
            className="bg-yellow-400 rounded text-white py-2 px-4 font-bold hover:bg-yellow-600 transition ease-in-out"
          >
            Add Items
          </button>
        </div>
        <div className="w-full">
          <table className="table-auto w-full rounded">
            <thead className="bg-gray-300 ">
              <tr>
                <th className="text-left py-3 px-6">Song</th>
                <th className="text-left py-3 px-6">Artist</th>
                <th className="text-left py-3 px-6">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left py-3 px-6">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="text-left py-3 px-6">Malcolm Lockyer</td>
                <td className="text-left py-3 px-6">1961</td>
              </tr>
              <tr>
                <td className="text-left py-3 px-6">Witchy Woman</td>
                <td className="text-left py-3 px-6">The Eagles</td>
                <td className="text-left py-3 px-6">1972</td>
              </tr>
              <tr>
                <td className="text-left py-3 px-6">Shining Star</td>
                <td className="text-left py-3 px-6">Earth, Wind, and Fire</td>
                <td className="text-left py-3 px-6">1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Forms;
