import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [data, setData] = useState({});
  let { id } = useParams();
  var url = "http://localhost:3000/items/" + id;

  async function getDataById() {
    try {
      const response = await axios.get("http://localhost:3000/items/" + id);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataById();
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <MainContent
        name={data.nama}
        desc={data.desc}
        price={data.harga}
        img1={data.img}
        img2={data.img2}
        img3={data.img3}
        img4={data.img4}
      />
      <Footer />
    </div>
  );
};

export default Detail;
