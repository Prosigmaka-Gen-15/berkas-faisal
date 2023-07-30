import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
