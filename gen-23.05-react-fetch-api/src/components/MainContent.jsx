import React, { useEffect, useState } from "react";
import Images from "./Images";

const MainContent = (props) => {
  const [img, setImg] = useState('');

  useEffect(() => {
    setImg(props.img1);
  }, [props.img1]);

  return (
    <div className="flex flex-col mx-10 lg:mx-52 py-10">
      <div className="flex flex-col gap-6 sm:flex-col 2xl:flex-row lg:flex-row xl:flex-row md:flex-col">
        <div className="flex flex-col justify-center items-center space-y-2">
          <div className="flex flex-col justify-center items-center bg-gray-200 w-full h-96 space-y-2 2xl:w-96 lg:w-96 xl:w-96 md:w-full">
            <>
              <img src={img} id="mainImage" className="w-auto h-64" />
            </>
          </div>
          <div className="grid w-full grid-cols-4 gap-4">
            <div
              className="flex justify-center items-center h-24 bg-gray-200 cursor-pointer hover:bg-green-700 transition ease-in-out duration-300"
              onClick={() => setImg(props.img1)}
            >
              <img src={props.img1} className="w-auto h-12 cursor-pointer " />
            </div>
            <div
              className="flex justify-center items-center h-24 bg-gray-200 cursor-pointer hover:bg-green-700 transition ease-in-out duration-300"
              onClick={() => setImg(props.img2)}
            >
              <img src={props.img2} className="w-auto h-12 cursor-pointer" />
            </div>
            <div
              className="flex justify-center items-center h-24 bg-gray-200 cursor-pointer hover:bg-green-700 transition ease-in-out duration-300"
              onClick={() => setImg(props.img3)}
            >
              <img src={props.img3} className="w-auto h-12 cursor-pointer" />
            </div>
            <div
              className="flex justify-center items-center h-24 bg-gray-200 cursor-pointer hover:bg-green-700 transition ease-in-out duration-300"
              onClick={() => setImg(props.img4)}
            >
              <img src={props.img4} className="w-auto h-12 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">{props.name}</h1>
            <p className="text-xl">Rp. {props.price}</p>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row w-24 justify-between px-3 py-1 border border-black items-center rounded-full">
              <button className="w-4 h-4 flex items-center justify-center bg-black text-white rounded-full">
                +
              </button>
              <input
                type="text"
                value="1"
                className="w-4 text-center"
                disabled
              />
              <button className="w-4 h-4 flex items-center justify-center bg-black text-white rounded-full">
                -
              </button>
            </div>
            <button className="flex justify-center items-center rounded-full w-36 bg-green-700 text-white font-semibold px-3 hover:bg-green-800">
              Add to Cart
            </button>
          </div>
          <div className="border-y border-slate-200 w-full py-5">
            <h1 className="text-xl w-full">Product Detail</h1>
          </div>
          <div>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
