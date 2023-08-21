import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const getItems = () => {
    axios
      .get("http://localhost:3000/660/transaction", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
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
  console.log(data);
  return (
    <div className="flex w-full h-auto px-6 py-5">
      <div className="w-full">
        <table className="w-full">
          <thead className="border-black border rounded">
            <tr className="text-left">
              <th className="px-4 py-3 bg-gray-300">Total Item Qty</th>
              <th className="px-4 py-3 bg-gray-300">Items</th>
              <th className="px-4 py-3 bg-gray-300">Total price</th>
              <th className="px-4 py-3 bg-gray-300">Added Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr key={data.id}>
                <td className="border border-black px-4 py-3">
                  {data.totalItem}
                </td>
                <td className="border border-black divide-y divide-black">
                  {data.items.map((items) => (
                    <div
                      className="w-full grid grid-cols-2 h-auto"
                      key={items.id}
                    >
                      <p>{items.name}</p>
                      <p>Qty : {items.cartQuantity}</p>
                    </div>
                  ))}
                </td>
                <td className="border  border-black px-4 py-3">
                  Rp.{data.totalPrice.toLocaleString()}
                </td>
                <td className="border  border-black px-4 py-3">
                  {data.tanggal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
