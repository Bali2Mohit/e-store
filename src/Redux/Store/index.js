import {configureStore} from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlice.js"
import productSlice from "../Product/productSlice.js"

export const store = configureStore({
    reducer:{
        categoryReducer : categorySlice,
        productReducer : productSlice
    }
})