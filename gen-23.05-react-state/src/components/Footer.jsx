import React from "react";

const Footer = () => {
  return (
    <footer class="flex flex-row justify-between w-full h-48 bg-slate-200 px-5 items-center md:px-10 lg:px-10 xl:px-10 2xl:px-10">
      <div class="h-24 w-auto flex flex-row items-center">
        <img
          src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
          class="h-full w-auto"
        />
      </div>
      <div class="flex flex-col justify-center hide-list gap-2">
        <li class="text-xs lg:text-sm">Categories</li>
        <li class="text-xs lg:text-sm">Deals</li>
        <li class="text-xs lg:text-sm">What's New</li>
        <li class="text-xs lg:text-sm">Delivery</li>
      </div>
      <div class="flex flex-col justify-center hide-list">
        <h1 class="text-md lg:text-lg font-semibold">ALogo Electronic</h1>
        <p class="text-xs lg:text-sm">5580 Sporer Locks</p>
        <p class="text-xs lg:text-sm">Kuhnfort, Maine</p>
        <p class="text-xs lg:text-sm">18584-4876</p>
        <p class="text-xs lg:text-sm">1-911-780-0333</p>
      </div>
    </footer>
  );
};

export default Footer;
