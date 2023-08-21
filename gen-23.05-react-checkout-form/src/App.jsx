import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import CartItem from "./components/CartItem";
import Login from "./Pages/Login";
import PrivateRoute from "./route/PrivateRoutes";
import PublicRoutes from "./route/PublicRoutes";
import Overviews from "./Pages/Overview";
import AdminRoutes from "./route/AdminRoutes";
import AdminPages from "./Pages/AdminPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cartItems" element={<CartItem />} />
          <Route path="/cartItems/overview" element={<Overviews />} />
        </Route>
        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<AdminPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
