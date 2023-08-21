import Footer from "../components/Footer";
import Header from "../components/Header";
import Overview from "../components/Overview";

const Overviews = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Overview />
      <Footer />
    </div>
  );
};

export default Overviews;
