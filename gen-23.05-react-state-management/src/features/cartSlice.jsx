import { createSlice } from "@reduxjs/toolkit";

//definisi stat untuk cartSlice
const initialState = {
  cartItems: [],
  cartTotalItemsQuantity: 0,
  cartTotalAmount: 0,
};

//membua slice dengan nama 'cart'
const cartSlice = createSlice({
  name: "cart",
  initialState,

  //fungsi untuk mengubah state pada slice
  reducers: {
    addToCart(state, action) {
      //mencari index item
      const itemIndex = state.cartItems.findIndex(
        (item) => item.productId === action.payload.productId
      );
      //usecase bila item sudah ada dicart maka akan increment, bila tidak akan ditambahkan 1
      if (itemIndex >= 0) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[itemIndex].cartQuantity += 1;
        state.cartItems = updatedCartItems;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.productId !== action.payload.productId
        );

        state.cartItems = nextCartItems;
      }
    },
    increaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }
    },
    removeFromCart(state, action) {
      const itemId = action.payload.productId;
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== itemId
      );
    },
  },
});

export const { addToCart, decreaseCart, increaseCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
