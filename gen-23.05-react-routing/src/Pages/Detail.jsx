import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";

const Detail = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Detail;
