import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk('get categories',()=>{
    const categories = fetch('http://localhost:5001/productCategories')
    .then((res)=>res.json());
    console.log(categories)
    return categories;
})