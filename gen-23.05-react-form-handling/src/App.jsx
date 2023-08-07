import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import Forms from "./components/Forms";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex relative">
      <Sidebar />
      <Forms />
    </div>
  );
}

export default App;
