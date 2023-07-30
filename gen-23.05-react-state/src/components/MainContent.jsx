import React from "react";
import Images from "./Images";

const MainContent = () => {
  return (
    <div className="flex flex-col mx-10 lg:mx-52 py-10">
      <div className="flex flex-col gap-6 sm:flex-col 2xl:flex-row lg:flex-row xl:flex-row md:flex-col">
        <Images />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">Airpods Max</h1>
            <p className="text-xl">$599</p>
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
            <h1 className="text-xl">Product Detail</h1>
          </div>
          <div>
            <p>
              The AirPods Max are over-ear headphones that are different from
              most of the others. They use stainless steel and aluminum
              materials for the build, making them a bit heavier than some of
              their biggest competitors from Sony and Bose. They also use
              removable ear cups with mesh material.
              <br />
              <br />
              Available in Silver, Space Gray, Sky Blue, Green, and Pink, these
              headphones have a Digital Crown for controlling the audio, a
              Lightning port, and a Smart Case to put them in low-power mode
              since they don’t have an on/off button. The AirPods Max has up to
              20 hours of listening time on a single charge with Active Noise
              Cancellation or Transparency mode enabled. Five minutes of charge
              time provides around 1.5 hours of listening time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
