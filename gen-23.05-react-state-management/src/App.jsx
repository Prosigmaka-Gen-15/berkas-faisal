import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import CartItem from "./components/CartItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cartItems" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
