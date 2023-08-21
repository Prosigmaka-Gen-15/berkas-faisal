import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer, { productsFetch } from "./features/productsSlice.jsx";
import { productsApi } from "./features/products.jsx";

import cartReducer from "./features/cartSlice.jsx";
import authSlice from "./features/authSlice.jsx";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
