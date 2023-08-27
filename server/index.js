const express = require('express');
const app = express();
const productCategories = require('./Routes/productCategories.js');
const products = require('./Routes/product.js');

const cors = require('cors');
app.use(cors());

app.use("/productCategories",productCategories);
app.use("/getProducts",products);

const Port = 5001;

const server = app.listen(Port, ()=>{
    console.log('App is running on 5001 port');
})