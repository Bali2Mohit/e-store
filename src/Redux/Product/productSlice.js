import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from './productAction'

const initialState = {
  products: [],
  status: "idle",
  error: "",
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "Loading..";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "Success";
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    },
  },
});
export default productSlice.reducer;



