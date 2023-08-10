import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import CartItem from "./components/CartItem";
import Login from "./Pages/Login";
import PrivateRoute from "./route/PrivateRoutes";
import PublicRoutes from "./route/PublicRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cartItems" element={<CartItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
