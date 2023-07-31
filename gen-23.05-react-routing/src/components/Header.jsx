import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="w-full px-6 py-2 flex flex-row justify-between content-center drop-shadow-xl bg-white">
      <div
        className="w-40 h-12 hover:cursor-pointer"
        onClick={() => navigate("/")}
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
        <a className="cursor-pointer hover:opacity-50">Account</a>
        <a className="cursor-pointer hover:opacity-50">Cart Item</a>
      </div>
    </div>
  );
};

export default Header;
