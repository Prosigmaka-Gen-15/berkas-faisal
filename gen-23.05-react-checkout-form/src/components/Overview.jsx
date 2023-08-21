import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const [ship, setShip] = useState(0);

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.cartItems?.reduce(
    (total, cart) => total + cart.price * cart.cartQuantity,
    0
  );
  const totalItems = cart.cartItems.reduce(
    (total, items) => total + items.cartQuantity,
    0
  );
  const tax = totalPrice * 0.1;

  const finalTotal = ship + totalPrice + tax;

  const handleShippingChange = (event) => {
    const selectedShip = parseInt(event.target.value, 10);
    setShip(selectedShip);
  };

  const handleSubmit = () => {
    if (ship !== 0) {
      const formData = {
        userId: user.id,
        totalItem: totalItems,
        items: cart.cartItems,
        totalPrice: finalTotal,
        tanggal: new Date().toISOString(),
      };
      axios.post("http://localhost:3000/transaction", formData).then((res) => {
        alert("Berhasil menambahkan pesanan!");
        window.location.reload(navigate("/home"));
      });
      console.log(items);
    }
  };
  return (
    <div className="flex flex-col px-20">
      <div className="pb-10 border-b-[1px] border-black ">
        <div className="flex flex-col gap-4 max-h-52 overflow-y-auto mb-10">
          {cart.cartItems?.map((items) => (
            <div className="flex flex-row rounded items-center justify-between">
              <div className="flex flex-row items-center gap-4">
                <div className="w-10 h-10">
                  <img
                    className="h-full w-auto object-cover"
                    src={items.image}
                    alt="Card Image"
                  />
                </div>

                <p>{items.name}</p>
              </div>
              <p>{items.quantity}</p>
              <p>Rp. {items.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <table>
            <tr>
              <td className="w-64 font-semibold">Subtotal harga</td>
              <td>Rp. {totalPrice.toLocaleString()} </td>
            </tr>
            <tr>
              <td className="w-64 font-semibold">Pengiriman</td>
              <td>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleShippingChange}
                >
                  <option value="0" selected>
                    Choose a country
                  </option>
                  <option value="15000">TNE</option>
                  <option value="10000">Sicepot</option>
                  <option value="12000">Tika</option>
                </select>{" "}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="w-full flex flex-col items-end">
        <table className="border-b-[1px] border-black">
          <tr>
            <td className=" font-semibold p-2">Ongkos Kirim</td>
            <td className="w-64 p-2 flex justify-end">
              Rp. {ship.toLocaleString()}{" "}
            </td>
          </tr>
          <tr>
            <td className=" font-semibold p-2">Subtotal</td>
            <td className="w-64 p-2 flex justify-end">
              Rp. {totalPrice.toLocaleString()}{" "}
            </td>
          </tr>
          <tr>
            <td className=" font-semibold p-2">Pajak (10%)</td>
            <td className="w-64 p-2 flex justify-end">
              Rp. {tax.toLocaleString()}{" "}
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td className=" font-semibold p-2">Total harga</td>
            <td className="w-64 p-2 flex justify-end">
              Rp. {finalTotal.toLocaleString()}{" "}
            </td>
          </tr>
          <tr>
            <td className=" font-semibold p-2"> </td>
            <td className="w-64 p-2 flex flex-row gap-4 justify-end">
              <button
                className="rounded bg-blue-600 py-1 px-2 text-white font-semibold"
                onClick={handleSubmit}
              >
                Confirm
              </button>{" "}
              <button
                className="rounded bg-red-600 py-1 px-2 text-white font-semibold"
                onClick={() => navigate("/cartItems/overview")}
              >
                Cancel
              </button>{" "}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Overview;
