import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between py-6 px-3 items-center bg-white drop-shadow-xl">
      <div className="w-40 h-10">
        <img
          src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
          className="h-full w-auto"
        />
      </div>
      <div className="flex-row hidden items-center space-x-2 justify-center md:flex lg:flex xl:flex 2xl:flex list-none">
        <li className="nav-item">
          Categories <i className="fa-sharp fa-solid fa-chevron-down"></i>
        </li>
        <li className="nav-item">Deals</li>
        <li className="nav-item">What's New</li>
        <li className="nav-item">Delivery</li>
      </div>
      <div className="hidden md:flex lg:flex xl:flex 2xl:flex content-center space-x-4 list-none">
        <li className="nav-item">Account</li>
        <li className="nav-item">Cart Item</li>
      </div>
      <div className="flex md:hidden xl:hidden lg:hidden 2xl:hidden">
        <a>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
