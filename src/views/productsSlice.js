import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsData: [],
    productsCart: [],
    loading: null,
  },
  reducers: {
    setProductsData: (state, { payload }) => {
      state.productsData = [...payload];
    },
    setProductsCart: (state, { payload }) => {
      state.productsCart = [...payload];
    },
    removeProduct: (state, action) => {
      const index = state.productsCart.findIndex(
        (product) => product.id === action.payload
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
  removeProduct,
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

export default productsSlice.reducer;
