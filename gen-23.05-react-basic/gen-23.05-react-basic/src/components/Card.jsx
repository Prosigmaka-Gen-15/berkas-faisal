import React from "react";
import image from "../assets/image/soundcore.png";

const Card = (props) => {
  function getImgUrl(name) {
    return new URL(`${name}`, import.meta.url).href;
  }
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center justify-center bg-gray-200 w-full h-72 rounded-md px-4 py-4 ">
        <img
          className="h-64 w-auto object-cover"
          src={getImgUrl(props.image)}
          alt="Card Image"
        />
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="text-xl font-semibold">{props.name}</h1>
        <h1 className="text-xl font-semibold">Rp. {props.price}</h1>
      </div>
      <div className="flex items-center">
        <p>{props.desc}</p>
      </div>
      <div className="flex items-center">
        <button className="transition ease-in-out duration-300 flex justify-center border border-black rounded-3xl px-4 py-1 font-semibold hover:bg-green-700 hover:text-white hover:border-green-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
