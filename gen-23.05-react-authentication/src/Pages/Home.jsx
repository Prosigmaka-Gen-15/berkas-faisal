import Header from "../components/Header";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <>
      <Header mail={user.email} />
      <Catalog />
      <Footer />
    </>
  );
}

export default Home;
