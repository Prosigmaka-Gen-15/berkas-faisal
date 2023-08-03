import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "/banner.png";
import Card from "./Card";

const Catalog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:3000/items");
        setData(res.data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [data.length]);

  return (
    <div className="flex flex-col gap-6 px-6">
      <img src={Banner} />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-12 pb-10">
        {data.map((item) => (
          <div className="h-full" key={item.id}>
            <Card
              id={item.id}
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
