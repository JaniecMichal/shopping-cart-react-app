import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsData: [],
    productsCart: [],
    subTotal: 0,
    loading: null,
  },
  reducers: {
    setProductsData: (state, { payload }) => {
      state.productsData = [...payload];
    },
    setProductsCart: (state, { payload }) => {
      state.productsCart = [...payload];
    },
    decreaseQuantity: (state, { payload }) => {
      const index = state.productsCart.findIndex(
        (product) => product.productId === payload
      );
      state.productsCart[index].quantity = --state.productsCart[index].quantity;
    },
    increaseQuantity: (state, { payload }) => {
      const index = state.productsCart.findIndex(
        (product) => product.productId === payload
      );
      state.productsCart[index].quantity = ++state.productsCart[index].quantity;
    },
    setSubTotal: (state, { payload }) => {
      state.subTotal = payload;
    },
    removeProduct: (state, { payload }) => {
      const index = state.productsCart.findIndex(
        (product) => product.productId === payload
      );
      state.productsCart.splice(index, 1);
    },
    fetchProductsData: () => {},
    fetchProductsCart: () => {},
    setLoading: (state) => {
      state.loading = true;
    },
    setOffLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  setProductsData,
  setProductsCart,
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
  setSubTotal,
  fetchProductsData,
  fetchProductsCart,
  setLoading,
  setOffLoading,
} = productsSlice.actions;

const selectProductsState = (state) => state.products;

export const selectProductsCart = (state) =>
  selectProductsState(state).productsCart;
export const selectProductsData = (state) =>
  selectProductsState(state).productsData;
export const selectLoading = (state) => selectProductsState(state).loading;
export const selectSubTotal = (state) => selectProductsState(state).subTotal;

export default productsSlice.reducer;
