import axios from "axios";
import { useEffect, useState } from "react";

const AdminView = () => {
  const [data, setData] = useState([]);
  const getItems = () => {
    axios
      .get("http://localhost:3000/items")
      .then((response) => setData(response.data))
      .catch((error) => {
        navigate("/login");
        alert("lu bukan admin");
        console.log(error);
      });
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <div className="flex w-full h-screen px-6 py-24 overflow-y-auto">
      <div className="w-full">
        <table className="w-full table-auto">
          <thead className="border-black border rounded">
            <tr className="text-left">
              <th className="px-4 py-3 bg-gray-300">Nama</th>
              <th className="px-4 py-3 bg-gray-300">Harga</th>
              <th className="px-4 py-3 bg-gray-300">Desc</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr key={data.id}>
                <td className="border border-black px-4 py-3">{data.nama}</td>
                <td className="border border-black divide-y divide-black">
                  Rp. {data.harga.toLocaleString()}
                </td>
                <td className="border  border-black px-4 py-3">
                  Rp.{data.desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminView;
