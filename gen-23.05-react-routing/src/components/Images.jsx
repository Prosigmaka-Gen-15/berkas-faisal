import React, { useState } from "react";
import Airpods from "/airpodsmax.png";
import Airpods1 from "/airpodsmax1.png";
import Airpods2 from "/airpodsmax2.png";
import Airpods3 from "/airpodsmax3.png";

const Images = () => {
  const [img, setImg] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div className="flex flex-col justify-center items-center bg-gray-200 w-full h-96 space-y-2 2xl:w-96 lg:w-96 xl:w-96 md:w-full">
        <>
          {img === 0 ? (
            <img src={Airpods} id="mainImage" className="w-auto h-64" />
          ) : img === 1 ? (
            <img src={Airpods1} id="mainImage" className="w-auto h-64" />
          ) : img === 2 ? (
            <img src={Airpods2} id="mainImage" className="w-auto h-64" />
          ) : img === 3 ? (
            <img src={Airpods3} id="mainImage" className="w-auto h-64" />
          ) : (
            ""
          )}
        </>
      </div>
      <div className="grid w-full grid-cols-4 gap-4">
        <div
          className="flex justify-center items-center h-24 bg-gray-200 cursor-pointer hover:bg-green-700 transition ease-in-out duration-300"
          onClick={() => setImg(1)}
        >
          <img src={Airpods1} className="w-auto h-12 cursor-pointer " />
        </div>
        <div
          className="flex justify-center items-center h-24 bg-gray-200 cursor-pointer hover:bg-green-700 transition ease-in-out duration-300"
          onClick={() => setImg(2)}
        >
          <img src={Airpods2} className="w-auto h-12 cursor-pointer" />
        </div>
        <div
          className="flex justify-center items-center h-24 bg-gray-200 cursor-pointer hover:bg-green-700 transition ease-in-out duration-300"
          onClick={() => setImg(0)}
        >
          <img src={Airpods} className="w-auto h-12 cursor-pointer" />
        </div>
        <div
          className="flex justify-center items-center h-24 bg-gray-200 cursor-pointer hover:bg-green-700 transition ease-in-out duration-300"
          onClick={() => setImg(3)}
        >
          <img src={Airpods3} className="w-auto h-12 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Images;
