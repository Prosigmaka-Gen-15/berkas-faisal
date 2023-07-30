import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between w-full h-48 bg-slate-200 px-5 items-center md:px-10 lg:px-10 xl:px-10 2xl:px-10">
      <div className="h-24 w-auto flex flex-row items-center">
        <img
          src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
          className="h-full w-auto"
          alt="Logo"
        />
      </div>
      <div className="flex flex-col justify-center hide-list gap-2">
        <li className="text-xs lg:text-sm">Categories</li>
        <li className="text-xs lg:text-sm">Deals</li>
        <li className="text-xs lg:text-sm">What's New</li>
        <li className="text-xs lg:text-sm">Delivery</li>
      </div>
      <div className="flex flex-col justify-center hide-list">
        <h1 className="text-md lg:text-lg font-semibold">ALogo Electronic</h1>
        <p className="text-xs lg:text-sm">5580 Sporer Locks</p>
        <p className="text-xs lg:text-sm">Kuhnfort, Maine</p>
        <p className="text-xs lg:text-sm">18584-4876</p>
        <p className="text-xs lg:text-sm">1-911-780-0333</p>
      </div>
    </footer>
  );
};

export default Footer;
