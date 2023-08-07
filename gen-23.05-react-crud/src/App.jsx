import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from "./components/Forms";
import MainPages from "./pages/MainPages";
// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
