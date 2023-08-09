import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import {
  decreaseCart,
  increaseCart,
  removeFromCart,
} from "../features/cartSlice";

function CartItem() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleIncreaseCart = (product) => {
    dispatch(increaseCart(product));
  };

  const removeCart = (product) => {
    dispatch(removeFromCart(product));
  };

  function getImgUrl(name) {
    return new URL(`${name}`, import.meta.url).href;
  }

  return (
    <div className="space-y-4">
      <Header />
      <div className="flex justify-center pb-2 pt-24">
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
      </div>
      {/* Cart empty */}
      {cart.cartItems.length === 0 ? (
        <div className="flex flex-col items-center gap-3">
          <p className="text-2xl">Your cart is empty</p>
          <div>
            <Link to="/">
              <span className="text-blue-600">Start Shopping now!!</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 w-full ">
          {cart.cartItems?.map((cartItem) => (
            <div
              className="flex items-center border-lg rounded-lg py-24 w-2/4 h-40 bg-green-200"
              key={cartItem.productId}
            >
              <img
                src={getImgUrl(cartItem.img1)}
                alt="title"
                className="w-32 h-32 object-cover p-4"
              />
              <div className="ml-4 flex-grow">
                <h2 className="text-lg font-semibold">{cartItem.name}</h2>
                <p className="text-gray-600">Rp.{cartItem.harga}</p>
              </div>
              <div className="flex items-center p-5 gap-2">
                <button
                  className="bg-green-400 py-1 px-3 rounded-lg text-white text-3xl"
                  onClick={() => handleDecreaseCart(cartItem)}
                >
                  -
                </button>
                <span className="mx-2 p-3">{cartItem.cartQuantity}</span>
                <button
                  className="bg-green-400 py-1 px-2 rounded-lg text-white text-3xl"
                  onClick={() => handleIncreaseCart(cartItem)}
                >
                  +
                </button>
                <button
                  className="bg-red-600 border rounded-lg px-3 py-2 hover:bg-red-700 transition"
                  onClick={() => removeCart(cartItem)}
                >
                  <i class="fa fa-trash-o text-white"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default CartItem;
