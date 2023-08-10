import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAuthData } from "../features/authSlice.jsx";

const Header = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  let navigate = useNavigate();

  const handleLogout = () => {
    dispatch(resetAuthData());
    navigate("/");
  };

  return (
    <div className="w-full px-6 py-2 flex flex-row justify-between content-center drop-shadow-xl bg-white">
      <div
        className="w-40 h-12 hover:cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <img
          src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
          className="h-full w-auto"
          alt="Logo"
        />
      </div>
      <div className="hidden md:hidden lg:flex 2xl:flex xl:flex flex-row gap-4 items-center">
        <a className="cursor-pointer hover:opacity-50">
          Categories <i className="fa-sharp fa-solid fa-chevron-down"></i>
        </a>
        <a className="cursor-pointer hover:opacity-50">Deals</a>
        <a className="cursor-pointer hover:opacity-50">What's New</a>
        <a className="cursor-pointer hover:opacity-50">Delivery</a>
      </div>
      <div className="hidden md:hidden lg:flex 2xl:flex xl:flex flex-row gap-4 items-center">
        <a className="cursor-pointer hover:opacity-50">{props.mail}</a>
        <a
          className="cursor-pointer hover:opacity-50"
          onClick={() => navigate("/cartItems")}
        >
          Cart Item
        </a>
        <button
          className="bg-red-600 text-white font-semibold px-4 py-1 rounded flex justify-center items-center"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
