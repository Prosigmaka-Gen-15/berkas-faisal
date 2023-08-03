import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center justify-center bg-gray-200 w-full h-72 rounded-md px-4 py-4 ">
        <img
          className="h-64 w-auto object-cover"
          src={props.image}
          alt="Card Image"
        />
      </div>
      <div
        onClick={() => navigate("/detail/" + `${props.id}`)}
        className="flex flex-row justify-between hover:cursor-pointer hover:border-b hover:border-b-black transition ease-in-out duration-300 "
      >
        <h1 className="text-xl font-semibold">{props.name}</h1>
        <h1 className="text-xl font-semibold">Rp. {props.price}</h1>
      </div>
      <div className="flex items-center">
        <p className="truncate">{props.desc}</p>
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
