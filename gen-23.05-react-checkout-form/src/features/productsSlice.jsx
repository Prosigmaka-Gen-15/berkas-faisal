import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* mendefinisikan state awal dari slice yaitu items, 
status (pending,successful,rejected), dan error handling */
const initialState = {
  items: [],
  status: null,
  error: null,
};

//fungsi untuk mengambil data produk dari server endpoint
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(" http://localhost:3000/items");
    return response?.data;
  }
);

//membuat slice dengan nama slice 'products'
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    //untuk response dari data
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "Succesfull";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "Rejected";
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
