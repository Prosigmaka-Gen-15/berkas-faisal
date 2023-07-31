import React from "react";
import Banner from "/banner.png";
import Card from "./Card";

const Catalog = () => {
  const data = [
    {
      id: 1,
      nama: "Soundcore R100",
      harga: "200.000",
      desc: "A perfect balance of high-fidelity audio",
      img: "/soundcore.png",
    },
    {
      id: 2,
      nama: "Airpods Max",
      harga: "3.000.000",
      desc: "A perfect balance of high-fidelity audio",
      img: "/airpodsmax.png",
    },
    {
      id: 3,
      nama: "Sennheiser ADAPT 660",
      harga: "5.900.000",
      desc: "A perfect balance of high-fidelity audio",
      img: "/sennheiser660.png",
    },
    {
      id: 4,
      nama: "Bose QC45",
      harga: "5.790.000",
      desc: "A perfect balance of high-fidelity audio",
      img: "/boseqc45.png",
    },
    {
      id: 5,
      nama: "Soundcore R100",
      harga: "200.000",
      desc: "A perfect balance of high-fidelity audio",
      img: "/soundcore.png",
    },
    {
      id: 6,
      nama: "Airpods Max",
      harga: "3.000.000",
      desc: "A perfect balance of high-fidelity audio",
      img: "/airpodsmax.png",
    },
    {
      id: 7,
      nama: "Sennheiser ADAPT 660",
      harga: "5.900.000",
      desc: "A perfect balance of high-fidelity audio",
      img: "/sennheiser660.png",
    },
    {
      id: 8,
      nama: "Bose QC45",
      harga: "5.790.000",
      desc: "A perfect balance of high-fidelity audio",
      img: "/boseqc45.png",
    },
    {
      id: 9,
      nama: "Soundcore R100",
      harga: "200.000",
      desc: "A perfect balance of high-fidelity audio",
      img: "/soundcore.png",
    },
    {
      id: 10,
      nama: "Airpods Max",
      harga: "3.000.000",
      desc: "A perfect balance of high-fidelity audio",
      img: "/airpodsmax.png",
    },
    {
      id: 11,
      nama: "Sennheiser ADAPT 660",
      harga: "5.900.000",
      desc: "A perfect balance of high-fidelity audio",
      img: "/sennheiser660.png",
    },
    {
      id: 12,
      nama: "Bose QC45",
      harga: "5.790.000",
      desc: "A perfect balance of high-fidelity audio",
      img: "/boseqc45.png",
    },
  ];
  console.log(data);
  return (
    <div className="flex flex-col gap-6 px-6">
      <img src={Banner} />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-12 pb-10">
        {data.map((item) => (
          <div className="h-full" key={item.id}>
            <Card
              name={item.nama}
              price={item.harga}
              desc={item.desc}
              image={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
